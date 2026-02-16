// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Parse markdown in description paragraphs
function parseMarkdown(text) {
    // Convert ## headers to h4 elements
    if (text.startsWith('## ')) {
        return `<h4 class="section-header">${text.substring(3)}</h4>`;
    }
    return `<p>${text}</p>`;
}

// Generate table of contents cards
function generateTOC() {
    const projectsSection = document.querySelector('.projects');
    const sectionBlurb = projectsSection.querySelector('.section-blurb');

    // Create TOC container
    const tocContainer = document.createElement('div');
    tocContainer.className = 'toc-grid';

    projects.forEach(project => {
        const card = document.createElement('a');
        card.className = 'toc-card';
        card.href = `#${project.id}`;
        card.innerHTML = `
            <div class="toc-icon">${project.icon || ''}</div>
            <div class="toc-info">
                <span class="toc-name">${project.name}</span>
                <span class="toc-tagline">${project.tagline}</span>
            </div>
        `;
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(`[data-project="${project.id}"]`);
            if (target) {
                const headerOffset = 70; // Account for sticky header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
        tocContainer.appendChild(card);
    });

    // Insert after section blurb
    sectionBlurb.insertAdjacentElement('afterend', tocContainer);
}

// Generate floating navigation
function generateFloatingNav() {
    const nav = document.createElement('nav');
    nav.className = 'floating-nav';
    nav.innerHTML = `
        <div class="floating-nav-header">Projects</div>
        <div class="floating-nav-items">
            ${projects.map(project => `
                <a class="floating-nav-item" href="#${project.id}" data-target="${project.id}">
                    <span class="nav-dot"></span>
                    <span class="nav-label">${project.name}</span>
                </a>
            `).join('')}
        </div>
    `;

    document.body.appendChild(nav);

    // Add click handlers
    nav.querySelectorAll('.floating-nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.dataset.target;
            const target = document.querySelector(`[data-project="${targetId}"]`);
            if (target) {
                const headerOffset = 70; // Account for sticky header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // Track active project on scroll
    initNavScrollTracking(nav);
}

// Track which project is in view and highlight in nav
function initNavScrollTracking(nav) {
    const navItems = nav.querySelectorAll('.floating-nav-item');

    ScrollTrigger.create({
        trigger: '.projects',
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: () => {
            const showcases = document.querySelectorAll('.project-showcase');
            let activeId = null;

            showcases.forEach(showcase => {
                const rect = showcase.getBoundingClientRect();
                const viewportMiddle = window.innerHeight / 2;
                if (rect.top < viewportMiddle && rect.bottom > viewportMiddle) {
                    activeId = showcase.dataset.project;
                }
            });

            navItems.forEach(item => {
                if (item.dataset.target === activeId) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    });

    // Show/hide nav based on first project showcase visibility
    // Nav appears only when scrolled past the TOC into actual project content
    ScrollTrigger.create({
        trigger: '.project-showcase',
        start: 'top 50%',
        end: 'bottom 20%',
        endTrigger: '.projects',
        onEnter: () => nav.classList.add('visible'),
        onLeave: () => nav.classList.remove('visible'),
        onEnterBack: () => nav.classList.add('visible'),
        onLeaveBack: () => nav.classList.remove('visible')
    });
}

// Generate project HTML
function generateProjectsHTML() {
    const projectsSection = document.querySelector('.projects');
    const projectsContainer = projectsSection.querySelector('.section-title');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-showcase';
        projectDiv.id = project.id;
        projectDiv.setAttribute('data-project', project.id);

        projectDiv.innerHTML = `
            <div class="desktop-layout">
                <!-- Left: Fixed Visual Stack (Title, Animation, Links) -->
                <div class="visual-container">
                    <div class="project-header">
                        ${project.icon ? `<div class="project-icon-wrapper">${project.icon}</div>` : ''}
                        <h3>${project.name}</h3>
                    </div>
                    <p class="project-tagline">${project.tagline}</p>
                    ${project.visual}
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" class="btn-project">GitHub →</a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn-project${project.github ? '-secondary' : ''}">Demo →</a>` : ''}
                    </div>
                    <div class="tech-stack">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>

                <!-- Right: Scrolling Text -->
                <div class="text-content">
                    <div class="text-inner">
                        ${project.tldr ? `<p class="project-tldr">${project.tldr}</p>` : ''}
                        <div class="project-description">
                            ${project.description.map(para => parseMarkdown(para)).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        projectsSection.appendChild(projectDiv);
    });
}

// Check if mobile viewport
function isMobile() {
    return window.innerWidth <= 1024;
}

// Initialize logo animations (simplified - fixed hero logo)
function initLogoAnimations() {
    const projectShowcases = document.querySelectorAll('.project-showcase');

    projectShowcases.forEach((showcase, index) => {
        const visualContainer = showcase.querySelector('.visual-container');
        const projectVisual = showcase.querySelector('.project-visual');

        // Create logo clone for this project's visual
        const logoClone = document.createElement('div');
        logoClone.className = 'logo-in-visual';
        logoClone.style.backgroundImage = 'url(logo.jpg)';
        projectVisual.appendChild(logoClone);

        // On mobile, show everything immediately without scroll animations
        if (isMobile()) {
            visualContainer.style.opacity = '1';
            visualContainer.style.transform = 'none';
            logoClone.style.opacity = '1';
            return;
        }

        // Desktop: scroll-based animations
        logoClone.style.opacity = '0';

        // Project enters viewport: visual and logo clone fade in
        gsap.timeline({
            scrollTrigger: {
                trigger: showcase,
                start: 'top 90%',
                end: 'top 30%',
                scrub: 1.5
            }
        })
        .fromTo(visualContainer,
            { opacity: 0, scale: 0.85, y: 30 },
            { opacity: 1, scale: 1, y: 0, immediateRender: false }, 0)
        .fromTo(logoClone,
            { opacity: 0, scale: 0.7, rotation: -45 },
            { opacity: 1, scale: 1, rotation: 0, immediateRender: false }, 0.3);

        // Project exits viewport: visual and logo clone fade out (delayed until content nearly done)
        gsap.timeline({
            scrollTrigger: {
                trigger: showcase,
                start: 'bottom 25%',
                end: 'bottom 5%',
                scrub: 1.5
            }
        })
        .to(logoClone, { opacity: 0, scale: 0.7, rotation: 45, immediateRender: false }, 0)
        .to(visualContainer, { opacity: 0, scale: 0.85, y: -30, immediateRender: false }, 0);
    });
}

// Initialize hero animations
function initHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');

    gsap.to(heroContent, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    generateTOC();
    generateProjectsHTML();
    generateFloatingNav();
    initHeroAnimations();
    initLogoAnimations();
});
