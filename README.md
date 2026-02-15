# Jed Arden - Portfolio Website

Personal portfolio website built with React, GSAP, and Agentation for visual feedback.

## ✨ Features

- **React 19 + Vite** - Modern, fast development experience
- **GSAP ScrollTrigger** - Smooth scroll-based animations with Apple-inspired on-ramp/pin/off-ramp pattern
- **Agentation Widget** - Visual feedback tool for AI coding agents
- **Responsive Design** - Works on desktop and mobile
- **Dark Winter Theme** - Warm reds complementing the logo

## 🚀 Development

```bash
cd portfolio-react
npm install
npm run dev
```

Visit http://localhost:5173

## 🏗️ Build

```bash
cd portfolio-react
npm run build
```

Output goes to `portfolio-react/dist/`

## 📦 Deploy to GitHub Pages

The site is automatically built and deployed from the `dist` folder:

```bash
cd portfolio-react
npm run deploy
```

Or manually:
```bash
npm run build
cd dist
git init
git add -A
git commit -m 'Deploy'
git push -f git@github.com:jedarden/jedarden.com.git main:gh-pages
```

## 🎨 Agentation Integration

The portfolio uses [Agentation](https://agentation.dev) for visual feedback:

1. **In the browser**: Click the Agentation toolbar to annotate elements
2. **In Claude Code**: Annotations appear via MCP tools
3. **Configure MCP**: Add agentation-mcp to Claude Code settings

### MCP Setup

```bash
claude mcp add agentation -- npx agentation-mcp server
```

Or add to `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "agentation": {
      "command": "npx",
      "args": ["agentation-mcp", "server"]
    }
  }
}
```

## 📁 Project Structure

```
jedarden.com/
├── portfolio-react/          # React source code
│   ├── src/
│   │   ├── App.jsx          # Main component with Agentation
│   │   ├── App.css          # Styles
│   │   └── assets/          # Images and static files
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── assets/                   # Built assets (from dist)
├── index.html               # Built HTML (from dist)
└── README.md
```

## 🌐 Live Site

https://jedarden.github.io/jedarden.com/

## 📄 License

© 2026 Jed Arden
