# New Project: $ARGUMENTS

Initialize a new project and start the intake process with Founder-Advisor.

## Usage

```
/ts-new-project <project-name> [--build=preset] [--preset=arch] [--option=value]
```

### Examples

```
# Basic project creation
/ts-new-project my-app

# With build preset preference
/ts-new-project demo-project --build=prototype

# With architecture and build presets
/ts-new-project todo-app --build=mvp --preset=static

# With technology overrides
/ts-new-project business-app --build=production --db=postgresql --auth=clerk
```

## Steps

1. **Parse Arguments and Flags:**
   - Extract project name: first argument
   - Parse build preset flag: `--build=prototype|mvp|production`
   - Parse architecture preset flag: `--preset=static|embedded|fullstack-js|etc`
   - Parse technology flags: `--db=`, `--auth=`, `--runtime=`, `--framework=`

2. Copy `.claude/pipeline/projects/TEMPLATE.md` to `.claude/pipeline/projects/$ARGUMENTS.md`

3. Replace template placeholders:
   - Replace `[PROJECT_NAME]` with "$ARGUMENTS"
   - Replace `[TIMESTAMP]` with current date/time

4. **Store CLI Flags (if provided):**
   - In "Handoff Notes for Architecture" section, add:
     ```
     Override Flags: --build=prototype --preset=static --db=sqlite
     ```
   - This enables enterprise-architect to use overrides in Step 1

5. Set project metadata:
   - Set Status to `INTAKE`
   - Set Current Owner to `founder-advisor`

6. Confirm: "✅ Project '$ARGUMENTS' initialized."
   - If flags provided: "🎛️ Build preset: [preset], Architecture preset: [preset]"

7. Immediately use the **founder-advisor** subagent with this context:
   "New project intake for '$ARGUMENTS'. Ask the founder about their idea."

The founder-advisor will then engage with the human to understand their idea and can use any provided flags as preferences during signal analysis.
