# PS99 Hub

Pet Simulator 99 Player Intelligence Terminal — search any Roblox player to instantly view PS99 stats, clan info, league standing, inventory value, and global rankings.

Powered by the official BIG Games API.

## Features

- **Player Lookup** — Search any Roblox username to see full PS99 profile, inventory, mastery, and wealth stats
- **Leaderboards** — Global rankings for clans, leagues, and top contributors
- **Clans** — Browse all clans with points, members, diamonds, and leaderboard position
- **Leagues** — Search leagues and view top contributors
- **RAP Market** — Live Re-Appraisal Price tracking for Huges, Titanics, and Gargantuans
- **API Status** — Real-time health dashboard for BIG Games and Roblox APIs

## Run Locally

```bash
npm install
npm run dev
```

## Build for Web (GitHub Pages)

```bash
npm run build
```

Output is in the `dist/` directory.

### Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to repo Settings > Pages
3. Set Source to "GitHub Actions"
4. Push to `main` — the workflow auto-deploys to GitHub Pages

Or trigger manually from Actions tab > "Deploy to GitHub Pages".

## Build as Desktop App (.exe)

```bash
npm run build
npm run electron:build
```

The `.exe` installer will be in the `release/` directory.

Other platforms:
- `npm run electron:build:mac` — macOS .dmg
- `npm run electron:build:linux` — Linux AppImage

## Tech Stack

- React 18 + Vite
- Tailwind CSS + shadcn/ui
- TanStack React Query
- React Router (HashRouter)
- Electron (desktop builds)
- BIG Games Public API
- Roblox API (via RoProxy)
