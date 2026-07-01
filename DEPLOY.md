# Deploying the Locavore NXT CMS (Sanity Studio)

**Live Studio:** https://admin.locavorenxt.com
**Vercel project:** `locavore-nxt/locavore-cms`

## ⚠️ Read this first

Do **not** rely on Git push / Vercel's normal build to ship schema changes.
Two things are broken for this project:

1. **Git auto-deploy is disconnected** in Vercel (the `tomostudio/locavore-cms`
   repo is owned by another org; we don't have admin to reconnect it).
2. **Vercel's Sanity framework build is broken for this project.** Running the
   build on Vercel (`vercel build`, whether remote or local) silently **drops
   the newest schema types** from the compiled bundle — e.g. the `imageGallery`
   block never appeared even though it was in the source. A build produced this
   way comes out byte-identical to a months-old bundle.
   A **direct `sanity build`** compiles the schema correctly.

So we deploy a **prebuilt** bundle: build locally with `sanity build`, package it
into Vercel's Build Output format, and upload it with `--prebuilt` so Vercel
never runs its broken build step.

## Deploy steps

Run from the repo root. Requires the Vercel CLI logged in with access to the
`locavore-nxt` team (`npx vercel@latest login`). The project is already linked
via `.vercel/` — if not, run `npx vercel@latest link --scope locavore-nxt --project locavore-cms`.

```bash
# 1. Build the studio locally (this compiles the schema CORRECTLY).
rm -rf public && ./node_modules/.bin/sanity build public -y

# 2. Package the build into Vercel Build Output (v3) format.
rm -rf .vercel/output && mkdir -p .vercel/output/static
cp -R public/. .vercel/output/static/
printf '%s\n' '{ "version": 3, "routes": [ { "handle": "filesystem" }, { "src": "/.*", "dest": "/index.html" } ] }' > .vercel/output/config.json

# 3. Deploy the prebuilt output straight to production (NO rebuild on Vercel).
npx vercel@latest deploy --prebuilt --prod --scope locavore-nxt
```

Notes:
- If `sanity build` fails a yarn engine check on newer Node, prefix step 1 with
  `YARN_IGNORE_ENGINES=true` (the repo pins `engines.node` to `20.x`, but the
  studio builds fine on Node 22 too — the pin exists for Vercel, see below).
- To sanity-check before going live, do step 3 without `--prod` to get a preview
  URL, then promote by re-running with `--prod`.

## Verify the deploy actually shipped your change

Because `app.bundle.js` is **not** content-hashed, always verify the live domain
serves the new bundle (and hard-refresh the Studio with Cmd+Shift+R afterwards):

```bash
# Replace <newString> with something unique from your change, e.g. a schema
# `name` or a title string. Expect a non-zero count.
curl -s https://admin.locavorenxt.com/static/js/app.bundle.js | grep -c "<newString>"
```

A correct build is ~10.06 MB. The known-bad (Vercel-built) bundle is ~10.6 MB and
has md5 `6cbc0d2e2bb433635cd5292f802a0be3` — if you ever see that hash live, the
broken Vercel build slipped back in.

## Node version

Vercel is pinned to **Node 20.x** (dashboard setting + `engines.node` in
`package.json` + `.nvmrc`). Node 18 was discontinued by Vercel and caused instant
build failures. Vercel warns that Node 20 is deprecated after 2026-10-01 — when
that lands, bump the pin (and re-test the prebuilt flow).

## Proper long-term fixes (not required for a normal deploy)

- **Kill the broken build path:** either migrate this Studio to Sanity v3/v4 with
  current Vercel tooling, or host it via `sanity deploy` (`*.sanity.studio`)
  instead of Vercel. Either removes the broken framework preset and lets normal
  deploys work again.
- **Regain Git access:** get admin on `tomostudio/locavore-cms` (or fork it) so
  Vercel's Git integration can be reconnected and auto-deploys restored.
