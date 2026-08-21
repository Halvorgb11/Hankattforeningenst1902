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
- `css/style.css` – felles styling
- `images/` – bildeplassering for senere innhold

## Deploy

Last opp alle filene og mappene som statiske filer til Netlify eller Cloudflare Pages. Ingen byggsteg kreves.
