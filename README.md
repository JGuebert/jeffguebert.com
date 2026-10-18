# jeffguebert.com

Personal landing page for [jeffguebert.com](https://jeffguebert.com)

## Deployment

The site is a static-assets-only [Cloudflare Worker](https://developers.cloudflare.com/workers/static-assets/) (no Worker script, no build step), configured in `wrangler.jsonc`.

- Everything served publicly lives in `public/`. Files outside it (this README, `wrangler.jsonc`) are never deployed.
- Security and caching headers are set in `public/_headers`. Scripts and styles must be external files; the Content Security Policy blocks inline `<script>`, `<style>` and `style=""`.
- [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) deploys to production on every push to `master`. Other branches and pull requests get a preview URL.
- Preview locally with `npx wrangler dev`.

## Font

[Plus Jakarta Sans](https://github.com/tokotype/PlusJakartaSans)

## License

Site design and content © Jeff Guebert. Font licensed under the [SIL Open Font License 1.1](https://openfontlicense.org).
