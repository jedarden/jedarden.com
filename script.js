// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animate hero content on load
gsap.to('.hero-content', {
    opacity: 1,
    y: 0,
    duration: 1,
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

// Logo transforms based on scroll
gsap.to(logoContainer, {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
    },
    scale: 0.6,
    top: '20px',
    ease: 'none'
});

// Get all project cards
const projectCards = document.querySelectorAll('.project-card');

// Animate each project card
projectCards.forEach((card, index) => {
    // Card entrance animation
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
        },
        opacity: 1,
        y: 0,
        ease: 'power2.out'
    });

    // Logo animations for each project
    const projectName = card.getAttribute('data-project');

    // Calculate rotation and position based on index
    const rotation = (index % 2 === 0) ? 15 : -15;
    const xOffset = (index % 2 === 0) ? 50 : -50;

    // Logo transforms when passing each project
    ScrollTrigger.create({
        trigger: card,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
            gsap.to(logo, {
                rotation: rotation,
                x: xOffset,
                scale: 1.1,
                duration: 0.6,
                ease: 'power2.out'
            });
        },
        onLeave: () => {
            gsap.to(logo, {
                rotation: 0,
                x: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out'
            });
        },
        onEnterBack: () => {
            gsap.to(logo, {
                rotation: rotation,
                x: xOffset,
                scale: 1.1,
                duration: 0.6,
                ease: 'power2.out'
            });
        },
        onLeaveBack: () => {
            gsap.to(logo, {
                rotation: 0,
                x: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out'
            });
        }
    });

    // Additional logo effects per project
    ScrollTrigger.create({
        trigger: card,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 1,
        onUpdate: (self) => {
            // Subtle pulse effect based on scroll progress
            const progress = self.progress;
            const pulseScale = 1 + (Math.sin(progress * Math.PI) * 0.1);
            gsap.to(logoContainer, {
                scale: pulseScale * 0.6,
                duration: 0.3,
                ease: 'power1.out'
            });
        }
    });
});

// Logo rotation on overall scroll
gsap.to(logo, {
    scrollTrigger: {
        trigger: '.projects',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 2,
    },
    rotation: 720,
    ease: 'none'
});

// Parallax effect for project cards
projectCards.forEach(card => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
        },
        y: -30,
        ease: 'none'
    });
});

// Logo color shift effect (border glow)
ScrollTrigger.create({
    trigger: '.projects',
    start: 'top center',
    end: 'bottom center',
    onEnter: () => {
        gsap.to(logo, {
            boxShadow: '0 0 30px rgba(102, 126, 234, 0.6)',
            duration: 0.8,
            ease: 'power2.out'
        });
    },
    onLeaveBack: () => {
        gsap.to(logo, {
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            duration: 0.8,
            ease: 'power2.out'
        });
    }
});

// Smooth scroll to projects on scroll indicator click
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    gsap.to(window, {
        scrollTo: '#projects',
        duration: 1.5,
        ease: 'power2.inOut'
    });
});

// Mouse move parallax effect on logo
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.01;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.01;

    gsap.to(logo, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Logo bounce effect on scroll stop
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        gsap.to(logoContainer, {
            y: -10,
            duration: 0.3,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut'
        });
    }, 150);
});
