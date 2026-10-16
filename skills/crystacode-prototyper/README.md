# crystacode-prototyper


[![skills.sh](https://skills.sh/b/CrystaCode/crystacode-prototyper)](https://skills.sh/CrystaCode/crystacode-prototyper)

A [Copilot/agent Skill](https://github.com/vercel-labs/skills) that generates interactive, production-ready HTML/CSS/JS prototypes. It supports two modes:

1. **Browser Clone Mode** — an exact, pixel-perfect 1:1 replica of a page shared in the integrated browser (or a URL), verified with an automated element-by-element diff loop.
2. **Prompt Mode** — a complete interactive UI designed from scratch from a text description.

After every build it triggers a live preview, handles iterative modification requests, and on approval produces a clean, accessible, semantic final implementation. Pure HTML5/CSS3/ES6 — no frameworks, no build tools.

## How the Skill works

The skill follows a 5-step workflow (detailed in [`skills/prototyper/WORKFLOW.md`](skills/prototyper/WORKFLOW.md)):

1. **Determine input mode & build** — inspect the shared browser tab/URL (DOM, styles, assets) or design from the prompt; write `prototype/{component_name}/{component_name}.html|css|js`.
2. **Mandatory live diff loop** (clone mode) — screenshot both the original and the prototype, run an automated coordinate/style diff, fix and reload until parity.
3. **Present & wait for approval** — trigger the `@preview` directive and ask the user.
4. **Iterate** — apply modification requests and re-preview.
5. **Finalize** — generate `final/{component_name}/{component_name}.html|css|js` with production CSS, modular JS, and accessibility improvements.

```
skills/prototyper/
├── SKILL.md               # Entry point: mode selection, shared rules, I/O contract
├── BROWSER-CLONE-MODE.md  # 1:1 replica mandate + DOM extraction scripts
├── PROMPT-MODE.md         # From-scratch design pathway
├── DESIGN-TOKENS.md       # CrystaCode design system tokens (rem scaling, colors, typography)
├── WORKFLOW.md            # The 5-step lifecycle + preview directives
└── agents/
    └── openai.yaml        # Optional agent metadata (display name, short description)
```

## Installation

### Install with the skills CLI (recommended)

```bash
npx skills add CrystaCode/crystacode-prototyper
```

The installer lets you pick which agents to install the skill on.

### Install into a Claude Code session as a plugin

From the repository root:

```bash
claude plugin install .
```

### Manual install (any agent that reads `.agents/skills/`)

Copy the skill folder into your project or user-level skills directory:

```bash
# project-level
mkdir -p .agents/skills
cp -r skills/prototyper .agents/skills/
```

## Usage

Invoke the skill in your agent chat:

**Prototype from a description:**

```markdown
@prototyper
description: "A dark-themed pricing card component with a monthly/yearly toggle."
component_name: "PricingCard"
```

**Clone a page shared in the integrated browser:**

```markdown
@prototyper
description: "Create an interactive prototype for the page I have open and shared in the integrated browser."
component_name: "AgentManagementDashboard"
```

**Clone from a URL:**

```markdown
@prototyper
url: "https://example.com/admin/agents"
component_name: "AdminAgentsManagement"
```

**Iterate:** reply with modification requests (e.g., "Make the 'Most Popular' card glow"), then finalize with "Please finalize it." The production files appear in `final/{component_name}/`.

## Development workflow

1. Edit the skill content — `SKILL.md` and its reference files are plain Markdown.
2. Validate frontmatter locally (no dependencies required):

   ```bash
   node scripts/validate-skills.mjs
   ```

3. Test the skill by installing it into a scratch project and running the invocation examples above.
4. Open a pull request. CI runs the same validation automatically (`.github/workflows/validate.yml`).

## Publishing

1. **Publish the repo publicly on GitHub.** The skills CLI installs directly from any public GitHub repo:

   ```bash
   npx skills add CrystaCode/crystacode-prototyper
   ```

2. **(Optional) npm package** — if you want `npx`-based distribution under your own package name, add a `package.json` with a `bin` entry and `npm publish`.

3. **(Optional) Claude Code marketplace** — the `.claude-plugin/marketplace.json` at the repo root makes the repo installable as a Claude Code plugin. Fill in the owner fields before publishing.

4. **(Optional) skills.sh badge** — once published, the badge at the top of this README links to your skill listing on [skills.sh](https://skills.sh).

## Versioning

- Track skill content changes in [`CHANGELOG.md`](CHANGELOG.md) using [Keep a Changelog](https://keepachangelog.com) conventions.
- Bump the `version` field in `.claude-plugin/plugin.json` for any content change that affects behavior.
- Use [Semantic Versioning](https://semver.org): **MAJOR** for behavior-changing workflow rules, **MINOR** for new capabilities (new modes, new tokens), **PATCH** for clarifications and fixes.

## Contributing

1. Fork the repo and create a feature branch.
2. Keep `SKILL.md` lean — put detailed instructions in the reference `.md` files and link them (progressive disclosure keeps the skill fast to load).
3. Every skill must keep valid frontmatter: `name` (lowercase kebab-case, matching the folder name) and `description` (third-person, trigger-rich). Run `node scripts/validate-skills.mjs`.
4. Follow the existing token conventions in `DESIGN-TOKENS.md` when changing styling rules.
5. Submit a pull request; CI validation must pass.

## License

[MIT](LICENSE) — see [LICENSE](LICENSE) for details.
