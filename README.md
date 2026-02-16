# Jed Arden - Portfolio Website

Personal portfolio website featuring scroll-based animations and project showcases.

## ✨ Features

- **GSAP ScrollTrigger Animations** - Smooth, Apple-inspired scroll animations
- **Logo Integration** - Logo animates into project visuals during scroll
- **Two-Column Desktop Layout** - Fixed visual on left, scrolling text on right
- **12 Featured Projects** - Showcasing AI development tools and systems
- **Responsive Design** - Works beautifully on mobile and desktop
- **Dark Winter Theme** - Warm reds complementing the logo
- **Zero Build Step** - Pure HTML/CSS/JS

## 🚀 Quick Start

Just open `index.html` in a browser or deploy to any static hosting:

```bash
# Local development
python3 -m http.server 8000
# Visit http://localhost:8000
```

## 📁 Structure

```
jedarden.com/
├── index.html           # Main HTML
├── style.css            # Core styles + desktop layout
├── project-visuals.css  # Project-specific animations
├── script.js            # GSAP animations + rendering
├── projects-data.js     # All 12 projects data
├── logo.jpg             # Logo image
└── README.md
```

## 🎨 How It Works

### Dynamic Project Loading
Projects are loaded from `projects-data.js` and rendered dynamically:

```javascript
const projects = [
  {
    id: 'forge',
    name: 'FORGE',
    tagline: 'Federated Orchestration...',
    description: ['para1', 'para2', 'para3'],
    tech: ['Python', 'AI Orchestration'],
    github: 'https://github.com/jedarden/forge',
    icon: '<svg>...</svg>',
    visual: '<div class="project-visual">...</div>'
  },
  // ... 11 more projects
];
```

### Logo Animation System
- **Onramp**: Logo rotates in (-180° → 0°), scales up, fades in
- **Pinned**: Logo stays within visual container while text scrolls
- **Offramp**: Logo rotates out (0° → 180°), scales down, fades out

### Desktop Layout
- **Left (50%)**: Fixed visual + logo (sticky position)
- **Right (50%)**: Scrolling text content (~200vh per project)
- **Mobile**: Stacks vertically for smaller screens

## 🌐 Projects Featured

1. **FORGE** - Federated Orchestration & Resource Generation Engine
2. **Sun Simulator** - Interactive Sun Position Visualization
3. **Face Detection** - Real-Time Face Recognition System
4. **Gait Analysis** - Real-Time Human Pose & Motion Tracking
5. **Options Trading** - Real-Time Options Analytics Platform
6. **News Trading** - AI-Powered News Sentiment Trading
7. **Asteroid** - Classic Asteroid Game with Modern Physics
8. **CLASP** - Claude LLM API Switching Proxy
9. **CCDash** - Claude Code Dashboard
10. **DUCK-E** - Real-Time Voice AI System
11. **MANA** - Memory-Augmented Neural Assistant
12. **Ringmaster** - SDLC Orchestration Platform

## 🛠️ Technologies

- **HTML5** - Semantic structure
- **CSS3** - Custom properties, flexbox, animations
- **JavaScript (ES6+)** - Dynamic rendering
- **GSAP 3.12+** - Animation library
- **ScrollTrigger** - Scroll-based animations

## 📦 Deployment

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Source: main branch
3. Site live at `https://jedarden.github.io/jedarden.com/`

### Other Static Hosts
- **Cloudflare Pages**: Connect repo and deploy
- **Netlify**: Drag and drop or connect repo
- **Vercel**: Import from GitHub

## 🎯 Performance

- No build step required
- ~200KB total size (excluding GSAP CDN)
- GPU-accelerated animations
- Lazy-loadable project data

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2026 Jed Arden - All rights reserved

## 🌐 Live Site

https://jedarden.github.io/jedarden.com/
