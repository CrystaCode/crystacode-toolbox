# Contributing

Thanks for helping improve the CrystaCode toolbox. This guide covers how to change a skill, validate it, and record the change.

## Development workflow

1. Fork the repository and create a feature branch.
2. Edit the skill in `skills/<name>/`. `SKILL.md` and its reference files are plain Markdown.
3. Validate the frontmatter locally (no dependencies required):

   ```bash
   node scripts/validate-skills.mjs
   ```

4. Test the skill by installing it into a scratch project and running the example invocations in the skill's README.
5. Open a pull request. CI runs the same validation automatically (`.github/workflows/validate.yml`).

## Guidelines

- Keep `SKILL.md` lean. Put detailed instructions in reference `.md` files and link to them, so the skill stays fast to load.
- Every skill must keep valid frontmatter: `name` (lowercase kebab-case, matching the folder name) and `description` (third person, rich in trigger phrases).
- Follow the existing conventions in `skills/prototyper/DESIGN-TOKENS.md` when changing Prototyper's styling rules.
- README images for a skill live in `docs/<skill>/images/`, outside the skill folder so they are not copied into users' installs. For Prototyper, see [`docs/prototyper/CAPTURE-GUIDE.md`](docs/prototyper/CAPTURE-GUIDE.md) for how the visuals are made and the standards to follow.

## Versioning and releases

- Record every change that affects behavior in [`CHANGELOG.md`](CHANGELOG.md), following [Keep a Changelog](https://keepachangelog.com).
- Use [Semantic Versioning](https://semver.org): **MAJOR** for behavior-changing workflow rules, **MINOR** for new capabilities (new modes, new steps), **PATCH** for clarifications and fixes.

## Distribution

- The skills CLI installs directly from the public GitHub repository: `npx skills add CrystaCode/crystacode-toolbox --skill <name>`.
- `.claude-plugin/marketplace.json` makes the repository installable as a Claude Code plugin. Keep the owner fields and plugin entries current.
- The skills.sh listing links back to this repository; keep the repository description and topics accurate.
