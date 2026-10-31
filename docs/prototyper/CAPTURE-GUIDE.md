# Visuals guide: README images and demo

How the visuals in `skills/prototyper/README.md` are made and what to follow when you update them. Write and check the README text first. Add visuals only after the text stands on its own.

## What is in `docs/prototyper/images/`

| File | What it shows | Made from |
| --- | --- | --- |
| `login-clone-demo.gif` | Clone Mode. The editor's integrated browser shows the app's login page; the cursor clicks **Share with Agent**, the page glows and a chip is attached to the chat, `/prototyper` is run, and an elevated prototype window appears next to the untouched original. Two changes follow, applied to the prototype only. | A real login prototype (`login-page.html/.css/.js`), drawn into an editor scene. Not a recording of a live session. |
| `login-variations.png` | One login page and five variations, each labelled with the sentence that requested it. | The same real prototype with small style or state changes. |
| `11-before-after-workflow.png` | Direct edit versus prototype first. | Drawn diagram. |
| `clone-mode-demo.gif` | A real Clone Mode run: share a page, generate, check, change. | A real run. Chat and code panels are redrawn from the real text. Private details removed. |

## Standards

- **Frame the context.** Always show the editor workspace and the browser output as two clearly different surfaces. The editor is flat and dark. The browser window floats above it with a shadow and a glow, and carries a label such as "Prototype in the browser". A first-time viewer must see that a skill in the editor is driving the prototype.
- **No raw site screenshots as the hero.** A full-page screenshot with a navigation bar reads as a standalone website and confuses new viewers. Crop to the part that matters or put it in a labelled window.
- **Use a universal example.** The README example is a login page, so readers spend no effort understanding the app. Do not use domain-specific workflows as the main example.
- **No made-up numbers.** Compare relatively (more or less, slower or faster). Add figures only after you have measured them.
- **Remove private details.** Replace names, emails, addresses, URLs, paths and project names with neutral placeholders, not blur blocks.
- **Size.** PNG under 300 KB where possible. GIF or video under 8 MB. Give every image meaningful alt text in the README.
- **Tell the truth about what is real.** Say in a caption when a panel is redrawn from real text, and when a scene is built from a real prototype rather than a live recording.

## Updating the demo

1. Change the prototype or the variations first, so the visuals stay true to what the skill produces.
2. Re-render the images and the GIF from the same prototype.
3. Check a few frames at full size before the final render.
4. Replace the files in `docs/prototyper/images/` and confirm the README links still resolve.


## Palette

The editor scene uses blue (editor, Share with Agent) and amber (prototype highlights) so it never blends with the green login page used as the example.
