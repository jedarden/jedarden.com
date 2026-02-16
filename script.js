// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Generate project HTML
function generateProjectsHTML() {
    const projectsSection = document.querySelector('.projects');
    const projectsContainer = projectsSection.querySelector('.section-title');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-showcase';
        projectDiv.setAttribute('data-project', project.id);

        projectDiv.innerHTML = `
            <div class="desktop-layout">
                <!-- Left: Fixed Visual + Logo Container + Title -->
                <div class="visual-container">
                    <h3>${project.name}</h3>
                    <p class="project-tagline">${project.tagline}</p>
                    <div class="project-icon-wrapper">
                        ${project.icon}
                    </div>
                    ${project.visual}
                </div>

                <!-- Right: Scrolling Text -->
                <div class="text-content">
                    <div class="text-inner">
                        <div class="project-description">
                            ${project.description.map(para => `<p>${para}</p>`).join('')}
                        </div>
                        <div class="tech-stack">
                            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            ${project.github ? `<a href="${project.github}" target="_blank" class="btn-project">View on GitHub →</a>` : ''}
                            ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn-project${project.github ? '-secondary' : ''}">View Demo →</a>` : ''}
                        </div>
                    </div>
                </div>
            </div>
        `;

        projectsSection.appendChild(projectDiv);
    });
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
        logoClone.style.opacity = '0';
        projectVisual.appendChild(logoClone);

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

        // Project exits viewport: visual and logo clone fade out with longer transition
        gsap.timeline({
            scrollTrigger: {
                trigger: showcase,
                start: 'bottom 60%',
                end: 'bottom 20%',
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
    generateProjectsHTML();
    initHeroAnimations();
    initLogoAnimations();
});
