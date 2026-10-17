# crystacode-toolbox

The public AI tools, skills, and plugins provided by CrystaCode

## Skills

See [skills/](skills/README.md). Install with:

```bash
npx skills add CrystaCode/crystacode-toolbox --skill prototyper
```

## Claude Code plugin

```bash
claude plugin marketplace add CrystaCode/crystacode-toolbox
claude plugin install prototyper@crystacode-toolbox
```

## Contributing

1. Add each skill as `skills/<name>/SKILL.md` with frontmatter `name` (lowercase kebab-case, matching the folder) and a trigger-rich, third-person `description`.
2. Keep `SKILL.md` lean; put details in linked reference files.
3. Run `node scripts/validate-skills.mjs` (CI runs it on every PR).
4. Record changes in [CHANGELOG.md](CHANGELOG.md).

Licensed under [MIT](LICENSE).
