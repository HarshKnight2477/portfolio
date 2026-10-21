# Portfolio — Harshvardhan Kumbharkar

Personal site of Harshvardhan Kumbharkar. Plain HTML, CSS and a few lines of JS; no build step.

## Run locally

```bash
python -m http.server 8080
```

Then open http://localhost:8080.

## Deploy

**Vercel:** import this repository at vercel.com/new. Framework preset: *Other*, no build command, output directory `.`.

**Docker:**

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

## Files

- `index.html`: all content
- `styles.css`: light and dark themes, responsive layout
- `script.js`: local clock, active-section highlight, copy-email button
- `Harshvardhan-Kumbharkar-Resume.pdf`: downloadable résumé
