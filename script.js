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

// Animate section title
gsap.to('.section-title', {
    scrollTrigger: {
        trigger: '.section-title',
        start: 'top 80%',
    },
    opacity: 1,
    duration: 1,
    ease: 'power3.out'
});

// Floating logo animations
const logo = document.getElementById('logo');
const logoContainer = document.querySelector('.floating-logo');

// Logo scale down on initial scroll
gsap.to(logoContainer, {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    scale: 0.7,
    top: '20px',
    ease: 'none'
});

// Get all project cards
const projectCards = document.querySelectorAll('.project-card');

// Animate each project card with extended spacing
projectCards.forEach((card, index) => {
    // Card entrance animation
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1,
        },
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });

    // Extended logo animations for each project with more vertical space
    const projectName = card.getAttribute('data-project');

    // More dramatic transformations based on project
    const transforms = {
        forge: { rotation: 360, x: 60, y: 20, scale: 1.3 },
        sunsim: { rotation: -180, x: -50, y: -15, scale: 1.2 },
        face: { rotation: 180, x: 70, y: 25, scale: 1.25 },
        gait: { rotation: -360, x: -60, y: -20, scale: 1.35 },
        options: { rotation: 270, x: 50, y: 30, scale: 1.4 },
        newstrading: { rotation: -270, x: -70, y: -25, scale: 1.2 },
        asteroid: { rotation: 540, x: 65, y: 15, scale: 1.3 },
        clasp: { rotation: -180, x: -55, y: -15, scale: 1.2 },
        moltbook: { rotation: 360, x: 60, y: 20, scale: 1.35 },
        ducke: { rotation: -360, x: -50, y: -25, scale: 1.3 },
        ccdash: { rotation: 270, x: 55, y: 20, scale: 1.25 },
        mana: { rotation: -540, x: -65, y: -30, scale: 1.3 },
        ringmaster: { rotation: 720, x: 70, y: 25, scale: 1.4 }
    };

    const transform = transforms[projectName] || { rotation: 180, x: 50, y: 0, scale: 1.2 };

    // Logo transforms when entering project section (extended range)
    ScrollTrigger.create({
        trigger: card,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: () => {
            gsap.to(logo, {
                rotation: transform.rotation,
                x: transform.x,
                y: transform.y,
                scale: transform.scale,
                duration: 1.2,
                ease: 'power2.out'
            });
        },
        onLeave: () => {
            gsap.to(logo, {
                rotation: 0,
                x: 0,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: 'power2.out'
            });
        },
        onEnterBack: () => {
            gsap.to(logo, {
                rotation: transform.rotation,
                x: transform.x,
                y: transform.y,
                scale: transform.scale,
                duration: 1.2,
                ease: 'power2.out'
            });
        },
        onLeaveBack: () => {
            gsap.to(logo, {
                rotation: 0,
                x: 0,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: 'power2.out'
            });
        }
    });

    // Continuous rotation and movement through the long scroll section
    ScrollTrigger.create({
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
        onUpdate: (self) => {
            // Gentle continuous rotation as you scroll through the project
            const progress = self.progress;
            const continuousRotation = progress * 720; // Two full rotations
            const wave = Math.sin(progress * Math.PI * 4) * 30; // Sine wave movement

            gsap.to(logo, {
                rotation: continuousRotation,
                x: wave,
                duration: 0.3,
                ease: 'none'
            });
        }
    });

    // Pulse effect when in view
    ScrollTrigger.create({
        trigger: card,
        start: 'top 50%',
        end: 'bottom 50%',
        onUpdate: (self) => {
            const progress = self.progress;
            const pulse = 1 + (Math.sin(progress * Math.PI) * 0.15);
            gsap.to(logoContainer, {
                scale: pulse * 0.7,
                duration: 0.4,
                ease: 'power1.out'
            });
        }
    });
});

// Logo color glow effect based on scroll
ScrollTrigger.create({
    trigger: '.projects',
    start: 'top center',
    end: 'bottom center',
    onEnter: () => {
        gsap.to(logo, {
            boxShadow: '0 0 40px rgba(231, 76, 60, 0.5)',
            duration: 1,
            ease: 'power2.out'
        });
    },
    onLeaveBack: () => {
        gsap.to(logo, {
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            duration: 1,
            ease: 'power2.out'
        });
    }
});

// Smooth scroll to projects on scroll indicator click
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

// Subtle mouse parallax on logo (less pronounced, more Apple-like)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.005;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.005;

    gsap.to(logo, {
        x: `+=${mouseX}`,
        y: `+=${mouseY}`,
        duration: 0.6,
        ease: 'power2.out'
    });
});

// Smooth logo bounce on scroll stop
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        gsap.to(logoContainer, {
            y: -8,
            duration: 0.25,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut'
        });
    }, 100);
});
