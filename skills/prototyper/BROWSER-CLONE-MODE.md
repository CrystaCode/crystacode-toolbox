# Browser Clone Mode (Exact 1:1 Replica — Absolute Mandate)

Applies when a page is opened/shared in the integrated browser, or a URL is provided (a bare URL is loaded with the Playwright MCP — see below).

## The 1:1 mandate

**NOTHING SHOULD CHANGE. The design must remain EXACTLY the same.**

- **DO NOT add any additional component** — no extra sidebars, no extra avatar lists, no extra cards, no extra buttons, no invented widgets.
- **DO NOT miss any component** — every header element, icon, button, badge, avatar, card, overlay, and footer on the live page must be included.
- **Styles must be EXACTLY the same as the shared page:**
  - **Positions**: exact layout, coordinates, centering, margins, padding, gaps, flex/grid alignment, offsets, and z-index layers.
  - **Colors & Gradients**: exact background colors, radial/linear gradients, button backgrounds, text colors, and ambient glow halos.
  - **Fonts & Typography**: exact font sizes, font weights, line heights, letter spacing, and text alignments.
  - **Borders & Radii**: exact border widths, border colors, border radii, and outlines.
  - **Shadows & Effects**: exact box shadows, backdrop filters, and opacity levels.
- Nothing changes unless the user explicitly requests modifications.

## URL-only input: use the Playwright MCP

If the user provides **only a URL** (no page already open/shared in the integrated browser), use the **Playwright MCP server** to load and inspect the page yourself — do not ask the user to open it manually.

1. Open the page: `browser_navigate(url)`. Then `browser_wait_for` until the page has settled (network idle, fonts/images loaded, any cookie or splash overlay handled).
2. Match the viewport to the page's intended layout with `browser_resize` (default to 1440×900 desktop unless the user specifies otherwise) and keep it identical for the original and the prototype.
3. Capture the reference image with `browser_take_screenshot` (full page) and a structural view with `browser_snapshot`.
4. Run the Step 1 extraction script through `browser_evaluate` (the same `page.evaluate` body, as a function).
5. For the diff loop in [WORKFLOW.md](WORKFLOW.md), open the prototype in a second tab (`browser_tab_new` + `browser_navigate` to its `file:///` path), screenshot and diff both tabs, and use `browser_navigate` to reload after each fix.

If the Playwright MCP is not available, tell the user and ask them to share the page in the integrated browser instead. If the URL requires login, ask the user to log in or share the tab; never guess content behind authentication.

Equivalent tools in the integrated browser (`run_playwright_code`, `screenshot_page`, `open_browser_page`) apply when the page is already shared there.

## Step 1: DOM, asset & style extraction (mandatory)

Do NOT try to re-invent or code the page by eye from scratch. Run `run_playwright_code` on the shared page to extract the full rendered DOM, external stylesheets, inline styles, SVGs, and absolute asset URLs:

```javascript
return page.evaluate(() => {
  // Convert all relative image and link URLs to absolute URLs so they render properly locally
  const clone = document.documentElement.cloneNode(true);
  clone.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src');
    if (src && !src.startsWith('http') && !src.startsWith('data:')) {
      img.setAttribute('src', new URL(src, window.location.href).href);
    }
  });

  // Extract all stylesheets and font imports
  const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style')).map(s => {
    if (s.tagName.toLowerCase() === 'link' && s.href) {
      return `<link rel="stylesheet" href="${s.href}">`;
    }
    return s.outerHTML;
  }).join('\n');

  const body = document.body;
  const bodyStyle = window.getComputedStyle(body);

  return {
    title: document.title,
    headStyles: styles,
    bodyClass: body.className,
    bodyHtml: clone.querySelector('body').innerHTML,
    bodyBg: bodyStyle.backgroundColor,
    bodyBgImage: bodyStyle.backgroundImage,
    bodyFont: bodyStyle.fontFamily
  };
});
```

Also call `screenshot_page(pageId: sharedPageId)` to retain the visual reference image.

## Step 2: Assemble the complete 1:1 prototype

- **`{component_name}.html`**: embed the extracted `<head>` styles and font links; include the exact body structure, SVG icons, cards, headers, buttons, badges, overlays, and floating components; link `{component_name}.css` and `{component_name}.js`.
- **`{component_name}.css`**: set `:root` design tokens (see [DESIGN-TOKENS.md](DESIGN-TOKENS.md)); include all layout positioning (centering, absolute offsets, margins, paddings, shadows, glow effects).
- **`{component_name}.js`**: implement interactive triggers (toggles, modal opens/closes, button states).

Then continue with the mandatory diff loop defined in [WORKFLOW.md](WORKFLOW.md) Step 2.
