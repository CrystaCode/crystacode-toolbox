# Changelog

All notable changes to this repository are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versioning: [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `prototyper` skill: 1:1 browser-clone and prompt-based HTML/CSS/JS prototypes with live preview, iteration, and production-ready finalization.
- Skill frontmatter validation script and CI workflow.
- Claude Code marketplace manifest.
- `prototyper`: Step 6, implement an approved prototype in the user's project in the project's own structure and framework (for example a Blazor `.razor` component with scoped CSS). New reference file `IMPLEMENT.md`.
- `prototyper`: the agent confirms the implementation address (folder, component name, route) with the user before touching the project.
- `prototyper`: redesigned README with quick start, demo video, before/after images, implementation guide, FAQ and limitations; capture guide for the README visuals; `CONTRIBUTING.md`.

### Changed

- `prototyper`: CrystaCode design tokens are a default, not mandatory; users can supply their own design system.
- `prototyper`: `component_name` is optional; the skill derives a descriptive kebab-case name when none is given.
- `prototyper`: invocation is `/prototyper` followed by a plain-language request.
- `prototyper`: Browser Clone Mode fidelity to the shared page takes priority over default tokens; Prompt Mode needs no browser and falls back to opening the HTML file when no preview is available.
