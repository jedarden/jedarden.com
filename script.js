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

// Logo container and image
const logo = document.getElementById('logo');
const logoContainer = document.querySelector('.floating-logo');

// Define unique positions for each project (viewport-relative)
// Format: { top: '20vh', left: '10vw', rotation: 0, scale: 1.2 }
const projectPositions = {
    hero: { top: '40px', left: '50%', x: '-50%', rotation: 0, scale: 1 },
    forge: { top: '15vh', left: '85vw', x: '-50%', rotation: 0, scale: 1.3 },
    sunsim: { top: '50vh', left: '10vw', x: '-50%', rotation: 0, scale: 1.2 },
    face: { top: '20vh', left: '50%', x: '-50%', rotation: 0, scale: 1.4 },
    gait: { top: '70vh', left: '80vw', x: '-50%', rotation: 0, scale: 1.15 },
    options: { top: '30vh', left: '15vw', x: '-50%', rotation: 0, scale: 1.35 },
    newstrading: { top: '60vh', left: '50%', x: '-50%', rotation: 0, scale: 1.25 },
    asteroid: { top: '25vh', left: '75vw', x: '-50%', rotation: 0, scale: 1.3 },
    clasp: { top: '55vh', left: '20vw', x: '-50%', rotation: 0, scale: 1.2 },
    moltbook: { top: '35vh', left: '85vw', x: '-50%', rotation: 0, scale: 1.4 },
    ducke: { top: '65vh', left: '15vw', x: '-50%', rotation: 0, scale: 1.35 },
    ccdash: { top: '40vh', left: '75vw', x: '-50%', rotation: 0, scale: 1.25 },
    mana: { top: '50vh', left: '50%', x: '-50%', rotation: 0, scale: 1.3 },
    ringmaster: { top: '30vh', left: '25vw', x: '-50%', rotation: 0, scale: 1.2 }
};

// Initial position
gsap.set(logoContainer, projectPositions.hero);

// Hero section - scale down and prepare for first project
ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress;
        // Transition from hero to first project position
        gsap.to(logoContainer, {
            scale: gsap.utils.interpolate(1, 0.8, progress),
            duration: 0.1,
            ease: 'none'
        });
    }
});

// Get all project cards
const projectCards = document.querySelectorAll('.project-card');

// Animate each project card
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

    const projectName = card.getAttribute('data-project');
    const position = projectPositions[projectName];

    if (!position) return;

    // Animate logo to project-specific position
    ScrollTrigger.create({
        trigger: card,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: () => {
            gsap.to(logoContainer, {
                top: position.top,
                left: position.left,
                x: position.x,
                rotation: position.rotation,
                scale: position.scale,
                duration: 1.5,
                ease: 'power2.inOut'
            });
        },
        onLeaveBack: () => {
            // Return to previous position
            const prevIndex = index - 1;
            if (prevIndex >= 0) {
                const prevCard = projectCards[prevIndex];
                const prevName = prevCard.getAttribute('data-project');
                const prevPosition = projectPositions[prevName];
                if (prevPosition) {
                    gsap.to(logoContainer, {
                        top: prevPosition.top,
                        left: prevPosition.left,
                        x: prevPosition.x,
                        rotation: prevPosition.rotation,
                        scale: prevPosition.scale,
                        duration: 1.5,
                        ease: 'power2.inOut'
                    });
                }
            } else {
                // Return to hero position
                gsap.to(logoContainer, {
                    top: '40px',
                    left: '50%',
                    x: '-50%',
                    rotation: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.inOut'
                });
            }
        }
    });

    // Smooth transition between projects
    const nextCard = projectCards[index + 1];
    if (nextCard) {
        const nextName = nextCard.getAttribute('data-project');
        const nextPosition = projectPositions[nextName];

        if (nextPosition) {
            ScrollTrigger.create({
                trigger: card,
                start: 'bottom 50%',
                end: 'bottom top',
                scrub: 2,
                onUpdate: (self) => {
                    // Interpolate between current and next position
                    const progress = self.progress;

                    // Parse position values for interpolation
                    const currentTop = parseFloat(position.top);
                    const nextTop = parseFloat(nextPosition.top);
                    const currentLeft = parseFloat(position.left);
                    const nextLeft = parseFloat(nextPosition.left);

                    const interpolatedTop = gsap.utils.interpolate(currentTop, nextTop, progress);
                    const interpolatedLeft = gsap.utils.interpolate(currentLeft, nextLeft, progress);
                    const interpolatedRotation = gsap.utils.interpolate(position.rotation, nextPosition.rotation, progress);
                    const interpolatedScale = gsap.utils.interpolate(position.scale, nextPosition.scale, progress);

                    gsap.to(logoContainer, {
                        top: `${interpolatedTop}${position.top.includes('vh') ? 'vh' : 'px'}`,
                        left: `${interpolatedLeft}${position.left.includes('vw') ? 'vw' : '%'}`,
                        rotation: interpolatedRotation,
                        scale: interpolatedScale,
                        duration: 0.2,
                        ease: 'none'
                    });
                }
            });
        }
    }
});

// Logo glow effect in projects section
ScrollTrigger.create({
    trigger: '.projects',
    start: 'top center',
    end: 'bottom center',
    onEnter: () => {
        gsap.to(logo, {
            boxShadow: '0 0 40px rgba(139, 26, 26, 0.4)',
            duration: 1,
            ease: 'power2.out'
        });
    },
    onLeaveBack: () => {
        gsap.to(logo, {
            boxShadow: '0 4px 20px rgba(139, 26, 26, 0.15)',
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

// Subtle mouse parallax effect (minimal, Apple-like)
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX - window.innerWidth / 2) * 0.003;
    targetY = (e.clientY - window.innerHeight / 2) * 0.003;
});

// Smooth parallax animation loop
function updateParallax() {
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;

    gsap.to(logo, {
        x: `+=${currentX}`,
        y: `+=${currentY}`,
        duration: 0.3,
        ease: 'power2.out'
    });

    requestAnimationFrame(updateParallax);
}

updateParallax();
