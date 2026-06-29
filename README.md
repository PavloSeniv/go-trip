# 🌲 GoTrip — Travel Landing

A multi-page travel agency website built from a Figma design with a Gulp + SCSS
workflow. Explore the natural beauty of the world: guided tours, hand-picked
destinations and adventures — wrapped in a clean green-and-coral design system.

> Built by [@PavloSeniv](https://github.com/PavloSeniv) as a front-end / layout practice project.

---

## ✨ Features

- **6 pages**, one shared design system — Home, Services, Pricing, Contact, Login, Sign up
- **Reusable component library** — buttons, cards, pricing plans, forms, stats band, CTA, page banner
- **Fully responsive** (desktop → tablet → mobile) with an off-canvas burger menu
- **Animations** — scroll reveals (AOS), parallax hero, swiper destinations slider, polished hover states
- **Sticky header** that turns solid green on scroll + active-link highlighting
- **Accessibility** — semantic HTML, labelled form fields, `prefers-reduced-motion`, visible focus states
- **Design tokens in SCSS** (`_vars.scss`) — palette, gradients, radii, shadows, spacing, motion
- **BEM** methodology, Flexbox & CSS Grid, optimized images + WebP, self-hosted Poppins (woff/woff2)

## 🎨 Design system

| Token        | Value                                   |
| ------------ | --------------------------------------- |
| Brand green  | `#1f5e37` → `#0c2417` (hero gradient)   |
| Accent coral | `#ff7b4e` → `#ff584e` (CTA gradient)    |
| Surface / bg | `#ffffff` / `#f6f6f6`                   |
| Text         | `#0f1f1c` (ink) / `#5b6b64` (muted)     |
| Font         | Poppins (400 / 500 / 600 / 700)         |

## 🧱 Tech stack

Gulp 4 · Dart Sass (SCSS) · gulp-file-include (HTML partials) · Webpack (JS modules)
· [Swiper](https://swiperjs.com) · [AOS](https://michalsnik.github.io/aos/) · Parallax.js
· autoprefixer · imagemin / webp · ttf2woff2

## 📁 Project structure

```
src/
├── *.html              # pages (index, services, pricing, contact, login, register)
├── html/               # shared partials (head, header, footer, slider)
├── scss/
│   ├── _vars.scss      # design tokens
│   ├── _base.scss      # reset-on-top base & typography
│   ├── _components.scss # buttons, cards, forms, section heads, decor
│   ├── _pages.scss     # page banner, services, pricing, contact, auth, CTA, FAQ
│   ├── header/ footer/ # block styles
│   └── style.scss      # entry point + home page
├── js/modules/         # burger menu, parallax, swiper init, nav UI, webp
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

## 👤 Author

**Pavlo Seniv** — [@PavloSeniv](https://github.com/PavloSeniv)
