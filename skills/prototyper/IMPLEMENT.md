# Implement in the project

Use this only after the user has approved the prototype and asks to implement it in their project ("implement it", "add it to the app", "use it in our project"). Finalizing (Step 5) is not implementing: never touch the user's application files until the target is confirmed.

## 1. Confirm the implementation address (mandatory)

Before writing a single file in the project, work out where the result should live, propose it, and wait for the user to confirm. Ask in one message and offer your best guess as the default. Cover:

- **Location**: the folder where the files go (for example `Components/Pages/` or `src/components/`).
- **Name**: the component or page name, following the project's naming convention.
- **Route and navigation** (pages only): the URL route, and whether to add a menu or navigation entry.
- **Replace or add**: whether it replaces an existing page or component, or is new.

Example question:

> To implement `agents-dashboard` in your project, I would create `Components/Pages/AgentsDashboard.razor` with its scoped CSS next to it, routed at `/agents`, and not add a menu entry. Is that the right place and name, or do you want a different address?

Do not guess silently, and do not continue on an assumed "yes". If the user cannot be reached, stop and report what you need to know.

## 2. Learn the project's structure

Read the user's own project (this is allowed here; the "never look at past prototypes" rule covers only `prototype/` and `final/`):

1. **Detect the stack** from project files: `*.csproj` and `*.razor` (Blazor), `package.json` with React, Vue, Svelte or Angular dependencies, `angular.json`, `next.config.*`, `nuxt.config.*`, `pubspec.yaml`, `manage.py`, and so on.
2. **Read one or two similar existing pages or components** to copy their conventions: folder layout, file naming, how styles are written, how state and data access are done, how routing and layout are used.
3. **Find the design system**: existing CSS variables, tokens, theme files, shared components, or a component library the project already uses. Use what exists. Do not add a new library or framework.

## 3. Convert the final files into the project's structure

Take `final/{component_name}/` (or `prototype/{component_name}/` if the user did not finalize) as the visual and behavioral source of truth, and rebuild it as idiomatic code for the stack. Do not copy the three plain files into a framework project unchanged.

| Project type | Build it as |
| --- | --- |
| **Blazor** | A `.razor` component (add `@page "/route"` for a page). Scoped styles in `Name.razor.css`. Move interaction into C# state and event handlers (`@onclick`, `@bind`) and keep JavaScript only for browser-only needs, as a collocated `Name.razor.js` module loaded through JS interop. Reuse the project's existing layout and components. |
| **Razor Pages or MVC** | A `.cshtml` page or partial view, styles in the project's CSS location or an isolated `.cshtml.css`, scripts in `wwwroot`. |
| **React or Next.js** | A function component in the project's language (TSX or JSX), styled the way the project styles (CSS modules, Tailwind, styled-components), behavior in hooks. |
| **Vue or Nuxt** | A single-file component with `<script setup>`, scoped or project-standard styles. |
| **Angular** | A component with its `.ts`, `.html` and `.scss`, standalone or declared the way the project does it. |
| **Svelte** | A `.svelte` component. |
| **Plain HTML or static site** | Copy the final files into the target folder and fix the links. |
| **Anything else** | Follow the conventions of the project's existing components. |

While converting:

- **Map styles to the project's design system.** Replace the prototype's CSS values with the project's tokens, variables, classes and shared components wherever they exist. Keep the look the user approved.
- **Keep behavior and accessibility.** Preserve every interaction, state, ARIA attribute and keyboard behavior from the final files.
- **Connect real data only with permission.** Keep the prototype's sample data as clearly marked placeholder data unless the user names the real source (API, service, model). Never invent endpoints or models.
- **Register the route or navigation** only if the user confirmed it in step 1.
- **Stay in scope.** Create or change only the files needed for this component. Do not refactor or reformat unrelated files, and do not delete `prototype/` or `final/`.

## 4. Verify and report

1. Run the project's own build, lint and tests if they exist, and fix what your change broke.
2. Run or open the result and compare it with the approved prototype: layout, states, interactions.
3. Tell the user what you created and changed (file list), the route it is available at, what is still placeholder (data, links), and any decision you made that they should review.
4. If the project is a git repository, suggest doing this on a branch. Do not create branches or commits unless the user asks.
