# eloxlease.nl — site brief

Source: https://eloxlease.nl/ (WordPress + Woodmart theme + Elementor). Header, footer, buttons, forms and
lists come from Woodmart; each page body is either custom Elementor HTML with its own `<style>` block
(home, product pages, the Leasevoorstel form) or plain Elementor/Woodmart widgets (Over ons).

## Route map

`next.config.ts` sets `trailingSlash: true` so the source pathnames are kept.

| Source | Local route | Page files (`src/components/sites/eloxlease/…`) |
| --- | --- | --- |
| `/` | `/` | `home/` |
| `/silences02/` | `/silences02/` | `silence-s02/` |
| `/elektrischebezorgfiets/` | `/elektrischebezorgfiets/` | `e-cargobike/` |
| `/cooktek-leasen/` | `/cooktek-leasen/` | `cooktek/` |
| `/contactonspagina/` (Over ons) | `/contactonspagina/` | `over-ons/` |
| `/leasevoorstel/` | `/leasevoorstel/` | `leasevoorstel/` |

Shared: `site-shell.tsx`, `site-header.tsx`, `site-footer.tsx`, `floating-buttons.tsx`, `cf7-form.tsx`,
`json-ld.tsx`, `site-data.ts`, and `chrome.css` (Woodmart defaults + header/footer, loaded from the layout).
Each page stylesheet is scoped to its wrapper class (`.elox-home`, `.elox-silences02`, …) because the
source pages each carry their own copy of the custom CSS with small differences (e.g. container 1180 vs
1200px). Form submissions go to `src/app/api/contact/route.ts` (set `CONTACT_WEBHOOK_URL` to deliver them).

Still pointing at the source/other sites: `https://eloxlease.nl/privacyverklaring/`,
`https://eloxservice.nl/…` (Service menu item and the two Over ons buttons), WhatsApp, tel: and mailto:.

## Known source quirks and how they are handled

- Silence S02 and CookTek: the Elementor stylesheet for their quote section returns 404, so on the source
  it renders unstyled (cream background, near-invisible white intro text, full-bleed columns). Reproduced
  as rendered. E-Cargobike's loads, giving the green gradient + white form card; reproduced too.
- CookTek customer logos return 404 and the inline `onerror` fallback is malformed; the clone shows the
  intended text wordmarks instead of broken-image icons.
- Over ons: the Google Maps widget has no API key or location (error dialog over London); the clone embeds
  a keyless map of Talmastraat 11, Nijkerkerveen.
- The header logo and several images are lazy-loaded by a3-lazy-load on the source and can appear late or
  as empty boxes until scrolled; the clone renders them normally.
- Over ons and Leasevoorstel have no floating WhatsApp button on the source (it comes from page HTML).
- Woodmart reserves 55px below the footer at ≤1024px for its hidden mobile toolbar; reproduced.

## Global

- Fonts: Inter from Google Fonts, declared only at weights 400 and 600 (heavier requests such as 700/800
  render with the 600 face). Header nav uses Kumbh Sans 700, 13px, uppercase.
- Body: 17px / 1.6, `#1a1a1a`. Container `max-width:1200px; padding:0 24px` (used by header too).
- Tokens: green `#125432`, dark green `#0d3e25`, light green `#d7e9a3`, cream `#fff7ee`,
  orange `#fb5315` (hover `#d94409`), muted `#5e6b65`, line `#e6e2d8`.
- Buttons: pill, 16px 700 uppercase, padding 16px 28px, height ~54px, 2px border.
- Breakpoints: content 960 / 640 (custom CSS); header switches to mobile at ≤1024 (Woodmart);
  footer stacks at ≤767 (Elementor).

## Header (Woodmart)

- Desktop: cream bar, 100px tall. Logo 90×90 (img height 100, 5px vertical padding), nav (gap 30px,
  `#333`, active/hover `#125432`, 0.25s), phone info box (32px yellow SVG + "(085)7605170" 14px/500 green),
  orange "Ontvang offerte" button. Element spacing 50px.
- Sticky: once scrolled past the header (real wheel input), header becomes fixed, height animates
  100 → 70px (0.3s), logo shrinks to 60px, shadow `0 1px 3px rgba(0,0,0,.1)`.
- Mobile (≤1024): 70px bar, logo 60px, centered offerte button, burger opens a 300px white drawer
  from the left (transform 0.5s cubic-bezier(.19,1,.22,1)) over a `rgba(0,0,0,.7)` overlay. Drawer links
  13px/600 uppercase, 50px tall, bottom border `rgba(0,0,0,.105)`.

## Sections (in order)

1. USP topbar (dark green, 14px) — USP list hidden ≤640px.
2. Hero — grid 1.15fr/1fr gap 60, h1 clamp(38,5vw,60) / 800→600 face, lead 20px muted, two buttons,
   micro-trust row, 3 stats. Image 3:4 with radius 24 and two floating cards (hidden ≤640).
3. Trust bar — 4 italic wordmarks (text, not logos).
4. Products — 3 cards with gradient image well, tag, features, price row.
5. Value — 1fr/1.2fr grid, 16:9 image, 4 check-mark points.
6. Benefits — 3×2 cream tiles with emoji icons.
7. Steps — dark green, 4 glass cards.
8. Industries — 4 tiles.
9. Testimonials — 3 cream cards with big orange quote mark.
10. FAQ — 7 native `<details>` items, "+" rotates 45° when open.
11. Final CTA — green gradient, two buttons.
12. Footer — green `#125432`, 4 flex columns (grow 13.07/18.17/27.13/36.59, gap 20,
    inner max-width 1192), black bottom bar.

Floating: WhatsApp button (62px, fixed bottom/right 24px, z 1000) and Woodmart scroll-to-top
(50px white circle, bottom/right 20px, mostly beneath the WhatsApp button).

## Assets

See `scripts/download-eloxlease-assets.sh` for source URL → `public/sites/eloxlease/` mapping.
The cookie consent banner (third-party CMP) is intentionally not reproduced.
