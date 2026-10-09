# GMV Forge — PROJECT_STATUS

Last updated: 2026-10-10
Site: https://www.gmvforge.com · Repo: dawoodazhar/tiktok-shop-funnel · Hosting: Vercel (prj_Ng5USRJv07QE62vJRZJNB96KBJkt)

Statuses: Pending · In Progress · Blocked · Completed

## Domain & migration
| Task | Status | Evidence / notes |
|---|---|---|
| Restore gmvforge.com DNS after domain drop | Completed | A @ 216.198.79.1, CNAME www → Vercel; site live |
| 301 anologe.com + www → same path on gmvforge.com | Completed | PR #27 + commits ff405cc, a77a1a2; verified 1-hop 301 (hackertarget headers) |
| Redirect legacy anologe URLs (/portfolio, /privacy-policy, /about-us, /terms-conditions) | Completed | Commits 2026-10-08; verified final URLs |
| Keep anologe.com registered | Completed | Namecheap: active to 2027-05-04 |
| info@gmvforge.com receives mail | Completed | Namecheap forward info@ → info@anologe.com; MX eforward verified |
| info@gmvforge.com sendable mailbox (Private Email) | Blocked | No gmvforge.com plan in Namecheap; needs purchase approval ($14.88/yr Launch) |

## Search Console / analytics
| Task | Status | Evidence / notes |
|---|---|---|
| Verify gmvforge.com + anologe.com Domain properties | Completed | Both verified (TXT on anologe.com) |
| File Change of Address | Completed | Filed 2026-10-07, "site is moving" |
| Resubmit sitemap | Completed | 2026-10-07, Success, 27 URLs |
| Request indexing (15 priority URLs) | Completed | Requested 2026-10-07 |
| Re-check indexing of requested URLs | Pending | Due ~2026-10-15 (baseline: 2 indexed) |
| GA4 lead + booking tracking | Completed | thank-you.html: generate_lead, book_call |
| Mark GA4 key events | Blocked | GA4 allows starring only after first event fires |
| Activate FormSubmit / test lead form | Blocked | Needs test submission + activation click in info@anologe.com (your approval) |

## Brand / entity
| Task | Status | Evidence / notes |
|---|---|---|
| LinkedIn company → GMV Forge (/company/gmvforge) | Completed | Name, logo, desc, website, specialties saved |
| Clutch → GMV Forge | Completed | Name, website, desc, logo, sales email info@gmvforge.com |
| Sortlist → GMV Forge | Completed | Name, logo, desc, website, LinkedIn, Kaiserstraße 103; email field did not save |
| Upwork | Completed (skipped) | User instruction: do not touch |
| Google Business Profile rename appeal | Blocked | User decided to drop (only one appeal allowed, no business doc) |

## Website (all deployed via PRs)
| Task | Status | Evidence / notes |
|---|---|---|
| Schema @id graph, sameAs fix, remove self-serving Review | Completed | PR #28 |
| Sitemap cleanup + real lastmod | Completed | PR #28/#29 |
| /case-studies hub, case study summaries/methodology | Completed | PR #28 |
| Contextual internal links | Completed | PR #28/#29 |
| Germany page + guide rewrite | Completed | PR #29 |
| 4 service pages expanded with website prices | Completed | PR #29 |
| Pricing, Europe, GMV Max troubleshooting, fee calculator pages | Completed | PR #29 |
| German pages /de/tiktok-shop-agentur, /de/tiktok-shop-deutschland | Completed | PR #29, hreflang en/de |
| About expansion, legal notice "trading as GMV Forge", phone +49 157 59629536 | Completed | PR #29 |
| Production check | Completed | 27 sitemap URLs 200, canonicals OK, JSON-LD valid (2026-10-07) |

## Growth phase (2026-10-08 brief)
| Task | Status | Evidence / notes |
|---|---|---|
| GSC indexation/migration report | Completed | Growth Workbook › Migration & Indexing |
| Keyword/SERP research (15 queries EN/DE) | Completed | Workbook › SERP Research |
| Competitor gap analysis (10) | Completed | Workbook › Competitors |
| PR/backlink prospects + drafts | Completed | Workbook › PR Prospects (17), Outreach Drafts (4) |
| Send outreach | Blocked | Needs your approval (sent under your name) |
| Review acquisition workflow | Completed | Workbook › Reviews Workflow |
| Linkable asset plan | Completed | Workbook › Linkable Assets |
| AI visibility tests | In Progress | 6 run (0 mentions); ChatGPT/Gemini/Perplexity need login |
| CRO audit | Completed | Workbook › CRO |
| Growth dashboard | Completed | GMV_Forge_Growth_Workbook.xlsx › Dashboard |
| TikTok Shop Partner Center application | Blocked | Needs your account at partner.tiktokshop.com |
| German pricing page (/de/tiktok-shop-agentur-kosten) | Completed | Commit dae67a6; live 200, canonical OK; indexing requested 2026-10-10 |
| German fee calculator (/de/tiktok-shop-gebuehren-rechner) | Completed | Commit dae67a6; live 200, canonical OK; indexing requested 2026-10-10 |
| Germany seller checklist | Completed | Commits dae67a6 (DE) + 3e3df12 (EN guide); live |
| Cross-links, sitemap (29 URLs), llms.txt for new DE pages | Completed | Commit 3e3df12; live sitemap = 29 URLs; resubmitted in GSC 2026-10-10 (Success) |
| Sortlist profile completeness (41%) | Blocked | Remaining sections (portfolio, team members, client logos) need real assets/details from you: portfolio images + client names you may publish, team member names/photos |
| Ahrefs/Semrush data | Blocked | Connector needs authorization |

## Deploy log
- 2026-10-10: dae67a6 + 3e3df12 pushed to main (GitHub web upload); Vercel auto-deployed; verified live via fetch.

## Connections (2026-10-10)
- Vercel: MCP returns 403 for team scope muhammad-hammads-projects-ac1047dd (re-auth needed to read deployments). Deploys still work via Git integration.
- GitHub: connector fails ("Authorization header is badly formatted"); commits done via GitHub web upload in browser.

## Next
- 2026-10-15: re-check indexing (GSC) for requested URLs.
- Your actions: FormSubmit test/activation; Private Email purchase decision; outreach approval; Partner Center application; Sortlist assets.
