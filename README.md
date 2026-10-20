# Hankattforeningen st.1902

Dette er et statisk nettsted for Hankattforeningen, bygget i ren HTML/CSS uten rammeverk og uten byggverktøy.

## Oppsett lokalt

1. Åpne `index.html` i nettleseren.
2. Alternativt kan du bruke en enkel lokal server i mappen:

```bash
cd /Users/halvor/Dev/Nettside\ HKF
python3 -m http.server 8000
```

Deretter kan du åpne `http://localhost:8000`.

## Filstruktur

- `index.html` – forside
- `hankatter.html` – medlemsoversikt
- `hierarki.html` – struktur og hierarki
- `nach-pa-loftet.html` – nach på loftet
- `treenighet.html` – Den Kulturelle Treenighet
- `kontakt.html` – kontaktinformasjon
- `revyarkivet.html` – revyer med Kulturelle år, kommentarer og presseomtaler
- `css/revyarkivet.css` – styling for revyarkivet
- `css/style.css` – felles styling
- `images/` – bildeplassering for senere innhold

## Deploy

Last opp alle filene og mappene som statiske filer til Netlify eller Cloudflare Pages. Ingen byggsteg kreves.

## Vedlikehold av revyarkivet

Revyarkivet er vanlig HTML med revyene sortert fra nyeste til eldste.
Rediger oppføringene i `revyarkivet.html`.
De første 27 oppføringene er overført fra `revyoversikt_1970_1999.xlsx`.
Til tross for filnavnet inneholder arket **70.–98. Kulturelle år**, ikke kalenderår
1970–1999. Det er ingen oppføringer for 76. og 77. Kulturelle år i arket.
Endringer i Excel-filen overføres ikke automatisk til nettsiden.

Arkivet er også supplert med «Tilbake til Cirkus» (123. Kulturelle år) og
«Hvite gutter, svart humor» (115. Kulturelle år), med tilhørende plakater.
Sistnevnte ble fremført i februar 2018, som ligger mellom 1. mai 2017 og
30. april 2018 og dermed tilhører det 115. Kulturelle år.

For å legge til en revy, kopier en `article.revue-entry` til riktig periode,
med nyeste revy først. Oppdater året, tittelen, `id`, `aria-labelledby` og
direktelenken. Opprett en ny periodeseksjon og en lenke øverst hvis nødvendig.
Oppdater også oversiktens totalantall, årsintervall og periodens antall revyer.

Bilde, kommentar og presseomtale er valgfrie. En oppføring kan for eksempel være:

```html
<article class="revue-entry" id="revy-124" aria-labelledby="revy-tittel-124">
  <!-- Utelat hele figure-elementet når bilde ikke finnes. -->
  <figure class="revue-image">
    <img src="images/revyplakat.jpg" alt="Beskrivelse av revyplakaten" loading="lazy">
    <figcaption>Bildetekst og eventuell fotograf.</figcaption>
  </figure>
  <div class="revue-entry-heading">
    <p class="revue-year"><span>124.</span> Kulturelle år</p>
    <a class="revue-permalink" href="#revy-124" aria-label="Direktelenke til Revytittel">§</a>
  </div>
  <h3 id="revy-tittel-124">Revytittel</h3>
  <p class="revue-comment">Kommentar eller minner fra forestillingen.</p>
  <details class="revue-press">
    <summary>Presseomtale</summary>
    <blockquote><p>Omtale, med avisnavn og dato når dette er kjent.</p></blockquote>
  </details>
</article>
```

Presseomtalen kan også inneholde lenker til avisartikler eller innskannede utklipp.
Utelat `details` hvis ingen presseomtale finnes. Det er ikke nødvendig med et
plassholderbilde for revyer uten bilder.
