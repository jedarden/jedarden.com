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

    // On-ramp: Icon fades and scales in
    ScrollTrigger.create({
        trigger: showcase,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(icon, {
                opacity: progress,
                scale: gsap.utils.interpolate(0.5, 1, progress),
                rotation: gsap.utils.interpolate(-45, 0, progress),
                duration: 0.1,
                ease: 'power2.out'
            });
        }
    });

    // Middle: Icon stays pinned (handled by CSS sticky)
    // Content scrolls past the pinned icon

    // Off-ramp: Icon fades and scales out
    ScrollTrigger.create({
        trigger: showcase,
        start: 'bottom 50%',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(icon, {
                opacity: gsap.utils.interpolate(1, 0, progress),
                scale: gsap.utils.interpolate(1, 0.3, progress),
                rotation: gsap.utils.interpolate(0, 45, progress),
                duration: 0.1,
                ease: 'power2.in'
            });
        }
    });

    // Parallax effect on content
    const content = showcase.querySelector('.project-content-scroll');
    gsap.to(content, {
        scrollTrigger: {
            trigger: showcase,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -100,
        ease: 'none'
    });
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

// Optional: Subtle parallax on floating logo based on mouse
let targetX = 0;
let targetY = 0;

document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX - window.innerWidth / 2) * 0.002;
    targetY = (e.clientY - window.innerHeight / 2) * 0.002;
});

function updateLogoParallax() {
    gsap.to(logo, {
        x: targetX,
        y: targetY,
        duration: 0.5,
        ease: 'power2.out'
    });
    requestAnimationFrame(updateLogoParallax);
}

updateLogoParallax();
