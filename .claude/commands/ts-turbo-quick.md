# Turbo Quick: $ARGUMENTS

Minimal output version of turbo mode. Just builds, no verbose status.

## Usage

```
/ts-turbo-quick <project-name> "<idea>"
/ts-turbo-quick <project-name> --idea=<file-path>
```

### Examples

```
# With quoted idea
/ts-turbo-quick todo-app "Task management app with auth and categories"

# With idea from file
/ts-turbo-quick todo-app --idea=./ideas/task-manager.txt
/ts-turbo-quick blog-platform --idea=input/blog-idea.md
/ts-turbo-quick ecommerce --idea=/path/to/ideas/store.json
```

### Supported File Formats

Same as `/ts-turbo`: `.txt`, `.md`, `.json`, `.yaml/.yml` files.
JSON/YAML files can include flags that will be applied automatically.

## Process

Same as `/ts-turbo` but with minimal output. Follows the same logic:
- **Argument parsing**: Supports both quoted ideas and `--idea=file-path`
- **File reading**: Same file format support (.txt, .md, .json, .yaml)
- **Flag merging**: JSON/YAML files can contain flags that override CLI flags
- **Execution**: Same 4-stage autonomous pipeline

**Minimal output shows only:**
- Stage transitions
- Errors (if any)
- Final summary

Execute silently:

1. **Stage 1**: Architecture
   - founder-advisor: analyze
   - enterprise-architect: full design
   - → auto-approve

2. **Stage 2**: Product
   - product-lead: MVP
   - project-planner: roadmap
   - business-analyst: analysis
   - → auto-approve green-light

3. **Stage 3**: Development
   - principal-developer: plan
   - qa-engineer: test plan
   - database-developer: build
   - backend-developer: build
   - frontend-developer: build
   - integration-engineer: connect
   - → auto-approve development

4. **Stage 4**: Release
   - technical-writer: docs
   - security-engineer: scan
   - release-engineer: package
   - devops-engineer: infra + pipeline
   - → auto-approve release

## Output Format

```
🚀 TURBO QUICK: [project-name]
💡 Idea source: [quoted] OR [file: path/to/idea.txt]

[Stage 1] Architecture ... ✅
[Stage 2] Product ... ✅
[Stage 3] Development ... ✅
[Stage 4] Release ... ✅

✅ Complete: output/[project-name]/

Quick deploy:
  /ts-push neon && /ts-push railway && /ts-push vercel
```

### Example Output with File

```
🚀 TURBO QUICK: todo-app
💡 Idea source: file: ./ideas/task-manager.txt

[Stage 1] Architecture ... ✅
[Stage 2] Product ... ✅
[Stage 3] Development ... ✅
[Stage 4] Release ... ✅

✅ Complete: output/todo-app/

Quick deploy:
  /ts-push neon && /ts-push railway && /ts-push vercel
```
