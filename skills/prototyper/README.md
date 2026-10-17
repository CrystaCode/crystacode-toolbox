These are the skills published by CrystaCode

| Skill | Description |
| --- | --- |
| [prototyper](prototyper/SKILL.md) | Pixel-perfect 1:1 browser clones and prompt-based HTML/CSS/JS prototypes, with live preview, iteration, and production-ready finalization. |

## Installation

Install with the [skills CLI](https://github.com/vercel-labs/skills):

```bash
# list the skills in this repo
npx skills add CrystaCode/crystacode-toolbox --list

# install a single skill
npx skills add CrystaCode/crystacode-toolbox --skill prototyper

# install all skills
npx skills add CrystaCode/crystacode-toolbox
```

Each skill lives in `skills/<name>/` with a `SKILL.md` (frontmatter `name` matching the folder, plus `description`) and any reference files it links to.

---

## prototyper

[![skills.sh](https://skills.sh/b/CrystaCode/crystacode-toolbox/prototyper)](https://skills.sh/CrystaCode/crystacode-toolbox/prototyper)

Turns a page or an idea into an interactive, production-ready HTML/CSS/JS prototype. Pure HTML5, CSS3 and ES6 — no frameworks, no build tools.

### Two modes

1. **Browser Clone Mode** — an exact, pixel-perfect 1:1 replica of a page open in the integrated browser (or given by URL). Styles, structure and assets are extracted from the live page rather than guessed, then checked with an automated element-by-element diff loop until the prototype matches the original.
2. **Prompt Mode** — a complete interactive UI designed from scratch from a text description, using the CrystaCode design tokens (rem scaling, colors, typography).

### How it works

1. **Build** — inspect the shared page/URL or design from the prompt, and write `prototype/{component_name}/{component_name}.html|css|js`.
2. **Diff loop** (clone mode) — screenshot the original and the prototype, compare coordinates and styles, fix and reload until they match.
3. **Preview** — open a live preview and wait for your approval.
4. **Iterate** — apply your change requests and re-preview.
5. **Finalize** — on approval, generate `final/{component_name}/` with clean production CSS, modular JS and accessibility improvements (semantic HTML, ARIA, keyboard support).

### Usage

```markdown
@prototyper
description: "A dark-themed pricing card component with a monthly/yearly toggle."
component_name: "PricingCard"
```

```markdown
@prototyper
url: "https://example.com/admin/agents"
component_name: "AdminAgentsManagement"
```

Reply with modifications (e.g. "Make the 'Most Popular' card glow"), then say "Please finalize it." to get the production files.

### Good for

- Cloning an existing page or component into editable HTML/CSS/JS
- Quickly mocking up a UI from a description
- Turning an approved prototype into clean, accessible final code
