# antwort.github.io

Landing page and documentation site for [Antwort](https://github.com/rhuss/antwort), the server-side agentic framework.

## Architecture

- **Landing page**: Built with [Astro](https://astro.build) using the [AstroWind](https://github.com/onwidget/astrowind) template. Dark theme with cyan-teal accents.
- **Documentation**: Built with [Antora](https://antora.org) from AsciiDoc sources in the main [antwort](https://github.com/rhuss/antwort) repo.
- **Deployment**: GitHub Actions builds both, merges output, deploys to GitHub Pages.

## Local Development

### Landing Page

```bash
npm install
npm run dev     # Dev server at http://localhost:4321
```

### Full Build (Landing Page + Docs)

```bash
npm run build                              # Astro -> dist/
npm i antora @antora/lunr-extension        # Install Antora (first time)
npx antora antora-playbook.yml             # Antora -> dist/docs/
```

Then open `dist/index.html` in a browser.

## Updating Content

### Landing Page

Edit `src/pages/index.astro`. The page composes AstroWind widgets (Hero, Features, Steps, CallToAction) with Antwort content passed as props.

### Documentation

Edit AsciiDoc files in the main `antwort` repo under `docs/modules/ROOT/pages/`. Add new pages to `docs/modules/ROOT/nav.adoc`.

## Structure

```
src/pages/index.astro          Landing page content
src/components/Logo.astro      A! logo component
src/assets/images/             Logo SVGs
src/config.yaml                Site configuration
src/navigation.ts              Header/footer navigation
antora-playbook.yml            Antora build configuration
supplemental-ui/css/           Antora dark theme overrides
.github/workflows/publish.yml  CI/CD pipeline
```
