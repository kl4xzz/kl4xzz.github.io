# Khawja Kashfee — Portfolio Site

A static, multi-page site — no backend needed. Six files total:

- `index.html` — homepage (hero + teasers linking to the other pages)
- `about.html` — full bio, toolset, and timeline
- `projects.html` — full project gallery, F625 featured at top
- `contact.html` — contact details + resume/CV download slot
- `style.css` — all shared styling, the blueprint/schematic theme, animations
- `script.js` — scroll-reveal animation + hero robot parallax (shared across all pages)

## Upload to GitHub

1. Create a new repo on GitHub, e.g. `kashfee-portfolio`
2. Upload all six files to the repo root — drag and drop works fine via GitHub's web UI ("Add file" → "Upload files")
3. Commit

## Host it for free with GitHub Pages

1. In the repo, go to **Settings → Pages**
2. Under "Build and deployment," set **Source** to `Deploy from a branch`
3. Set **Branch** to `main` (or `master`) and folder to `/ (root)`
4. Save — GitHub gives you a live URL in a minute or two, usually:
   `https://<your-username>.github.io/kashfee-portfolio/`

## To edit later

- Homepage text → `index.html`
- Bio, timeline, toolset → `about.html`
- Project entries → `projects.html`
- Contact details, resume link → `contact.html`
- Colors, fonts, spacing, animation timing → `style.css` (shared by all pages)
- Scroll-reveal or robot movement behavior → `script.js` (shared by all pages)

## Known placeholders

- The photo frame in `index.html` and `about.html` is still empty — add an `<img>` tag inside `.frame` once you have a portrait.
- The resume download button in `contact.html` points to `#` — upload your CV PDF to the repo and update that `href` to its filename (e.g. `href="Khawja-Kashfee-CV.pdf"`).
