#!/usr/bin/env node
// Validates every skills/*/SKILL.md the same way the `skills` CLI does:
// each skill must have YAML frontmatter with string `name` and `description`,
// and the frontmatter `name` must match its folder name (kebab-case, lowercase).
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const skillsRoot = join(process.cwd(), 'skills');
let failed = false;

function kebab(name) {
  return name.toLowerCase().replace(/[\s_]+/g, '-');
}

for (const dir of readdirSync(skillsRoot, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  const skillDir = join(skillsRoot, dir.name);
  const skillMdPath = join(skillDir, 'SKILL.md');

  if (!existsSync(skillMdPath)) {
    console.error(`✗ ${dir.name}: missing SKILL.md`);
    failed = true;
    continue;
  }

  const raw = readFileSync(skillMdPath, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    console.error(`✗ ${dir.name}: SKILL.md has no YAML frontmatter`);
    failed = true;
    continue;
  }

  // Minimal YAML key extraction — enough for the required scalar fields.
  const frontmatter = match[1];
  const field = (key) => {
    const m = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    return m ? m[1].trim() : undefined;
  };

  const name = field('name');
  const description = field('description');

  const errors = [];
  if (!name) errors.push('missing frontmatter "name"');
  else if (typeof name !== 'string' || name.startsWith('"') === false && !/^[a-z0-9][a-z0-9-]*$/.test(kebab(name.replace(/^["']|["']$/g, '')))) {
    errors.push(`"name" must be lowercase kebab-case (got "${name}")`);
  }
  if (!description) errors.push('missing frontmatter "description"');

  const nameClean = name?.replace(/^["']|["']$/g, '');
  if (nameClean && nameClean !== dir.name) {
    errors.push(`frontmatter "name" ("${nameClean}") does not match folder name ("${dir.name}")`);
  }

  if (errors.length > 0) {
    console.error(`✗ ${dir.name}: ${errors.join('; ')}`);
    failed = true;
  } else {
    console.log(`✓ ${dir.name}: SKILL.md frontmatter is valid`);
  }
}

process.exit(failed ? 1 : 0);
