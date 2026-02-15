// Simple feedback widget for static site - Agentation-compatible
class FeedbackWidget {
    constructor() {
        this.annotationMode = false;
        this.annotations = [];
        this.sessionId = this.getOrCreateSessionId();
        this.endpoint = 'http://localhost:4747';
        this.init();
    }

    getOrCreateSessionId() {
        let sessionId = localStorage.getItem('agentation_session_id');
        if (!sessionId) {
            sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('agentation_session_id', sessionId);
        }
        return sessionId;
    }

    init() {
        // Create feedback button
        const button = document.createElement('button');
        button.id = 'feedback-toggle';
        button.innerHTML = '💬';
        button.title = 'Click to provide feedback';
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #8B1A1A, #A52A2A);
            color: white;
            font-size: 28px;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(139, 26, 26, 0.4);
            z-index: 10000;
            transition: all 0.3s ease;
        `;

        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });

        button.addEventListener('click', () => this.toggleAnnotationMode());

        document.body.appendChild(button);

        // Create status indicator
        this.createStatusIndicator();

        // Initialize session on server
        this.initializeSession();
    }

    createStatusIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'feedback-status';
        indicator.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            background: white;
            padding: 15px 20px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            display: none;
            font-family: -apple-system, sans-serif;
            font-size: 14px;
            max-width: 300px;
        `;
        document.body.appendChild(indicator);
        this.statusIndicator = indicator;
    }

    async initializeSession() {
        try {
            const response = await fetch(`${this.endpoint}/sessions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: this.sessionId,
                    url: window.location.href,
                    title: document.title,
                    timestamp: Date.now()
                })
            });

            if (response.ok) {
                console.log('Agentation session initialized:', this.sessionId);
            }
        } catch (error) {
            console.warn('Agentation server not available - using local mode');
        }
    }

    showStatus(message, duration = 3000) {
        this.statusIndicator.textContent = message;
        this.statusIndicator.style.display = 'block';
        setTimeout(() => {
            this.statusIndicator.style.display = 'none';
        }, duration);
    }

    toggleAnnotationMode() {
        this.annotationMode = !this.annotationMode;

        if (this.annotationMode) {
            this.enableAnnotationMode();
        } else {
            this.disableAnnotationMode();
        }
    }

    enableAnnotationMode() {
        document.body.style.cursor = 'crosshair';
        this.showStatus('Click any element to add feedback', 5000);

        // Add click listener to all elements
        document.addEventListener('click', this.handleElementClick, true);

        // Change button appearance
        const button = document.getElementById('feedback-toggle');
        button.innerHTML = '✕';
        button.style.background = 'linear-gradient(135deg, #E74C3C, #C0392B)';
    }

    disableAnnotationMode() {
        document.body.style.cursor = 'default';
        document.removeEventListener('click', this.handleElementClick, true);

        const button = document.getElementById('feedback-toggle');
        button.innerHTML = '💬';
        button.style.background = 'linear-gradient(135deg, #8B1A1A, #A52A2A)';

        // Show summary if annotations exist
        if (this.annotations.length > 0) {
            this.showSummary();
        }
    }

    handleElementClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const element = event.target;

        // Don't annotate the feedback widget itself
        if (element.id === 'feedback-toggle' || element.closest('#feedback-status')) {
            return;
        }

        this.createAnnotation(element, event);
    }

    createAnnotation(element, event) {
        const comment = prompt('What feedback do you have about this element?');

        if (!comment) {
            return;
        }

        // Gather element information
        const rect = element.getBoundingClientRect();
        const selector = this.getSelector(element);

        const annotation = {
            id: 'ann_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            sessionId: this.sessionId,
            url: window.location.href,
            timestamp: Date.now(),
            comment: comment,
            element: element.tagName.toLowerCase(),
            elementPath: this.getElementPath(element),
            cssClasses: element.className || undefined,
            x: (event.clientX / window.innerWidth) * 100,
            y: rect.top + window.scrollY,
            boundingBox: {
                x: rect.left,
                y: rect.top,
                width: rect.width,
                height: rect.height
            },
            nearbyText: this.getNearbyText(element),
            status: 'pending'
        };

        this.annotations.push(annotation);

        // Save to local storage
        localStorage.setItem('agentation_annotations_' + this.sessionId, JSON.stringify(this.annotations));

        // Send to server
        this.sendAnnotation(annotation);

        this.showStatus(`Feedback recorded! (${this.annotations.length} total)`);

        // Visual indicator
        this.addVisualMarker(element, annotation);
    }

    getSelector(element) {
        if (element.id) {
            return '#' + element.id;
        }

        const path = [];
        while (element && element.nodeType === Node.ELEMENT_NODE) {
            let selector = element.nodeName.toLowerCase();
            if (element.className) {
                selector += '.' + element.className.split(' ').join('.');
            }
            path.unshift(selector);
            element = element.parentNode;
        }
        return path.join(' > ');
    }

    getElementPath(element) {
        const path = [];
        while (element && element !== document.body) {
            path.unshift(element.tagName.toLowerCase());
            element = element.parentElement;
        }
        return 'body > ' + path.join(' > ');
    }

    getNearbyText(element) {
        const text = element.textContent.trim().substring(0, 100);
        return text || element.getAttribute('aria-label') || element.getAttribute('alt') || undefined;
    }

    addVisualMarker(element, annotation) {
        const marker = document.createElement('div');
        marker.className = 'feedback-marker';
        marker.innerHTML = '💬';
        marker.style.cssText = `
            position: absolute;
            width: 30px;
            height: 30px;
            background: #E74C3C;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            z-index: 9998;
            pointer-events: none;
            box-shadow: 0 2px 10px rgba(231, 76, 60, 0.4);
        `;

        const rect = element.getBoundingClientRect();
        marker.style.left = (rect.left + rect.width - 15) + 'px';
        marker.style.top = (rect.top + window.scrollY - 15) + 'px';

        document.body.appendChild(marker);
    }

    async sendAnnotation(annotation) {
        try {
            const response = await fetch(`${this.endpoint}/sessions/${this.sessionId}/annotations`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(annotation)
            });

            if (response.ok) {
                console.log('Annotation sent to server:', annotation.id);
            }
        } catch (error) {
            console.warn('Could not send to server - stored locally');
        }
    }

    showSummary() {
        const summary = this.annotations.map((ann, index) =>
            `${index + 1}. ${ann.element} - "${ann.comment}"`
        ).join('\\n');

        alert(`Feedback Summary (${this.annotations.length} items):\\n\\n${summary}\\n\\nFeedback has been sent to the developer's Claude Code session!`);
    }

    async sendToAgent() {
        try {
            // Trigger action on server (sends webhook + SSE event)
            await fetch(`${this.endpoint}/sessions/${this.sessionId}/action`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'submit',
                    annotations: this.annotations
                })
            });

            this.showStatus('Feedback sent to developer!');
        } catch (error) {
            this.showStatus('Feedback saved locally');
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.feedbackWidget = new FeedbackWidget();
    });
} else {
    window.feedbackWidget = new FeedbackWidget();
}
