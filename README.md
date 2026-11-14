# Mark Ouwerkerk

Persoonlijke Nederlandstalige website, gebouwd met Astro. Volledig statische output, zonder tracking of externe fonts. Alleen de contactpagina gebruikt een klein script voor formulierfeedback; zonder JavaScript werkt de gewone Web3Forms-verzending.

## Lokaal ontwikkelen

```sh
npm install
npm run dev
```

## Productie

```sh
npm run build
npm run preview
```

Publiceer de inhoud van `dist/` bij een statische webhost. Een serverruntime is niet nodig.

## Aanpassen

- `src/data/cv.ts`: persoonlijke gegevens, navigatie en alle cv-inhoud.
- `src/pages/index.astro`: paginaopbouw en introductieteksten.
- `src/components/`: herbruikbare navigatie en sectiekoppen.
- `src/styles/global.css`: kleuren, typografie en responsive indeling.
- `public/favicon.svg`: favicon.

Het originele cv staat in `public/CV_Mark_Ouwerkerk.pdf` en is te downloaden via de knop bovenaan de CV-sectie. Vervang dit bestand om de download bij te werken.

## Cloudflare Workers Static Assets

Repository: `coffeecup-online/mark.ouwerkerk.com`.
Astro bouwt uitsluitend statische bestanden naar `dist/`. `wrangler.jsonc` wijst die map aan als Static Assets. Er is geen Worker-entrypoint of Cloudflare-adapter nodig.

Stel in het Cloudflare-dashboard in:

| Instelling | Commando |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` |

Wrangler is een development dependency en wordt via `package-lock.json` vastgelegd. Installeer bij builds ook development dependencies (`npm ci`).

Validatie zonder te publiceren:

```sh
npm run build
npx wrangler deploy --dry-run
npx wrangler preview --help
```

`wrangler preview` maakt een preview-deployment op Cloudflare; het is geen lokale server. Voor lokaal ontwikkelen gebruik je `npm run dev`, voor de gebouwde Astro-site `npm run preview`, of voor de lokale Workers-omgeving `npx wrangler dev` na een build. Voer `wrangler deploy` en `wrangler preview` alleen uit wanneer je daadwerkelijk wilt publiceren.


## Contactformulier

`src/pages/contact.astro` bevat het Web3Forms-formulier, de publieke access key en de Nederlandse verzendmeldingen. Naam, e-mailadres en bericht zijn verplicht. De formulierdata wordt pas bij verzenden naar Web3Forms gestuurd. Bij een fout blijven de ingevulde velden behouden. De gewone HTML POST dient als fallback zonder JavaScript.

De lokale controles versturen geen echte testberichten; de ontvangst bij het gekoppelde Web3Forms-account moet apart worden gecontroleerd.

