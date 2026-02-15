// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animate hero content on load
gsap.to('.hero-content', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 0.3,
    ease: 'power3.out'
});

// Floating logo animations
const logo = document.getElementById('logo');
const logoContainer = document.querySelector('.floating-logo');

// Hero section - scale down on scroll
ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(logoContainer, {
            scale: gsap.utils.interpolate(1, 0.7, progress),
            opacity: gsap.utils.interpolate(1, 0.3, progress),
            duration: 0.1,
            ease: 'none'
        });
    }
});

// Get all project showcases
const projectShowcases = document.querySelectorAll('.project-showcase');

projectShowcases.forEach((showcase, index) => {
    const icon = showcase.querySelector('.project-icon');
    const projectName = showcase.getAttribute('data-project');

    // Set initial state
    gsap.set(icon, {
        opacity: 0,
        scale: 0.5,
        rotation: -45
    });

    // Create timeline for on-ramp animation
    const onrampTL = gsap.timeline({
        scrollTrigger: {
            trigger: showcase,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
            id: `onramp-${projectName}`
        }
    });

    onrampTL.to(icon, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: 'power2.out'
    });

    // Create timeline for off-ramp animation
    const offrampTL = gsap.timeline({
        scrollTrigger: {
            trigger: showcase,
            start: 'bottom 50%',
            end: 'bottom top',
            scrub: 1,
            id: `offramp-${projectName}`
        }
    });

    offrampTL.to(icon, {
        opacity: 0,
        scale: 0.3,
        rotation: 45,
        ease: 'power2.in'
    });

    // Parallax effect on content
    const content = showcase.querySelector('.project-content-scroll');
    if (content) {
        gsap.to(content, {
            scrollTrigger: {
                trigger: showcase,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
                id: `parallax-${projectName}`
            },
            y: -100,
            ease: 'none'
        });
    }
});

// Smooth scroll to projects on indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        gsap.to(window, {
            scrollTo: '#projects',
            duration: 1.5,
            ease: 'power2.inOut'
        });
    });
}

// Debug: Log ScrollTrigger instances
console.log(`Created ${ScrollTrigger.getAll().length} ScrollTriggers for ${projectShowcases.length} projects`);
