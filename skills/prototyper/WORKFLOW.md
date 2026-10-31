# Workflow

The complete prototype lifecycle. Follow the steps in order — do not skip the diff loop.

## Step 1: Determine input mode & build prototype

- If a page is open/shared in the integrated browser (or a URL is provided) → follow [BROWSER-CLONE-MODE.md](BROWSER-CLONE-MODE.md).
- Otherwise → follow [PROMPT-MODE.md](PROMPT-MODE.md).

After generating the files, **trigger the preview system** immediately (if no preview is available, tell the user to open the `.html` file in a browser):

```markdown
@preview
path: "prototype/{component_name}/{component_name}.html"
css: "prototype/{component_name}/{component_name}.css"
js: "prototype/{component_name}/{component_name}.js"
```

## Step 2: Mandatory live visual & automated element diff loop (Browser Clone Mode only)

You **MUST run an automated element-by-element diff and visual comparison loop until the prototype is 100% identical to the shared page**. DO NOT proceed to Step 3 or tell the user it is done if any component is missing, misaligned, or styled differently.

The tool names below are those of the integrated browser. With another browser tool (such as a Playwright MCP server), use its equivalents.

1. **Open the generated prototype**: call `open_browser_page(url: "file:///{absolute_path_to_html}")` to load it in the integrated browser.
2. **Screenshot BOTH pages**: call `screenshot_page(pageId: sharedPageId)` on the original shared tab and `screenshot_page(pageId: prototypePageId)` on the prototype tab.
3. **Run the automated element coordinate & style diff** with `run_playwright_code` on BOTH `sharedPageId` and `prototypePageId`:

```javascript
return page.evaluate(() => {
  return Array.from(document.querySelectorAll('*'))
    .filter(el => {
      const r = el.getBoundingClientRect();
      const cs = window.getComputedStyle(el);
      return r.width > 2 && r.height > 2 && cs.visibility !== 'hidden' && cs.display !== 'none' && cs.opacity !== '0';
    })
    .map(el => {
      const r = el.getBoundingClientRect();
      const cs = window.getComputedStyle(el);
      const text = (el.innerText || el.getAttribute('aria-label') || el.getAttribute('title') || '').trim().slice(0, 30);
      return {
        tag: el.tagName,
        id: el.id,
        className: el.className,
        text: text,
        rect: { top: Math.round(r.top), left: Math.round(r.left), width: Math.round(r.width), height: Math.round(r.height) },
        bg: cs.backgroundColor,
        color: cs.color,
        display: cs.display,
        position: cs.position
      };
    });
});
```

4. **Audit the differences**:
   - **Missing components**: any element in `sharedPageId` missing from `prototypePageId`? Add it immediately.
   - **Displaced positions**: any element's `top`, `left`, `width`, or `height` differing significantly? Adjust the CSS flex/grid/position coordinates.
   - **Mismatched styles**: background colors, borders, font sizes, or glowing orbs different? Update the CSS.
5. **Apply fixes & re-verify (iterative loop)**: edit the files in `prototype/{component_name}/`, call `navigate_page(pageId: prototypePageId, type: "reload")`, re-run `screenshot_page(pageId: prototypePageId)` and the diff script. **Repeat until zero missing components and zero positional discrepancies remain.**

## Step 3: Present to user & wait for approval

**ONLY AFTER** the diff loop is fully completed and visual parity is confirmed:

1. Trigger the `@preview` directive (same block as Step 1).
2. Report the verified exact match to the user and ask:

> I have iteratively taken screenshots of both your shared page and the prototype, compared them side by side, and refined the layout, positions, colors, and styles until they are an exact 1:1 match. Do you approve this prototype, or would you like to make any modifications?

## Step 4: Apply modifications (interactive loop)

When the user requests modifications:

1. Update **only the necessary parts** of the HTML, CSS, and JS files.
2. Keep the updated files directly inside `prototype/{component_name}/`.
3. Re-verify the changes in the browser and re-trigger the preview using the `@preview` directive.

Repeat this loop until the user approves and asks to finalize.

## Step 5: Generate final implementation

Once approved, build the production-ready implementation inside a dedicated `final/{component_name}/` folder:

- **Clean semantic HTML** with proper document structure.
- **Production CSS**: polished, fully responsive (mobile-first), clean styles implementing layout, states, and visual hierarchy.
- **Modular JS**: robust, error-resistant interactive logic.
- **Accessibility improvements**: ARIA labels, alt text, role attributes, focus management, and keyboard navigability.

Output:

- `final/{component_name}/{component_name}.html`
- `final/{component_name}/{component_name}.css`
- `final/{component_name}/{component_name}.js`

When the files are ready, tell the user and ask whether they want it implemented in their project. Do not implement without that request.

## Step 6: Implement in the project (only when the user asks)

When the user approves implementing the prototype in their project, follow [IMPLEMENT.md](IMPLEMENT.md):

1. **Confirm the implementation address** (folder, component name, route) with the user and wait for their confirmation. Do not touch the project before this.
2. **Learn the project's structure**: detect the stack and read one or two similar existing components for conventions.
3. **Convert the final files into the project's own structure**, for example a Blazor `.razor` component with scoped CSS for a Blazor project, using the project's design system.
4. **Verify and report**: run the project's build and checks, compare with the approved prototype, and list what changed.
