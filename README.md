# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Converting Buttondown to Archives

1. Export the newsletter to HTML.
2. Convert the [HTML to Markdown](https://codebeautify.org/html-to-markdown).
3. Create the archive folder in [content/newsletter](content/newsletter).
4. Create an `index.md` file in the archive folder, and populate the `title` and `published_at` front matter. Optionally, you can also include lede copy.
5. Section by section, create a numbered partial, where the name of the file corresponds to its position in the newsletter and the name corresponds to [slugged title](https://slugify.online/). (e.g, `_1.the-title-of-a-section.md`). Each partial should contain a `title` front matter. _Note: front matter YAML is sensitive to colons, quotes, etc., so using [smart quotes](https://smartquotesforsmartpeople.com/) in section titles is recommended._
