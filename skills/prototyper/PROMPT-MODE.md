# Prompt Mode (Generate From Description)

Applies when NO browser page or URL is shared. The skill designs and builds the complete interactive UI from scratch.

## Steps

1. **Review the input**: read the user's description, requirements, and requested features carefully.
2. **Structure a clean UI layout** from scratch, incorporating responsive design and intuitive interaction patterns.
3. **Choose the design source.** Use the first of these that applies, and do not mix sources:
   1. **The user's own design system**, if they supplied or named one in the request (fonts, colors, spacing, tokens).
   2. **A design skill already installed for the agent.** Look in the agent's skills folders, at project level and user level (for example `.claude/skills/`, `.agents/skills/`, `.github/skills/`, `.gemini/skills/` and the matching folders in the user's home directory), for a skill whose name or description is about UI design, a design system, brand, frontend or styling. Prototyper itself does not count. If one exists, read its `SKILL.md` and follow it for the look, tokens and components. If several fit, use the most relevant one.
   3. **The user's project design system**, if the project is accessible: CSS variables, token or theme files, a Tailwind or theme config, shared components, or a component library the project already uses. Read it, never edit it, and map its fonts, colors, spacing, radii and shadows to CSS custom properties in the prototype's own CSS. Do not import the project's libraries into the prototype.
   4. **Otherwise, a clean, well-structured UI**: one consistent spacing scale, one type scale, a restrained palette, clear visual hierarchy and accessible contrast, all defined as CSS custom properties.

   Say in one line which source you used, for example "Using your installed `brand-design` skill."

## File creation

Prompt Mode needs no browser page or URL. Use the `component_name` the user gave, or derive a short descriptive kebab-case name and tell the user. Create a dedicated folder `prototype/{component_name}/` and place the files inside:

- `prototype/{component_name}/{component_name}.html`
- `prototype/{component_name}/{component_name}.css`
- `prototype/{component_name}/{component_name}.js`

After generating the files, **trigger the preview system** immediately (see [WORKFLOW.md](WORKFLOW.md) Step 1). If no preview is available, tell the user to open the `.html` file in a browser. Then continue with the approval loop.

## Quality bar

- Modern, beautiful, accessible UI built completely from the prompt requirements and the design source chosen in step 3.
- Clean semantic HTML with proper document structure.
- Production CSS: polished, fully responsive (mobile-first), implementing layout, states, and visual hierarchy.
- Modular JS: robust, error-resistant interactive logic.
- Accessibility: ARIA labels, alt text, role attributes, focus management, and keyboard navigability (applied in the final phase — see [WORKFLOW.md](WORKFLOW.md) Step 5).
