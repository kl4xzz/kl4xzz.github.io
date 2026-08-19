# Khawja Kashfee — Portfolio Site

A static site — no backend needed, just these three files:

- `index.html` — structure/content
- `style.css` — all styling, the blueprint/schematic theme, animations
- `script.js` — scroll-reveal animation + hero robot parallax

## Upload to GitHub

1. Create a new repo on GitHub, e.g. `kashfee-portfolio`
2. Upload all three files (`index.html`, `style.css`, `script.js`) to the repo root — drag and drop works fine via GitHub's web UI ("Add file" → "Upload files")
3. Commit

## Host it for free with GitHub Pages

1. In the repo, go to **Settings → Pages**
2. Under "Build and deployment," set **Source** to `Deploy from a branch`
3. Set **Branch** to `main` (or `master`) and folder to `/ (root)`
4. Save — GitHub gives you a live URL in a minute or two, usually:
   `https://<your-username>.github.io/kashfee-portfolio/`

## To edit later

- Text/content → `index.html`
- Colors, fonts, spacing, animation timing → `style.css`
- Scroll-reveal or robot movement behavior → `script.js`

## Known placeholder

- The photo frame in the About section is still empty — add an `<img>` tag inside `.frame` in `index.html` once you have a portrait, and it'll sit inside the corner-bracket frame styling automatically.
