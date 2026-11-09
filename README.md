# 3 Chicas Mexican Kitchen — website

The website for **3 Chicas Mexican Kitchen**, a locally owned restaurant at
637 Wyckoff Avenue, Wyckoff, NJ 07481, serving California-fresh Mexican food
since 2002. Open kitchen, salsa bar, dine-in, curbside takeout, local
delivery, and catering.

- Live restaurant site: https://www.3chicas.com/
- Phone: (201) 848-4700 — open daily 12:00–8:00 PM, BYOB

A reimagining of the restaurant's site (the original is at 3chicas.com),
built as a static Vite site.

## Pages

| Page | What it is |
| --- | --- |
| `index.html` | Home: the story, open kitchen and salsa bar, dine-in, takeout, delivery, catering, and a visit section with address, hours, and directions |
| `menu.html` | Daily menu (breakfast served all day, tacos) with a link to the printable PDF menu |
| `catering-menu.html` | Catering for parties of any size, with the catering menu image and food photos |
| `delivery.html` | Delivery area ($20 minimum) and curbside takeout |

The header nav links every page to the others, to the restaurant's Yelp page
for reviews, and to the visit section on the home page for contact details.
The footer on every page carries the address, phone, and hours.

## Develop

```sh
npm ci
npm run dev      # Vite dev server
npm run build    # emits all four pages into dist/
npm run preview  # serve the production build locally
```

The build is configured in `vite.config.js` as a multi-page app: all four
HTML files are Rollup entry points, so `dist/` contains the whole site, not
just the home page.

## Notes

- **Menu prices** on `menu.html` are the restaurant's own, transcribed from
  its printed menu; the page itself notes prices may change. The
  [printable menu PDF](https://cdn.hibuwebsites.com/f1441f2579124e7e85e64ce4ea7cbaba/files/uploaded/3-chicas-mexican-kitchen-menu.pdf)
  is linked from the menu page as the authority.
- **Hours** (daily 12:00–8:00 PM) were checked against the restaurant's own
  site, 3chicas.com, in November 2026.
- The site is static HTML + CSS bundled by Vite 4. There is no backend, no
  tracking, and no build-time network dependency beyond the Google Fonts and
  Font Awesome stylesheets loaded from their CDNs.
