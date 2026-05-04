# GG Desktop Mascot (Electron-only)

This is a **local desktop app** (not a website) built with Electron.

## Project structure
- `main.js` – Electron main process (window setup)
- `preload.js` – safe bridge from renderer to main
- `index.html` – UI markup
- `renderer.js` – UI logic
- `styles.css` – transparent overlay styles + floating animation
- `settings.json` – easy customization

## Requirements met
- Transparent, frameless, always-on-top desktop window
- Draggable mascot image (window drag region)
- Gentle floating/bobbing mascot animation
- Click mascot to open/close chat bubble
- Runs locally with Electron (no web hosting)

## Install
```bash
npm install
```

## Run in development
```bash
npm run dev
```

## Build Windows installer
```bash
npm run build
```

## Placeholder image (no binary assets included)
No image file is shipped in this repo by design.

1. Add your PNG to project root (example: `my-gg.png`)
2. Update `settings.json`:
```json
"mascotImagePath": "./my-gg.png"
```
3. Restart app.
