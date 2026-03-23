# TODO: Implement ISR (Incremental Static Regeneration)

## Approved Plan Steps:
- [ ] 1. Edit app/Product/page.jsx: Convert to server component, add ISR fetch for CoinGecko data (revalidate 60s), split search/filter to client component.
- [ ] 2. Update next.config.ts if needed (currently no changes).
- [ ] 3. Test: Run `npm run build` and `npm run start`, verify static generation and /Product page ISR.
- [ ] 4. Update TODO.md with completion status.
- [ ] 5. Optional: Add ISR to other pages like app/Community/page.jsx (static JSON).

Current status: Starting step 1.

