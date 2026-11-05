# crystacode-toolbox

The public AI tools, skills, and plugins provided by CrystaCode.

This repository is a collection of reusable [agent skills](skills/README.md) that you can install into Claude Code and other skills-compatible AI coding agents. Each skill is a self-contained folder under `skills/<name>/` with a `SKILL.md` that tells the agent when to activate and how to work, plus any reference files it links to. The repo is also published as a Claude Code plugin marketplace.

## Skills

| Skill | What it does |
| --- | --- |
| [Prototyper](#prototyper) | Builds interactive HTML/CSS/JS prototypes, either cloned 1:1 from a live page or created from a description. |

### Prototyper

**The problem:** getting from "I have an idea" to "something people can click" is slow.
 
 Without Prototyper, the normal workflow is to build the UI directly in your project. Every tweak means editing a large number of files, rebuilding the project again and again, and fixing the errors each rebuild turns up. That is extremely time-consuming and burns a significant number of tokens on every iteration.

Prototyper moves that iteration out of your project. You refine the UI in a standalone prototype, where changes are instant and need no build, and touch your real codebase only once, after you approve.

![Side by side: telling the agent to change your real app repeats an edit, build and fix cycle five times and takes 40,000 tokens and 5 minutes; with Prototyper, three login-prototype files are created in one pass with no builds or errors, 300 tokens and 20 seconds](https://github.com/user-attachments/assets/775d3dd7-b561-4aac-998f-83eb03ead92f)

*The numbers in this diagram come from one example scenario and are rounded. They are not a benchmark. Your results depend on your project and agent.*

![Clone Mode demo: click Share with Agent in the editor's browser, run /prototyper, and get a prototype of the shared login page next to the untouched original](https://github.com/user-attachments/assets/e0ce17c3-9991-4dbe-95c2-02dbd645ba9e)

*Click Share with Agent in the editor's browser, run `/prototyper`, and the agent clones the page you shared. Changes go to the prototype only; your app stays untouched. An illustration built from a real login prototype, not a screen recording.*

**Why prototyper helps:** you describe a UI, or point at a page, and get a working prototype in minutes. You can change it by just asking, and when you're happy, it implements the result in your own project.

Try it: `/prototyper I want a dark-themed pricing card with a monthly/yearly toggle.`

Install it with `npx skills add CrystaCode/crystacode-toolbox --skill prototyper`, then see how it works: [skills/prototyper/README.md](skills/prototyper/README.md) · [SKILL.md](skills/prototyper/SKILL.md)

## Installation

### Skills CLI

```bash
npx skills add CrystaCode/crystacode-toolbox --skill prototyper
```

See [skills/README.md](skills/README.md) for more install options.


