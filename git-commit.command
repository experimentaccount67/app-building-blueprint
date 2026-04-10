#!/bin/bash
cd ~/Desktop/App\ Building\ Blueprint/app
rm -f .git/index.lock
git add -A
git commit -m "feat: add checklist nav, 404 page, 101 checklist items

- Add sticky nav to checklist page with home link and CTA
- Add 404 not-found page matching dark theme
- Add 3 new checklist items (alt text, browser testing, security headers)
- Total items now 101 (100+ claim is accurate)
- Fix git index lock"
echo ""
echo "✅ Done! Press any key to close."
read -n 1
