# Noodle Dragon Studio Website — Project Handoff

Last updated: 20 September 2026

## Project summary

Noodle Dragon Studio is an independent design and development studio based in Aotearoa New Zealand. The website now positions the studio across three equal areas:

- macOS apps
- Mobile apps
- Mobile games

The current positioning is **“Serious craft. Playful spirit.”** The design keeps the illustrated pink dragon and playful character while presenting the studio with a more polished, product-design-led visual system.

No released products are currently shown. Tony is working on an unnamed macOS Markdown viewer and the unreleased game **Moustache Monsters**, but both must remain off the website until Tony says they are ready.

## Live sites and repository

- Primary website: [https://noodledragon.studio](https://noodledragon.studio)
- Sites-hosted version: [https://noodle-dragon-studio.moustache-re-8455.chatgpt.site](https://noodle-dragon-studio.moustache-re-8455.chatgpt.site)
- GitHub repository: [https://github.com/tony2523/noodledragon](https://github.com/tony2523/noodledragon)
- Git remote name: `github`
- Deployment branch: `main`
- Deployed website source commit: `3ef2de5f6c1424d5634a358efd70068f226f4e3a`
- Sites project ID: `appgprj_6a758f1f0694819192ab390c4563b411`
- Latest Sites version at handoff: version 12
- Contact email used on the website: `tony@noodledragon.studio`

The working tree was clean when this handoff document was started.

## Local project location

Project root:

`/Users/tony/Documents/Codex/2026-08-07/c`

Original brand assets supplied by Tony are also available at:

`/Users/tony/Documents/Noodle Dragon Studio`

## What has been completed

- Reframed the company from a mobile-games-only studio to a macOS app, mobile app and mobile game studio.
- Researched relevant product studios, Mac software companies and indie game studios. The research and design rationale are saved in `DESIGN-RESEARCH.md`.
- Rebuilt the home page with a more editorial, premium visual direction.
- Created equal capability sections for macOS apps, mobile apps and mobile games.
- Created original interface, phone and controller illustrations in CSS rather than showing fabricated products.
- Preserved Tony’s horizontal logo, square logo and dragon mascot.
- Added a responsive mobile navigation that closes after a link selection, outside click, resize or Escape.
- Improved mobile layouts, touch-target sizes, typography and responsive spacing.
- Added keyboard focus styles, a skip link and reduced-motion support.
- Kept the rotating “MAKE / PLAY / SMILE / REPEAT” banner.
- Updated page metadata to describe all three areas of work.
- Kept contact as a direct email link; there is no form or backend.
- Built and tested the GitHub Pages static export.
- Published the redesigned version to GitHub Pages and Sites.
- Configured the custom domain through the existing GitHub Pages setup.

## Important files

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Main website content and page structure. |
| `app/site-header.tsx` | Client-side responsive header and mobile menu behaviour. |
| `app/globals.css` | Complete visual system, responsive layouts, illustrations and animation. |
| `app/layout.tsx` | Page metadata, social metadata and favicon configuration. |
| `DESIGN-RESEARCH.md` | Competitor/reference research, design rationale and future product plan. |
| `.github/workflows/deploy-pages.yml` | Automatic GitHub Pages deployment workflow. |
| `.openai/hosting.json` | Sites project connection. Do not replace its project ID. |
| `vite.config.ts` | Vinext configuration for Sites and GitHub Pages builds. |
| `next.config.ts` | Static-export settings used for GitHub Pages. |
| `CNAME` | Custom domain configuration for `noodledragon.studio`. |
| `public/brand/mascot.png` | Pink noodle-eating dragon used in the hero. |
| `public/brand/logo-header-flat.png` | Horizontal header logo with cream background. |
| `public/brand/logo-square.png` | Square illustrated brand emblem. |
| `public/brand/logo.png` | Large horizontal source logo. |
| `public/og.png` | Existing social sharing image. |

## Technical stack

- React 19
- Vinext / Vite
- TypeScript
- Tailwind CSS is available, but the site’s main styling is in `app/globals.css`.
- Cloudflare/Sites-compatible worker build
- GitHub Pages static export
- Node.js 22.13 or newer

Useful commands from the project root:

```bash
npm ci --ignore-scripts
npm run dev
npm run build
npm run build:pages
npx eslint app/page.tsx app/site-header.tsx app/layout.tsx
```

`npm run build` creates the native worker build used by Sites. `npm run build:pages` creates the static export used by GitHub Pages. These are different outputs and must not be substituted for each other when publishing.

## Deployment workflow

### GitHub Pages and custom domain

Changes pushed to `main` on the `github` remote trigger `.github/workflows/deploy-pages.yml`. The workflow runs the GitHub Pages build and publishes `dist/client`.

Normal flow:

1. Make and verify changes locally.
2. Run `npm run build:pages`.
3. Commit the source.
4. Push `main` to the `github` remote.
5. GitHub Actions updates [https://noodledragon.studio](https://noodledragon.studio).

### Sites-hosted version

The Sites version is a separate deployment even though it uses the same source commit. A future Codex session should use the Sites building and hosting skills, reuse the project ID from `.openai/hosting.json`, and preserve the current audience/access settings.

Important lesson from the latest deployment: run the normal `npm run build` before packaging the Sites archive. A package created from `npm run build:pages` lacks the required worker handler and will be rejected by Sites.

The successful Sites release used version 12 and the commit listed above.

## Design direction to preserve

- Warm cream background with deep green-black text.
- Cherry red, noodle yellow, muted mint and lilac as controlled accents.
- Large restrained sans-serif typography with italic serif phrases for personality.
- Calm, spacious composition instead of a visually noisy game-only aesthetic.
- The dragon is the signature character, not decoration repeated everywhere.
- Tone should be friendly, direct, confident and lightly playful.
- Do not invent customers, reviews, awards, downloads, product screenshots or app-store links.
- Keep macOS apps, mobile apps and mobile games equally visible.
- Maintain the Aotearoa New Zealand identity.

## Research references

The redesign was informed by official websites from companies including Panic, Cultured Code, Rogue Amoeba, Tunabelly Software, ustwo, MetaLab, Ramotion, Cleevio, Dinosaur Polo Club, Snowman and ustwo games. Full notes and links are in `DESIGN-RESEARCH.md`.

The main lesson was to combine Panic’s clear separation of software and games, Cultured Code’s restrained product presentation, and Dinosaur Polo Club’s friendly New Zealand character—without copying their claims or visual identities.

## Future work

When Tony is ready to announce real products, add a **“Made by Noodle Dragon”** section after the three capability cards. Each product should use:

- Real screenshots supplied or approved by Tony
- A short benefit-led description
- Verified supported platforms
- A real product, download or store link
- Accurate availability language such as “Coming soon” only when Tony approves it

Potential future brand task: the supplied logo artwork still contains the historic subtitle “Game Design Studio”. It was deliberately preserved rather than editing Tony’s logo. A future logo refresh could change that subtitle to something broader such as “Apps & Games”, but only with Tony’s approval.

## Instructions for the next session

1. Read this file and `DESIGN-RESEARCH.md` first.
2. Inspect `git status` and preserve any user changes.
3. Treat `main` as the live deployment branch unless Tony asks otherwise.
4. Do not add the Markdown viewer or Moustache Monsters without explicit approval.
5. Test both desktop and mobile layouts before publishing.
6. Build separately for GitHub Pages and Sites.
7. After publishing, verify the live page title/content rather than assuming the deployment finished.
