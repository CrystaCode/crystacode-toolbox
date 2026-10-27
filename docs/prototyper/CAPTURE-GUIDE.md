# Capture guide: README screenshots and demo animations

Everything the `skills/prototyper/README.md` needs from `docs/prototyper/images/`, and exactly how to record it.
Real captures only: record the skill running, do not mock up chat windows.

## Setup

1. Pick one neutral page to clone, with no personal or customer data: a public page, or a throwaway local page you serve yourself. Use the same page for every Clone Mode capture.
2. Use a clean workspace: VS Code (or your agent host), dark theme, 1440 x 900, no personal data, no notifications.
3. Install the skill from this repository and confirm `/prototyper` appears.
4. Start each take from an empty `prototype/` folder so the folder screenshots are clean.

## Capture standards

- PNG for screenshots, under 300 KB each (run through an optimizer). GIF or WebP under 8 MB for animations.
- One 2 px highlight box in the brand purple (`#872cd6`) around the single thing to look at. No arrows or clutter.
- Same theme, window layout and source page in every image.
- Every image gets meaningful alt text in the README.

## Screenshots

Prompt Mode images use a second sample: ask for `/prototyper I want a dark-themed pricing card with a monthly/yearly toggle.`

| File | What to capture |
| --- | --- |
| `01-original-page.png` | The page to clone, open in the browser, no personal data visible |
| `02-share-page.png` | Integrated browser beside the chat, page shared, share control highlighted |
| `03-prompt.png` | Chat with `/prototyper create a prototype for the page I have shared in the browser.` |
| `04-generation-progress.png` | Agent progress while it reads the page and writes the files |
| `05-generated-folder.png` | Explorer showing the new folder under `prototype/` with three files; app folders collapsed |
| `06-generated-code.png` | HTML, CSS and JS tabs side by side |
| `07-prototype-preview.png` | Prototype in the browser next to the original page |
| `08-original-vs-prototype.png` | Split image, original left and prototype right, with 2 or 3 matched regions outlined |
| `09-iterate.png` | Chat with "Make the Active badge green and add a row hover state" and the refreshed preview |
| `10-implement-handoff.png` | Chat with "Implement this prototype in src/pages/agents" and the agent starting to edit |
| `p1-describe.png` | Chat with the pricing card request, no page shared |
| `p2-generation.png` | Agent progress for the pricing card |
| `p3-folder.png` | Explorer showing the pricing card folder with three files |
| `p4-code.png` | CSS and semantic HTML side by side |
| `p5-preview.png` | Pricing card with the yearly toggle on and a hover state |
| `p6-iterate.png` | "Make the 'Most Popular' card glow" and the updated card |
| `p7-finalize.png` | "Looks good. Please finalize it." and the `final/` folder |
| `social-preview.png` (1280 x 640) | Logo, tagline, three-file icon. Upload in the repository settings, not the README |

## Animations

| File | Length | Content |
| --- | --- | --- |
| `hero-demo.gif` | 25 s loop | Clone Mode scenes 4 to 9 below, re-timed |
| `clone-mode-demo.gif` | 25 s loop | Same cut as the hero, or a shorter variant |
| `prompt-mode-demo.gif` | 20 s loop | Prompt Mode scenes 3 to 7 below, re-timed |
| Full demos (MP4) | 70 s and 45 s | Linked from the GIFs; not stored in the repo |

Recording rules: 1440 x 900 at 60 fps, downscaled. Replay pre-written prompts at about 25 characters per second and never show a typo. Speed generation up to 4x with a small "4x" tag rather than cutting it. Enlarge the cursor to 150% with a faint click ripple. Captions are one line, at most six words, on screen for at least 2 seconds.

### Clone Mode film (70 s)

| # | Time | Scene | Caption |
| --- | --- | --- | --- |
| 1 | 0:00 to 0:03 | Title card | Prototype before you implement. |
| 2 | 0:03 to 0:09 | Show the page you will clone, open in the browser | Start with an app you already have. |
| 3 | 0:09 to 0:14 | Open it in the browser | Open the page you want to change. |
| 4 | 0:14 to 0:20 | Share the page with the agent | Share it with your agent. |
| 5 | 0:20 to 0:27 | Type `/prototyper create a prototype for the page I have shared in the browser.` | Ask for a prototype. |
| 6 | 0:27 to 0:37 | Skill runs (4x) | It reads the real page and checks its work. |
| 7 | 0:37 to 0:42 | New folder appears under `prototype/` | A separate folder. Your app is untouched. |
| 8 | 0:42 to 0:47 | Three files open in turn | Plain HTML, CSS and JavaScript. |
| 9 | 0:47 to 0:54 | Preview beside the original; click a filter | Review it. Click it. It works. |
| 10 | 0:54 to 0:58 | Optional tweak: "Make the Active badge green." | Change it by conversation. |
| 11 | 0:58 to 1:04 | Type "Implement this prototype in src/pages/agents" | Happy with it? Now implement it. |
| 12 | 1:04 to 1:09 | Agent starts editing app files; diff opens | Only now does your app change. |
| 13 | 1:09 to 1:10 | End card with the install command | `npx skills add CrystaCode/crystacode-toolbox --skill prototyper` |

### Prompt Mode film (45 s)

| # | Time | Scene | Caption |
| --- | --- | --- | --- |
| 1 | 0:00 to 0:03 | Title card | Describe it. Prototype it. |
| 2 | 0:03 to 0:08 | Empty workspace, no page shared | No page to start from? Describe the UI. |
| 3 | 0:08 to 0:15 | Type `/prototyper I want a dark-themed pricing card with a monthly/yearly toggle.` | Say what you want. |
| 4 | 0:15 to 0:23 | Skill runs (4x) | It designs the layout for you. |
| 5 | 0:23 to 0:28 | New folder with three files | Isolated output. Your app is untouched. |
| 6 | 0:28 to 0:35 | Preview; click the toggle, hover the card | Review it. Click it. It works. |
| 7 | 0:35 to 0:40 | "Make the 'Most Popular' card glow." | Change it by conversation. |
| 8 | 0:40 to 0:45 | "Looks good. Please finalize it." and end card | Validate first. Then finalize. |

## Optimizing and wiring up

- Convert recordings with ffmpeg: `ffmpeg -i in.mp4 -vf "fps=12,scale=960:-1:flags=lanczos" out.gif`, then optimize with gifsicle.
- Save files in `docs/prototyper/images/` using the names above; the README already links them.
- Add a text description under each GIF for accessibility.
- Re-record when the host's interface changes enough to make the steps look out of date.
