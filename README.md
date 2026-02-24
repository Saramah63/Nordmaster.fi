# Nordmaster.fi

Production-ready React + Vite website for Nordmaster Group Oy.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 4

## Scripts

- `npm run dev` - Start local dev server
- `npm run typecheck` - Run TypeScript checks
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run check` - Typecheck + build

## Project Structure

- `src/app` - Application UI and business components
- `src/styles` - Global styling and theme files
- `public` - Static assets (`robots.txt`, `sitemap.xml`, manifest, icons)

## Production Readiness

- SEO metadata included in `index.html`
- Open Graph and Twitter social metadata
- `robots.txt` and `sitemap.xml`
- Web app manifest
- GitHub Actions CI (`.github/workflows/ci.yml`) for typecheck/build
- Consistent repository text settings (`.editorconfig`, `.gitattributes`)
