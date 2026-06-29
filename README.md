# 🌲 GoTrip — Travel Landing

A multi-page travel-agency website built from a Figma design with a Gulp + SCSS
workflow. Explore the natural beauty of the world: guided tours, hand-picked
destinations and adventures — wrapped in a clean green-and-coral design system.

> Built by [@PavloSeniv](https://github.com/PavloSeniv) as a front-end / layout practice project.

---

## ✨ Features

- **10 pages**, one shared design system — Home, Services, Pricing, Contact,
  Login, Sign up, Forgot password, Help center, Privacy policy, Terms
- **Reusable component library** — buttons, cards, pricing plans, forms, stats
  band, CTA, page banner, toast & success panels
- **Fully responsive** (desktop → tablet → mobile) with a full-screen burger
  menu, **fluid typography** and **fluid spacing** (`clamp()`) — no jarring
  breakpoints, nothing crushed on small screens
- **Client-side form validation** (no native browser popups): inline errors
  *under each field*, a styled **toast** for the newsletter, inline success
  panels for contact, and friendly demo messages on the auth forms
- **Animations** — scroll reveals (AOS, auto-disabled on mobile), Swiper
  coverflow destinations slider with prev/next arrows, animated decorative
  bubbles & waves, polished hover states
- **Fixed slim header** — constant height (no shrink-on-scroll jump), turns
  solid green on scroll, active-link highlighting
- **Accessibility** — semantic HTML, ARIA labels, labelled form fields, a
  skip-to-content link, visible `:focus-visible` states, `prefers-reduced-motion`
- **Design tokens in SCSS** (`_vars.scss`) — palette, gradients, radii, shadows,
  spacing, motion
- **BEM** methodology, Flexbox & CSS Grid, optimized images + WebP, self-hosted
  Poppins (woff / woff2)

## 🎨 Design system

| Token | Value |
| --- | --- |
| Brand green | `#1f5e37` → `#0c2417` (hero gradient) |
| Accent coral | `#ff7b4e` → `#ff584e` (CTA gradient) |
| Surface / bg | `#ffffff` / `#f6f6f6` |
| Text | `#0f1f1c` (ink) / muted ink |
| Font | Poppins (400 / 500 / 600 / 700) |

## 🧱 Tech stack

Gulp 4 · Dart Sass (SCSS) · gulp-file-include (HTML partials) · Webpack (JS modules)
· [Swiper](https://swiperjs.com) · [AOS](https://michalsnik.github.io/aos/) · Parallax.js
· autoprefixer · imagemin / webp · ttf2woff2

## 📁 Project structure

```
src/
├── *.html              # pages: index, services, pricing, contact, login,
│                       #        register, forgot, help, privacy, terms
├── html/               # shared partials (head, header, footer, slider)
├── scss/
│   ├── _vars.scss      # design tokens
│   ├── _mixin.scss     # helpers (fluid-font mixin, etc.)
│   ├── _base.scss      # reset-on-top base & typography
│   ├── _components.scss # buttons, cards, forms, toast, section heads, decor
│   ├── _pages.scss     # page banner, services, pricing, contact, auth, CTA, FAQ
│   ├── header/ footer/ # block styles
│   └── style.scss      # entry point + home page
├── js/modules/         # burger menu, forms (validation + toast), parallax,
│                       # swiper init, nav UI, webp
├── img/  fonts/  plugins/
gulp/                   # tasks & config
go-trip/                # build output (what gets deployed)
```

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # dev server with live reload (browser-sync)
npm run build    # production build → ./go-trip
npm run zip      # build + zip the result
```

> Note: edits live in `src/`; run a build to regenerate `go-trip/`.
> There is no standalone `gulp scss` task — use `npm run dev` / `npm run build`.

## 👤 Author

**Pavlo Seniv** — [@PavloSeniv](https://github.com/PavloSeniv)
