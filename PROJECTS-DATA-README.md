# Projects Data Extraction Summary

Successfully extracted all 12 projects from `/home/coder/jedarden.com/old-html-site/index.html`

## Output File
**Location:** `/home/coder/jedarden.com/projects-data.js`

## Data Structure

Each project object contains:
```javascript
{
  id: 'project-id',           // Unique identifier (data-project value)
  name: 'Project Name',        // Display name (h3 content)
  tagline: 'Tagline text',     // Short description (project-tagline)
  description: [               // Array of paragraph texts
    'First paragraph...',
    'Second paragraph...',
    'Third paragraph...'
  ],
  tech: ['Tech1', 'Tech2'],   // Array of technology tags
  github: 'url' | null,       // GitHub repository URL
  demo: 'url' | null,         // Live demo URL
  icon: '<svg>...</svg>',     // SVG icon markup
  visual: '<div>...</div>'    // Project visual HTML
}
```

## Extracted Projects

1. **FORGE** (forge)
   - Federated Orchestration & Resource Generation Engine
   - Tech: Python, AI Orchestration, Distributed Systems, Task Management
   - Links: GitHub ✓

2. **Sun Simulator** (sunsim)
   - Interactive Sun Position Visualization
   - Tech: JavaScript, Canvas, Astronomy, Geolocation
   - Links: GitHub ✓, Demo ✓

3. **Face Detection** (face)
   - Real-Time Face Recognition System
   - Tech: TensorFlow.js, face-api.js, WebGL, Docker
   - Links: GitHub ✓, Demo ✓

4. **Gait Analysis** (gait)
   - Real-Time Human Pose & Motion Tracking
   - Tech: TensorFlow.js, PoseNet, Computer Vision, WebGL
   - Links: GitHub ✓, Demo ✓

5. **Options Trading** (options)
   - Real-Time Options Analytics Platform
   - Tech: Python, React, WebSockets, Financial Models
   - Links: GitHub ✓, Demo ✓

6. **News Trading** (newstrading)
   - AI-Powered News Sentiment Trading
   - Tech: Python, NLP, Sentiment Analysis, Trading APIs
   - Links: Demo ✓

7. **Asteroid** (asteroid)
   - Classic Asteroid Game with Modern Physics
   - Tech: JavaScript, Canvas, Physics Engine, Game Development
   - Links: Demo ✓

8. **CLASP** (clasp)
   - Claude LLM API Switching Proxy
   - Tech: Python, LLM Proxy, Multi-Provider, API Gateway
   - Links: GitHub ✓

9. **CCDash** (ccdash)
   - Claude Code Dashboard
   - Tech: Python, TUI, Monitoring, Rich Library
   - Links: GitHub ✓

10. **DUCK-E 🦆** (ducke)
    - Real-Time Voice AI System
    - Tech: OpenAI Realtime, FastAPI, AutoGen, Voice AI, Real-time Processing
    - Links: GitHub ✓

11. **MANA** (mana)
    - Memory-Augmented Neural Assistant
    - Tech: Python, RAG, Vector DB, Context Management
    - Links: GitHub ✓

12. **Ringmaster** (ringmaster)
    - SDLC Orchestration Platform
    - Tech: Python, DevOps, Orchestration, CI/CD
    - Links: GitHub ✓

## Validation Results

✅ All 12 projects extracted successfully
✅ All projects have names and taglines
✅ All projects have 3 description paragraphs
✅ All projects have 4-5 tech tags
✅ All projects have SVG icons
✅ All projects have visual HTML
✅ 11/12 projects have GitHub links
✅ 7/12 projects have demo links

## Usage Example

```javascript
// Import the data
const projects = require('./projects-data.js');

// Generate HTML dynamically
projects.forEach(project => {
  const html = `
    <div class="project-showcase" data-project="${project.id}">
      <div class="sticky-icon-container">
        ${project.icon}
      </div>
      <div class="project-content-scroll">
        <h3>${project.name}</h3>
        <p class="project-tagline">${project.tagline}</p>
        ${project.visual}
        <div class="project-description">
          ${project.description.map(p => `<p>${p}</p>`).join('\n')}
        </div>
        <div class="tech-stack">
          ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('\n')}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}">GitHub →</a>` : ''}
          ${project.demo ? `<a href="${project.demo}">View Live →</a>` : ''}
        </div>
      </div>
    </div>
  `;
});
```

## File Statistics

- **Total lines:** 248
- **File size:** ~35KB
- **Format:** JavaScript module (CommonJS)
- **Encoding:** UTF-8
