# Viking Trinkets — Zendesk Demo

A static homepage styled after [vikingtrinkets.com](https://vikingtrinkets.com), used to demo the
Zendesk Web Widget on a live site.

## Files
- `index.html` — the homepage
- `styles.css` — styling (Nunito Sans, gold `#dda74f` on ink `#1c1c1c`)

## Zendesk Web Widget
The widget snippet is included before the closing `</body>` tag in `index.html`:

```html
<!-- Start of z3n-jjastro Zendesk Widget script -->
<script id="ze-snippet" src=""> </script>
<!-- End of z3n-jjastro Zendesk Widget script -->
```

Paste the full snippet `src` (e.g. `https://static.zdassets.com/ekr/snippet.js?key=...`) to activate.

## Local preview
Open `index.html` in a browser, or run a static server:

```bash
python3 -m http.server 8000
```

## Deployment
Auto-deployed via Vercel on every push to `main`.
