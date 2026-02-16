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

// Initialize logo animations
function initLogoAnimations() {
    const floatingLogo = document.querySelector('.floating-logo');
    const hero = document.querySelector('.hero');
    const projectsSection = document.querySelector('.projects');
    const projectShowcases = document.querySelectorAll('.project-showcase');

    // Explicitly set initial hero state
    gsap.set(floatingLogo, {
        opacity: 1,
        rotation: 0,
        scale: 1,
        clearProps: 'all'  // Clear any previous GSAP properties
    });

    // Hero scroll trigger - keep logo in hero state
    ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: 'bottom 20%',
        onEnter: () => {
            gsap.to(floatingLogo, {
                opacity: 1,
                rotation: 0,
                scale: 1,
                top: '20vh',
                left: '50%',
                xPercent: 0,
                yPercent: 0,
                clearProps: 'transform',
                duration: 0.3,
                onComplete: () => {
                    floatingLogo.style.transform = 'translateX(-50%)';
                }
            });
        },
        onEnterBack: () => {
            gsap.to(floatingLogo, {
                opacity: 1,
                rotation: 0,
                scale: 1,
                top: '20vh',
                left: '50%',
                xPercent: 0,
                yPercent: 0,
                clearProps: 'transform',
                duration: 0.3,
                onComplete: () => {
                    floatingLogo.style.transform = 'translateX(-50%)';
                }
            });
        }
    });

    // Logo transitions from hero to projects
    gsap.timeline({
        scrollTrigger: {
            trigger: projectsSection,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1
        }
    })
    .to(floatingLogo, {
        scale: 0.6
    });

    projectShowcases.forEach((showcase, index) => {
        const visualContainer = showcase.querySelector('.visual-container');
        const projectVisual = showcase.querySelector('.project-visual');
        const projectId = showcase.getAttribute('data-project');

        // Create logo clone for this visual
        const logoClone = document.createElement('div');
        logoClone.className = 'logo-in-visual';
        logoClone.style.backgroundImage = 'url(logo.jpg)';
        logoClone.style.opacity = '0';
        projectVisual.appendChild(logoClone);

        // Onramp: logo enters visual, visual fades in, logo clone appears
        const onrampTL = gsap.timeline({
            scrollTrigger: {
                trigger: showcase,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1
            }
        });

        onrampTL
            .fromTo(floatingLogo,
                { opacity: 0.3, scale: 0.3, rotation: -180 },
                { opacity: 0, scale: 0.1, rotation: 0, immediateRender: false }, 0)  // Fade out main logo
            .fromTo(visualContainer,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, immediateRender: false }, 0)
            .fromTo(logoClone,
                { opacity: 0, scale: 0.5 },
                { opacity: 1, scale: 1, immediateRender: false }, 0.3);  // Fade in logo clone

        // Middle: keep floating logo hidden while inside project
        ScrollTrigger.create({
            trigger: showcase,
            start: 'top 20%',
            end: 'bottom 40%',
            onEnter: () => gsap.set(floatingLogo, { opacity: 0, scale: 0.1 }),
            onEnterBack: () => gsap.set(floatingLogo, { opacity: 0, scale: 0.1 }),
            onLeave: () => {}, // Offramp will handle this
            onLeaveBack: () => {} // Onramp will handle this
        });

        // Offramp: logo clone leaves, visual fades, main logo returns
        gsap.timeline({
            scrollTrigger: {
                trigger: showcase,
                start: 'bottom 40%',
                end: 'bottom 10%',
                scrub: 1
            }
        })
        .to(logoClone, { opacity: 0, scale: 0.5, immediateRender: false }, 0)
        .to(visualContainer, { opacity: 0.3, scale: 0.9, immediateRender: false }, 0)
        .to(floatingLogo, { opacity: 0.3, scale: 0.3, rotation: 180, immediateRender: false }, 0.3);
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
