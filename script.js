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
                <!-- Left: Fixed Visual + Logo Container -->
                <div class="visual-container">
                    <div class="project-icon-wrapper">
                        ${project.icon}
                    </div>
                    ${project.visual}
                </div>

                <!-- Right: Scrolling Text -->
                <div class="text-content">
                    <div class="text-inner">
                        <h3>${project.name}</h3>
                        <p class="project-tagline">${project.tagline}</p>
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

// Initialize logo animations
function initLogoAnimations() {
    const floatingLogo = document.querySelector('.floating-logo');
    const projectShowcases = document.querySelectorAll('.project-showcase');

    projectShowcases.forEach((showcase, index) => {
        const visualContainer = showcase.querySelector('.visual-container');

        // Onramp: logo enters the visual, visual fades in
        gsap.timeline({
            scrollTrigger: {
                trigger: showcase,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1,
                onUpdate: (self) => {
                    // Position logo within visual container during scroll
                    const rect = visualContainer.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;

                    floatingLogo.style.left = `${centerX - 50}px`;
                    floatingLogo.style.top = `${centerY - 50}px`;
                }
            }
        })
        .fromTo(floatingLogo,
            { opacity: 0, scale: 0.3, rotation: -180 },
            { opacity: 1, scale: 0.8, rotation: 0 }, 0)
        .fromTo(visualContainer,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1 }, 0);

        // Offramp: logo leaves the visual
        gsap.timeline({
            scrollTrigger: {
                trigger: showcase,
                start: 'bottom 40%',
                end: 'bottom 10%',
                scrub: 1
            }
        })
        .to(floatingLogo, { opacity: 0, scale: 0.3, rotation: 180 })
        .to(visualContainer, { opacity: 0.3, scale: 0.9 }, 0);
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
