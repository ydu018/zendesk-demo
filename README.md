# JJ Astronauts — Brand Demo Site

A static site for **JJ Astronauts**, a holding company that operates a family of
consumer brands. The corporate site links out to individual brand demo homepages,
each of which carries the shared Zendesk Web Widget.

## Structure
```
/index.html                       JJ Astronauts corporate homepage
/brands.html                      Brands listing — one tile per brand (served at /brands)
/brands/viking-trinkets/index.html  Viking Trinkets demo (served at /brands/viking-trinkets)
/css/corporate.css                JJ Astronauts styling
/css/viking.css                   Viking Trinkets styling
/zendesk.js                       Shared Zendesk Web Widget loader
/vercel.json                      Clean URLs config
```

## Zendesk Web Widget — on every page
The widget is loaded by a single shared script, `/zendesk.js`, which holds the
widget key in one place and injects the official Zendesk snippet. Every page
includes it with one line before `</body>`:

```html
<script src="/zendesk.js"></script>
```

Because the key lives only in `/zendesk.js`, updating it there updates every page
at once. The loader guards against double-injection.

## Adding a new brand
1. Create `/brands/<brand-slug>/index.html` (copy Viking Trinkets as a starting point).
2. Add `<script src="/zendesk.js"></script>` before `</body>` so the widget loads.
3. Add a `.brand-card` tile linking to `/brands/<brand-slug>` in `brands.html`
   (replace one of the "Coming soon" placeholder tiles).

## Local preview
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deployment
Auto-deployed via Vercel on every push to `main` (project `ydzd-demo`).
Live: https://ydzd-demo.vercel.app
