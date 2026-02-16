import { useEffect, useRef } from 'react';
import { Agentation } from 'agentation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import logo from './assets/logo.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'forge',
    name: 'FORGE',
    tagline: 'Federated Orchestration & Resource Generation Engine',
    description: [
      'FORGE represents a paradigm shift in AI-powered development workflows. As an intelligent control panel for autonomous coding agents, it provides a unified interface for managing complex multi-agent orchestration, resource allocation, and federated task distribution.',
      'At its core, FORGE solves the challenge of coordinating multiple AI agents working on different aspects of a software project simultaneously. It handles context management, prevents conflicting changes, and ensures that agents have access to the right resources at the right time.',
      'The platform includes real-time monitoring dashboards, automatic conflict resolution, intelligent task prioritization, and seamless integration with existing development tools. FORGE enables development teams to scale their autonomous coding operations from single-agent tasks to complex, multi-agent projects involving dozens of specialized AI workers.'
    ],
    tech: ['Python', 'AI Orchestration', 'Distributed Systems', 'Task Management'],
    github: 'https://github.com/jedarden/forge',
    icon: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="60" width="120" height="100" rx="8" fill="#8B1A1A" opacity="0.9"/>
        <rect x="60" y="80" width="30" height="30" rx="4" fill="white"/>
        <rect x="110" y="80" width="30" height="30" rx="4" fill="white"/>
        <rect x="60" y="120" width="80" height="8" rx="4" fill="white"/>
        <rect x="60" y="135" width="60" height="8" rx="4" fill="white"/>
        <circle cx="150" cy="50" r="15" fill="#B8534E"/>
        <path d="M145 45 L155 50 L145 55" stroke="white" strokeWidth="3" fill="none"/>
      </svg>
    ),
    visual: (
      <div className="project-visual visual-forge">
        <div className="agent-node">Agent 1<br/>Coding</div>
        <div className="agent-node">Agent 2<br/>Testing</div>
        <div className="agent-node">Agent 3<br/>Review</div>
        <div className="control-center">FORGE</div>
      </div>
    )
  },
  {
    id: 'sunsim',
    name: 'Sun Simulator',
    tagline: 'Advanced solar position and radiation modeling',
    description: [
      'An advanced astronomical simulation platform that accurately models solar position, intensity, and radiation patterns across any location on Earth throughout the year. The simulator combines precise orbital mechanics with atmospheric modeling to provide real-time visualization of solar phenomena.',
      'The system calculates solar altitude, azimuth, and intensity using established astronomical algorithms, accounting for atmospheric refraction, seasonal variations, and geographical factors. It provides interactive visualizations that help users understand solar energy potential, optimal panel positioning, and seasonal lighting patterns.',
      'Applications range from architectural planning and solar panel installation to agricultural timing and photography planning. The simulator has been used by architects to optimize building orientation, solar engineers to maximize panel efficiency, and researchers studying climate patterns.'
    ],
    tech: ['Python', 'Astronomy', 'Data Visualization', 'Simulation'],
    demo: 'https://sunsim.jedarden.com',
    icon: (
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="30" fill="#B8534E"/>
        <line x1="100" y1="40" x2="100" y2="60" stroke="#A52A2A" strokeWidth="4" strokeLinecap="round"/>
        <line x1="145" y1="55" x2="130" y2="70" stroke="#A52A2A" strokeWidth="4" strokeLinecap="round"/>
        <line x1="160" y1="100" x2="140" y2="100" stroke="#A52A2A" strokeWidth="4" strokeLinecap="round"/>
        <line x1="145" y1="145" x2="130" y2="130" stroke="#A52A2A" strokeWidth="4" strokeLinecap="round"/>
        <line x1="100" y1="160" x2="100" y2="140" stroke="#A52A2A" strokeWidth="4" strokeLinecap="round"/>
        <line x1="55" y1="145" x2="70" y2="130" stroke="#A52A2A" strokeWidth="4" strokeLinecap="round"/>
        <line x1="40" y1="100" x2="60" y2="100" stroke="#A52A2A" strokeWidth="4" strokeLinecap="round"/>
        <line x1="55" y1="55" x2="70" y2="70" stroke="#A52A2A" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
    visual: (
      <div className="project-visual visual-sunsim">
        <div className="sun"></div>
        <div className="earth"></div>
        <div className="orbit-line"></div>
      </div>
    )
  }
];

function App() {
  const logoRef = useRef(null);

  useEffect(() => {
    const projectShowcases = document.querySelectorAll('.project-showcase');
    const floatingLogo = logoRef.current;

    projectShowcases.forEach((showcase, index) => {
      const visualContainer = showcase.querySelector('.visual-container');
      const textContent = showcase.querySelector('.text-content');
      const projectVisual = showcase.querySelector('.project-visual');

      // Onramp: logo enters the visual
      const onrampTL = gsap.timeline({
        scrollTrigger: {
          trigger: showcase,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          onEnter: () => {
            // Move logo into the visual container
            const visualRect = visualContainer.getBoundingClientRect();
            gsap.to(floatingLogo, {
              position: 'fixed',
              top: visualRect.top + visualRect.height / 2 - 50,
              left: visualRect.left + visualRect.width / 2 - 50,
              scale: 0.8,
              duration: 0
            });
          }
        }
      });

      onrampTL
        .fromTo(floatingLogo,
          { opacity: 0, scale: 0.3, rotation: -180 },
          { opacity: 1, scale: 0.8, rotation: 0 }, 0)
        .fromTo(visualContainer,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1 }, 0);

      // Offramp: logo leaves the visual
      const offrampTL = gsap.timeline({
        scrollTrigger: {
          trigger: showcase,
          start: 'bottom 40%',
          end: 'bottom 10%',
          scrub: 1
        }
      });

      offrampTL
        .to(floatingLogo, { opacity: 0, scale: 0.3, rotation: 180 })
        .to(visualContainer, { opacity: 0.3, scale: 0.9 }, 0);
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="floating-logo" ref={logoRef}>
        <img src={logo} alt="Jed Arden" id="logo" />
      </div>

      <section className="hero" id="hero">
        <div className="hero-content">
          <h1 className="hero-title">Jed Arden</h1>
          <p className="hero-subtitle">Developer • Engineer • Builder</p>
          <p className="hero-description">Building intelligent systems for AI-powered development</p>
          <div className="hero-links">
            <a href="https://github.com/jedarden" target="_blank" rel="noopener noreferrer" className="btn-primary">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jed-arden/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h2 className="section-title">Featured Projects</h2>

        {projects.map((project) => (
          <div key={project.id} className="project-showcase" data-project={project.id}>
            <div className="desktop-layout">
              {/* Left side: Fixed visual + logo */}
              <div className="visual-container">
                <div className="project-icon-wrapper">
                  {project.icon}
                </div>
                {project.visual}
              </div>

              {/* Right side: Scrolling text */}
              <div className="text-content">
                <div className="text-inner">
                  <h3>{project.name}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <div className="project-description">
                    {project.description.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                  <div className="tech-stack">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-project">
                        View on GitHub →
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-project">
                        View Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>&copy; 2026 Jed Arden • v1.0.0</p>
      </footer>

      <Agentation />
    </>
  );
}

export default App;
