# Agentation Integration Setup

Your portfolio website now has integrated feedback collection that sends annotations directly to your Claude Code sessions!

## How It Works

1. **Visitor Experience:**
   - Sees a floating feedback button (💬) in bottom-right corner
   - Clicks button to enter annotation mode
   - Clicks any element on the page to add feedback
   - Enters their comment/feedback
   - Visual markers show where feedback was left
   - Feedback automatically syncs to your Claude Code session

2. **Your Experience:**
   - Annotations appear in real-time in Claude Code
   - Can view all pending feedback with MCP tools
   - Can process feedback, make changes, and mark as resolved
   - Supports "watch mode" for autonomous feedback processing

## Setup Instructions

### 1. Configure MCP Server in Claude Code

Add to your `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "agentation": {
      "command": "npx",
      "args": ["agentation-mcp", "server"],
      "env": {
        "AGENTATION_STORE_PATH": "/home/coder/.agentation/portfolio-feedback.db"
      }
    }
  }
}
```

Or use the Claude Code MCP command:
```bash
claude mcp add agentation -- npx agentation-mcp server
```

### 2. Restart Claude Code

The Agentation MCP server will start automatically and listen on http://localhost:4747

### 3. Test the Integration

1. Open your portfolio: https://jedarden.github.io/jedarden.com/
2. Click the feedback button (💬)
3. Click any element and add a test comment
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

## Feedback Widget Features

The feedback widget captures:
- Element selector (CSS path)
- Element type (button, div, etc.)
- CSS classes
- Position on page
- Nearby text content
- User's comment
- Timestamp

All feedback is:
- Stored locally (localStorage) as backup
- Synced to MCP server in real-time
- Available in Claude Code immediately
- Persistent across page reloads

## Testing Locally

To test with a local server before deploying:

```bash
# Start local web server
cd ~/jedarden.com
python3 -m http.server 9000

# Open in browser
open http://localhost:9000

# Submit feedback and check Claude Code
# Use: agentation_get_all_pending
```

## Production Deployment

The widget is already included in your GitHub Pages deployment. When visitors submit feedback:

1. If you have Claude Code running → Feedback appears immediately
2. If you don't → Feedback is stored on the server
3. Next time you start Claude Code → All accumulated feedback is available

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

## Security Notes

- The MCP server runs locally (localhost only)
- Feedback is stored in SQLite database
- No authentication required (it's your local machine)
- Widget works offline (stores in localStorage)

## Customization

Edit `feedback-widget.js` to customize:
- Button position and style
- Annotation behavior
- Visual markers
- Summary format

## Troubleshooting

**"Agentation server not available"**
- Make sure Claude Code is running
- Check that MCP server started: `lsof -i:4747`
- Restart Claude Code to reload MCP config

**Feedback not appearing in Claude Code**
- Verify session ID matches: check localStorage in browser console
- Use `agentation_list_sessions` to see all sessions
- Check server logs: `~/.agentation/portfolio-feedback.db`

**Widget not showing**
- Check browser console for errors
- Ensure `feedback-widget.js` is loading
- Try hard refresh (Cmd+Shift+R)

## Next Steps

1. ✅ Widget is live on your portfolio
2. ✅ MCP server configuration ready
3. ⏳ Restart Claude Code to enable MCP server
4. ⏳ Test by submitting feedback
5. ⏳ Process your first feedback item!

Enjoy your new direct feedback loop! 🚀
