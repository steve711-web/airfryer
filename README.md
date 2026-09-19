# airfryerconvert.com

Next.js 14 (App Router) + Tailwind. Three tools, one shared calc engine.

## Status
- `/oven-to-air-fryer` — live, full build (widget + content + FAQ)
- `/air-fryer-wattage-cost` — placeholder, needs build
- `/air-fryer-size-calculator` — placeholder, needs build (Amazon links go here once Associates tag is approved)

## Run locally
```
npm install
npm run dev
```

## Deploy to Vercel
1. Push this repo to GitHub.
2. In Vercel: New Project → import the repo → framework auto-detects as Next.js → Deploy.
3. Point airfryerconvert.com's DNS at Vercel:
   - Easiest: in Vercel project settings → Domains → add airfryerconvert.com → follow the A/CNAME records it gives you → add those records in Dynadot's DNS panel (no need to move nameservers off Dynadot).

## Next build session
- Build `/air-fryer-wattage-cost`: inputs = wattage (W), avg cook time/week (min), electricity rate (cost per kWh). Output = cost per use, per week, per month.
- Build `/air-fryer-size-calculator`: inputs = household size, cooking frequency/style. Output = recommended quart/liter capacity + plain-text Amazon links (swap in Associates tag once approved — see lib/convert.ts pattern for keeping calc logic separate from the page).
- Shared calc logic lives in `lib/convert.ts` — add new pure functions there, keep pages presentation-only, same pattern as the oven converter.
