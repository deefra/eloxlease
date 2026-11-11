# eloxlease

A Next.js (App Router) rebuild of [eloxlease.nl](https://eloxlease.nl/): the homepage, the Silence S02,
E-Cargobike and CookTek product pages, Over ons and the Leasevoorstel form.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + production build
```

Requires Node 24 or newer.

## Layout

- `src/app/` — one route per source page (trailing-slash URLs, as on the source) and `api/contact/`.
- `src/components/sites/eloxlease/` — shared header, footer, page shell, form component and
  `chrome.css` (theme base styles); one folder per page with its components and scoped stylesheet.
- `public/sites/eloxlease/` — images; `scripts/download-eloxlease-assets.sh` re-downloads them.
- `docs/research/eloxlease/page-brief.md` — measurements and known differences from the source.

## Forms

Form submissions are posted to `/api/contact/`. Set `CONTACT_WEBHOOK_URL` to forward them (as JSON) to
your own endpoint. Without it, development logs the submission and reports success, and production
reports a failure.
