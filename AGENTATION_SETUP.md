# Agentation Integration Setup

Your portfolio website now uses the **actual Agentation React component** for visual feedback!

## What Changed

The site has been migrated from vanilla HTML/CSS/JS to **React 19 + Vite** to support the official Agentation component. The design, animations, and all visual elements remain identical - only the underlying tech stack changed.

## How It Works

1. **Visitor Experience:**
   - Sees Agentation toolbar in bottom-right corner
   - Clicks to activate annotation mode
   - Clicks, drags, or selects text to annotate
   - Adds feedback comments
   - Feedback syncs to Agentation MCP server

2. **Your Experience (Claude Code):**
   - Configure agentation-mcp server
   - Annotations appear in real-time via MCP tools
   - Process feedback and make changes
   - Resolve annotations with summaries
   - Supports watch mode for autonomous processing

## Setup Instructions

### 1. Configure MCP Server in Claude Code

**Quick setup:**
```bash
claude mcp add agentation -- npx agentation-mcp server
```

**Or manual setup - add to `~/.claude/settings.json`:**
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

### 2. Restart Claude Code

The Agentation MCP server will start automatically on http://localhost:4747

### 3. Test the Integration

1. Visit your portfolio: https://jedarden.github.io/jedarden.com/
2. Click the Agentation toolbar (bottom-right corner)
3. Click any element and add a test annotation
4. In Claude Code, run:
   ```
   Use agentation_get_all_pending to see my feedback
   ```

## Available MCP Tools

Once configured, you can use these tools in Claude Code:

- `agentation_list_sessions` - List all feedback sessions
- `agentation_get_session` - Get a specific session with all annotations
- `agentation_get_pending` - Get pending feedback for a session
- `agentation_get_all_pending` - Get all pending feedback across sessions
- `agentation_acknowledge` - Acknowledge that you've seen feedback
- `agentation_resolve` - Mark feedback as resolved with a summary
- `agentation_dismiss` - Dismiss feedback with a reason
- `agentation_reply` - Add a reply to a feedback thread
- `agentation_watch_annotations` - Watch for new feedback (blocking)

## Watch Mode (Autonomous Processing)

Enable hands-free feedback processing by adding to your `CLAUDE.md`:

```markdown
When I say "watch mode" or "monitor feedback":
1. Call agentation_watch_annotations with timeout 300000 (5 minutes)
2. When annotations arrive, acknowledge each one
3. Read the feedback and make appropriate code changes
4. Resolve each annotation with a summary of what was fixed
5. Loop back to step 1 until I say "stop"
```

Then simply say "watch mode" and Claude will automatically:
- Wait for visitor feedback
- Process each piece of feedback
- Make the necessary changes
- Report back what was fixed
- Continue monitoring

## Development

To work on the portfolio locally:

```bash
cd ~/jedarden.com/portfolio-react
npm install
npm run dev
```

Visit http://localhost:5173 - the Agentation widget will be active.

## Deployment

### Option 1: Automated Deploy Script

```bash
cd ~/jedarden.com/portfolio-react
npm run deploy
```

This builds the site and pushes to gh-pages branch automatically.

### Option 2: Manual Deploy

```bash
cd ~/jedarden.com/portfolio-react
npm run build

# Copy build to root
cp -r dist/* ../

# Commit and push
cd ..
git add -A
git commit -m "Update portfolio"
git push origin main
```

## Agentation Widget Features

The official Agentation component captures:
- Element selectors (CSS paths, IDs, classes)
- Element position and bounding box
- Text selections
- Multi-element selections (drag to select)
- Area annotations (annotate empty space)
- Animation states (can pause all animations)
- Nearby text content
- Timestamps

All feedback is:
- Synced to MCP server in real-time
- Available in Claude Code immediately via tools
- Persistent across sessions
- Structured for AI agent consumption

## Architecture

```
Portfolio Website (GitHub Pages)
    ↓ (HTTP POST)
Agentation MCP Server (localhost:4747)
    ↓ (stdio)
Claude Code Session
    ↓ (You make fixes)
Git Commit & Push
    ↓
Portfolio Updated!
```

## Troubleshooting

**"Agentation toolbar not showing"**
- Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- Check browser console for errors
- Verify React app is running (dev mode) or built correctly (production)

**"Annotations not appearing in Claude Code"**
- Make sure MCP server is configured and Claude Code is restarted
- Use `agentation_list_sessions` to see all sessions
- Check that server is running: `lsof -i:4747`

**"Development server won't start"**
- `cd ~/jedarden.com/portfolio-react && npm install`
- Check port 5173 isn't in use: `lsof -i:5173`

## Learn More

- **Agentation Docs**: https://agentation.dev
- **Agentation GitHub**: https://github.com/benjitaylor/agentation
- **Agentation MCP**: https://github.com/benjitaylor/agentation/tree/main/mcp

Enjoy your visual feedback loop! 🚀
