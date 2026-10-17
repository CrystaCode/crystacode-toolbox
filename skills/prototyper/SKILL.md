---
name: prototyper
description: Creates interactive HTML/CSS/JS prototypes — either a pixel-perfect 1:1 clone of a shared browser page or URL, or a from-scratch UI built from a text description — with live preview, iterative changes, and a production-ready final version. ALWAYS use this skill whenever the user wants to create, build, make, design, mock up, or sketch a prototype, mockup, wireframe, demo UI, landing page, dashboard, component, or screen, or says things like "I want to create a prototype", "prototype this", "clone this page", "replicate this URL/website", "turn this idea into a UI", or "finalize the prototype". Use it even if the user does not mention the word "skill" or "prototyper".
argument-hint: 'A description of the UI, or a URL/shared browser page to replicate, e.g., "https://example.com/dashboard" or "A dark-themed analytics card"'
user-invocable: true
---

# Prototyper

You are an expert frontend UI prototyper. Generate interactive web prototypes, accept feedback, iterate, and package them into accessible, semantic, production-grade assets — pure HTML/CSS/JS, no frameworks, no build tools.

## Pick a mode

Identify which pathway applies **before writing any code**. The two modes produce very different artifacts, so getting this wrong wastes the whole prototype:

- **Browser Clone Mode (EXACT 1:1 REPLICA — ABSOLUTE MANDATE)** → [BROWSER-CLONE-MODE.md](BROWSER-CLONE-MODE.md).
  A page is open/shared in the integrated browser, or a URL was provided (if only a URL is given, load it with the Playwright MCP). Nothing may change: no added components, no missed components, no altered styles. Extract the truth from the live page — never re-invent it by eye.
- **Prompt Mode** → [PROMPT-MODE.md](PROMPT-MODE.md).
  No browser page or URL is shared. Design the full UI from scratch based on the user's description, requirements, and feature list.

If the input is ambiguous and the user isn't reachable, default to Prompt Mode and state the assumption at the top of the prototype.

## Rules that apply to both modes

1. **Complete isolation — never look at past prototypes.** Start 100% from scratch every time. NEVER inspect, read, copy, or borrow code, layouts, or templates from previous prototypes in `prototype/` or `final/`. The only sources of truth are the live shared browser tab/URL (when shared) and the user's current prompt (when described).
2. **Meaningful dedicated folders.** Every prototype gets its own meaningfully named subfolder — `prototype/{component_name}/` during iteration, `final/{component_name}/` after approval. Never dump files in the root of `prototype/` or `final/`.
3. **CrystaCode design tokens are mandatory.** Apply the styling standards in [DESIGN-TOKENS.md](DESIGN-TOKENS.md): `1rem = 10px` root scaling, `--font-{size}-{weight}` typography shorthand, `--crysta-*`/`--bit-clr-*` color tokens, tokenized radii and shadows. Never hardcode random hex colors or raw `px` values.
4. **Strict separation of concerns.** HTML markup, CSS styling, and JS behavior live in separate dedicated files. No inline styles or script tags in the HTML.
5. **Framework-agnostic.** No npm packages, build tools, Tailwind, or frontend frameworks unless explicitly requested. Raw HTML5, CSS3, and ES6 JavaScript only.
6. **Never guess.** When a browser page is shared, extract the exact truth directly from the page.

## Workflow summary

The full 5-step workflow (build → mandatory live diff loop → approval → modifications → finalize) is defined in [WORKFLOW.md](WORKFLOW.md). Always invoke the `@preview` directive immediately after generating or modifying files.

## Inputs

- **description** *(optional if a page is already shared in the browser, required otherwise)* — the UI to generate, or instructions on what to adapt/prototype from the shared browser page.
- **component_name** — the meaningful base PascalCase (or kebab-case) name used for the prototype folder and generated files (e.g., `LandingPage`, `PricingCard`). Must be descriptive and specific.
- **url** *(optional)* — a URL to clone. If it is the only input, open and inspect it with the Playwright MCP (`browser_navigate`, `browser_take_screenshot`, `browser_evaluate`). If omitted and the user has already opened and shared a tab, inspect that active shared page.
- **modifications** *(optional)* — requested adjustments during the feedback loop.

## Outputs

### Prototype phase (inside `prototype/{component_name}/`)
- `prototype/{component_name}/{component_name}.html`
- `prototype/{component_name}/{component_name}.css`
- `prototype/{component_name}/{component_name}.js`

### Final phase (inside `final/{component_name}/`)
- `final/{component_name}/{component_name}.html`
- `final/{component_name}/{component_name}.css`
- `final/{component_name}/{component_name}.js`

## Example invocations

**From text description only (Prompt Mode):**

```markdown
@prototyper
description: Creates interactive HTML/CSS/JS prototypes — either a pixel-perfect 1:1 clone of a shared browser page or URL, or a from-scratch UI built from a text description — with live preview, iterative changes, and a production-ready final version. ALWAYS use this skill whenever the user wants to create, build, make, design, mock up, or sketch a prototype, mockup, wireframe, demo UI, landing page, dashboard, component, or screen, or says things like "I want to create a prototype", "prototype this", "clone this page", "replicate this URL/website", "turn this idea into a UI", or "finalize the prototype". Use it even if the user does not mention the word "skill" or "prototyper".
component_name: "PricingCard"
```

**From a page shared in the integrated browser (Browser Clone Mode):**

```markdown
@prototyper
description: Creates interactive HTML/CSS/JS prototypes — either a pixel-perfect 1:1 clone of a shared browser page or URL, or a from-scratch UI built from a text description — with live preview, iterative changes, and a production-ready final version. ALWAYS use this skill whenever the user wants to create, build, make, design, mock up, or sketch a prototype, mockup, wireframe, demo UI, landing page, dashboard, component, or screen, or says things like "I want to create a prototype", "prototype this", "clone this page", "replicate this URL/website", "turn this idea into a UI", or "finalize the prototype". Use it even if the user does not mention the word "skill" or "prototyper".
component_name: "AgentManagementDashboard"
```

**From a given URL (Browser Clone Mode):**

```markdown
@prototyper
url: "https://example.com/admin/agents"
description: Creates interactive HTML/CSS/JS prototypes — either a pixel-perfect 1:1 clone of a shared browser page or URL, or a from-scratch UI built from a text description — with live preview, iterative changes, and a production-ready final version. ALWAYS use this skill whenever the user wants to create, build, make, design, mock up, or sketch a prototype, mockup, wireframe, demo UI, landing page, dashboard, component, or screen, or says things like "I want to create a prototype", "prototype this", "clone this page", "replicate this URL/website", "turn this idea into a UI", or "finalize the prototype". Use it even if the user does not mention the word "skill" or "prototyper".
component_name: "AdminAgentsManagement"
```

**Request a modification:**

```text
Make the 'Most Popular' card stand out with a subtle glow effect and animate the toggle action.
```

**Approve and finalize:**

```text
Looks fantastic! Please finalize it.
```
