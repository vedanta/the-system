# New Project: $ARGUMENTS

Initialize a new project and start the intake process with Founder-Advisor.

## Usage

```
/ts-new-project <project-name> [--idea=file-path] [--build=preset] [--preset=arch] [--build-skip-stage=stage] [--option=value]
```

### Examples

```
# Basic project creation (interactive)
/ts-new-project my-app

# With idea from file
/ts-new-project todo-app --idea=./ideas/task-manager.txt
/ts-new-project blog-platform --idea=input/blog-idea.md
/ts-new-project ecommerce --idea=/path/to/ideas/store-concept.json

# With build preset preference
/ts-new-project demo-project --build=prototype

# With architecture and build presets
/ts-new-project todo-app --build=mvp --preset=static

# With technology overrides
/ts-new-project business-app --build=production --db=postgresql --auth=clerk

# File input with additional flags
/ts-new-project invoice-app --idea=ideas/invoicing.md --build=mvp --preset=fullstack-js

# Skip specific stages for custom workflows
/ts-new-project rapid-proto --build-skip-stage=product
/ts-new-project dev-test --build-skip-stage=product --build-skip-stage=release
```

### Supported File Formats

- **Text files** (`.txt`): Entire content used as idea description
- **Markdown files** (`.md`): Content used as idea, supports "# Idea" section
- **JSON files** (`.json`): Must contain `"idea"` field, can include `"flags"` object
- **YAML files** (`.yaml`, `.yml`): Structured format with `idea` and optional `flags`

### Example File Contents

**ideas/task-manager.txt:**
```
A task management app with user authentication, categories, due dates, and real-time collaboration.
```

**ideas/blog.md:**
```markdown
# Blog Platform Idea

A modern blog platform with:
- Markdown-based posts
- User authentication
- Comment system
- RSS feeds
- SEO optimization
```

**ideas/ecommerce.json:**
```json
{
  "idea": "E-commerce platform with inventory management, payment processing, and order tracking",
  "flags": {
    "build": "production",
    "preset": "fullstack-js",
    "db": "postgresql",
    "auth": "clerk"
  }
}
```

## Steps

1. **Parse Arguments and Flags:**

   **If --help flag detected, show help and exit:**
   ```
   ╔══════════════════════════════════════════════════════════════════╗
   ║  📖 /ts-new-project - Start New Project                         ║
   ╠══════════════════════════════════════════════════════════════════╣
   ║                                                                  ║
   ║  📝 SYNTAX                                                       ║
   ║     /ts-new-project <name> [flags]                               ║
   ║                                                                  ║
   ║  🚩 KEY FLAGS                                                    ║
   ║     --idea=file.txt           Read idea from file               ║
   ║     --build=prototype|mvp|production                             ║
   ║     --preset=static|fullstack-js|etc                            ║
   ║                                                                  ║
   ║  ⚡ QUICK EXAMPLES                                               ║
   ║     /ts-new-project my-app                                       ║
   ║     /ts-new-project todo --idea=ideas/todo.txt                   ║
   ║     /ts-new-project blog --build=mvp --preset=static            ║
   ║                                                                  ║
   ║  💡 MORE HELP: /ts-help new-project                              ║
   ║                                                                  ║
   ╚══════════════════════════════════════════════════════════════════╝
   ```

   **Otherwise, continue with normal argument parsing:**

   - Extract project name: first argument
   - Parse idea file flag: `--idea=file-path` (optional)
   - Parse build preset flag: `--build=prototype|mvp|production`
   - Parse architecture preset flag: `--preset=static|embedded|fullstack-js|etc`
   - Parse stage skip flags: `--build-skip-stage=product|development|release|golive`
   - Parse technology flags: `--db=`, `--auth=`, `--runtime=`, `--framework=`

   **If --idea flag provided:**
   - Read idea from file using the Read tool
   - Support file formats:
     - `.txt`: Use entire file content as idea
     - `.md`: Use entire content, or extract "# Idea" section if present
     - `.json`: Extract `idea` field, merge any `flags` with CLI flags
     - `.yaml/.yml`: Extract `idea` field, merge any `flags` with CLI flags
   - If file doesn't exist or can't be read: show error and ask for interactive input

2. Copy `.claude/pipeline/projects/TEMPLATE.md` to `.claude/pipeline/projects/$ARGUMENTS.md`

3. Replace template placeholders:
   - Replace `[PROJECT_NAME]` with "$ARGUMENTS"
   - Replace `[TIMESTAMP]` with current date/time

4. **Store CLI Flags (if provided):**
   - In "Handoff Notes for Architecture" section, add:
     ```
     Override Flags: --build=prototype --preset=static --build-skip-stage=product --db=sqlite
     ```
   - This enables enterprise-architect to use overrides in Step 1

5. Set project metadata:
   - Set Status to `INTAKE`
   - Set Current Owner to `founder-advisor`

6. Confirm: "✅ Project '$ARGUMENTS' initialized."
   - If flags provided: "🎛️ Build preset: [preset], Architecture preset: [preset]"

7. Immediately use the **founder-advisor** subagent with appropriate context:

   **If idea was provided via --idea flag:**
   "New project intake for '$ARGUMENTS'. The founder has provided their idea from file: [IDEA_CONTENT]. Please analyze this idea and proceed with signal analysis."

   **If no idea file provided:**
   "New project intake for '$ARGUMENTS'. Ask the founder about their idea."

The founder-advisor will then either analyze the provided idea or engage with the human to understand their idea, and can use any provided flags as preferences during signal analysis.
