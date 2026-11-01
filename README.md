# Kevin Thibodeaux — Portfolio

Personal portfolio built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), exported as a static site and hosted on GitHub Pages.

## Projects on the site

- **Word Guess** — a six-letter word game built with React hooks (`pages/word-guess.js`, `components/WordTiles.js`). Guess scoring is a pure, tested function in `lib/scoreGuess.js`.
- **Nonbank Mortgage Lending Map** — write-up of an interactive D3.js map built for the Brookings Institution.
- **MyCalendar** — event tracker built with React, Firebase and the Ticketmaster API ([source](https://github.com/kthib16/react-calendar-app)).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Tests

```bash
npm test
```

The scoring rules for Word Guess live in `lib/scoreGuess.js` and are unit tested, including repeated-letter cases.

## Build and deploy

```bash
npm run build    # static site in ./out
```

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it with GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions**.

The export assumes the site is served from the root of a domain (for example `kthib16.github.io`), so no `basePath` is configured.
