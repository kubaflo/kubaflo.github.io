# florekgames.pl → GitHub Pages: status (2026-11-15)

Repo: https://github.com/kubaflo/florekgames-site (public) · local: ~/Desktop/florekgames-site
Pages URL (until the domain switch): https://kubaflo.github.io/florekgames-site/

## What's in it
- Unchanged mirror of everything florekgames.pl serves (crawl + every live path from the private 2025 backup repo `kubaflo/florekgames`).
  Not copied: server-side `.php` files (notifications.php, therace/*.php), `.htaccess`, Unity `.meta` files.
  The browser-game WebGL builds were already broken on the live site (their Release/*.data etc. are 404 there too).
- New privacy pages: privacy_policy_hoops_cup / kick_clash / capes_up / tune_showdown / cztery_kule .html
- app-ads.txt: AdMob line `google.com, pub-3335358119261286, DIRECT, f08c47fec0942fa0` first; 1,548 → 1,044 lines (deduped),
  domains normalised (https://gothamads.com/ → gothamads.com), swapped engagebdr fields fixed, 7 missing Google cert IDs added,
  smartyads line without a seller ID dropped. The ~1,040 legacy lines are the old Start.io list; no current project ships a
  non-AdMob SDK, so they can be trimmed to just the AdMob line whenever the user decides.

## Remaining manual steps
See the table + DNS records in the session report (also below).

### DNS at Hostinger (nameservers ns1/ns2.dns-parking.com) — NOT changed yet, needs user OK
1. GitHub → Settings → Pages → "Add a domain" → florekgames.pl → add the TXT `_github-pages-challenge-kubaflo` record it shows → Verify.
2. Hostinger: disable CDN for florekgames.pl, then in DNS zone:
   - delete A @ 185.170.199.212, 92.112.183.235 and AAAA @ 2a02:4780:1a:5a72:e307:6a7e:818:1590, 2a02:4780:30:fe8c:dca4:c922:e671:db78
   - add A @ 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - add AAAA @ 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153
   - replace CNAME www → www.florekgames.pl.cdn.hstgr.net with CNAME www → kubaflo.github.io
   - KEEP MX (mx1/mx2.hostinger.pl) and TXT v=spf1 (mail)
3. Then: `gh api -X PUT repos/kubaflo/florekgames-site/pages -f cname=florekgames.pl` (adds custom domain), wait for the cert, then
   `gh api -X PUT repos/kubaflo/florekgames-site/pages -F https_enforced=true`.
4. AdMob → Apps → app-ads.txt → re-check after ~24 h.
