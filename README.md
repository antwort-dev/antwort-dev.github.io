# antwort.github.io

Landing page and documentation site for [Antwort](https://github.com/rhuss/antwort), the server-side agentic framework.

## Structure

```
index.html              Landing page
assets/
  css/landing.css       Landing page styles
  img/                  Logo SVGs, favicon, OG image
  js/landing.js         Progressive enhancement (copy buttons, scroll effects)
supplemental-ui/
  css/custom.css        Antora dark theme overrides
antora-playbook.yml     Antora documentation build configuration
.github/workflows/
  publish.yml           GitHub Actions: build + deploy
```

## Local Development

### Landing Page

Open `index.html` directly in a browser. No build step required.

### Documentation

The documentation is built by Antora from AsciiDoc sources in the main [antwort](https://github.com/rhuss/antwort) repo.

To build locally:

```bash
# Install Antora
npm i antora @antora/lunr-extension

# Build (requires the antwort repo to be cloned locally)
npx antora antora-playbook.yml

# The docs are generated in build/site/docs/
```

Note: The `antora-playbook.yml` references the local path to the antwort repo for development. The GitHub Actions workflow uses the remote URL.

## Updating Content

### Landing Page

Edit `index.html` and `assets/css/landing.css` directly. Push to `main` to deploy.

### Documentation

Documentation sources live in the main `antwort` repository under `docs/modules/ROOT/pages/`. Edit the AsciiDoc files there, then either:

1. Wait for the scheduled rebuild, or
2. Trigger a manual rebuild via `workflow_dispatch`

### Adding a New Doc Page

1. Create `docs/modules/ROOT/pages/your-page.adoc` in the main repo
2. Add a `xref:your-page.adoc[Title]` entry to `docs/modules/ROOT/nav.adoc`
3. Push to the main repo

## Deployment

The site deploys automatically via GitHub Actions when changes are pushed to `main`. The workflow:

1. Builds the Antora documentation from the main repo
2. Copies the landing page and assets to the build output
3. Deploys everything to the `gh-pages` branch

GitHub Pages serves the site from the `gh-pages` branch.
