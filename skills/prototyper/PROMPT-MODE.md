# Prompt Mode (Generate From Description)

Applies when NO browser page or URL is shared. The skill designs and builds the complete interactive UI from scratch.

## Steps

1. **Review the input**: read the user's description, requirements, and requested features carefully.
2. **Structure a clean UI layout** from scratch, incorporating responsive design and intuitive interaction patterns.
3. **Apply the CrystaCode design standards** defined in [DESIGN-TOKENS.md](DESIGN-TOKENS.md): `1rem = 10px` root scaling, typography shorthand tokens, `--crysta-*` color tokens, tokenized radii and shadows.

## File creation

Create a dedicated folder `prototype/{component_name}/` and place the files inside:

- `prototype/{component_name}/{component_name}.html`
- `prototype/{component_name}/{component_name}.css`
- `prototype/{component_name}/{component_name}.js`

After generating the files, **always trigger the preview system** immediately (see [WORKFLOW.md](WORKFLOW.md) Step 1), then continue with the approval loop.

## Quality bar

- Modern, beautiful, accessible UI built completely from the prompt requirements and the design system tokens.
- Clean semantic HTML with proper document structure.
- Production CSS: polished, fully responsive (mobile-first), implementing layout, states, and visual hierarchy.
- Modular JS: robust, error-resistant interactive logic.
- Accessibility: ARIA labels, alt text, role attributes, focus management, and keyboard navigability (applied in the final phase — see [WORKFLOW.md](WORKFLOW.md) Step 5).
