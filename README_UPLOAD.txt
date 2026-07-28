BBY Technologies — Social Post White Blob Fix

Replace these files in the root of your GitHub repository:
1. ai-agents.html
2. styles.css

Also keep media_agent_png.png in the same root folder.

The white blob was caused by the CSS pseudo-elements:
.social-image::before
.social-image::after

Those generated shapes have been removed. No other page sections were changed.

After committing, wait about one minute and refresh with Ctrl + F5.
