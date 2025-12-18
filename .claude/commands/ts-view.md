# View Project: $ARGUMENTS

Display the current project file for founder review.

## Usage

- `view` - Show full project file
- `view architecture` - Show Architecture section only
- `view product` - Show Product section only
- `view advisor` - Show Founder-Advisor analysis

## Process

1. Find the active project file in `.claude/pipeline/projects/`

2. Based on $ARGUMENTS:

### (no argument or "all")
- Display the ENTIRE project file
- Highlight key decisions and pending approvals

### "architecture"
- Display only the "📐 Architecture Department" section

### "product"
- Display only the "📦 Product Department" section

### "advisor"
- Display the "🎩 Founder Input" and "🎩 Founder-Advisor Analysis" sections

### "log"
- Display only the "📋 Audit Log" section

3. After displaying, show:
   - Current status
   - Current owner
   - Next recommended action
