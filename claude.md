# Hankattforeningen Nettsted – Claude Agent Instruksjoner

## Prosjektoversikt
Dette er et statisk nettsted for Hankattforeningen st.1902, en lukket studentforening på NMBU. Nettstedet er bygget i ren HTML/CSS uten rammeverk eller byggverktøy, og skal deployes som statiske filer til Netlify eller Cloudflare Pages.

## Visuell Stil og Tone
- **Tone**: Ironisk-elevated, arkaisk, mørk og "dreamcult-aktig"
- **Fargepalett**: Rød (#A41818), papir (#F2E9D0), blekk (#0F0E0C), gull (#A88A2E)
- **Typografi**: UnifrakturMaguntia, IM Fell English, IM Fell English SC, Cormorant Garamond, Special Elite
- **Arkaisk staveform**: Kultur med stor K – dette er bevisst, ikke skrivefeil
- **Layout**: Stripemønster, mørke og lyse seksjoner, responsiv design

## Filstruktur
- `index.html` – Forside med hero, om oss, lenker til undersider
- `hankatter.html` – Medlemsoversikt gruppert i hierarki
- `hierarki.html` – Det opplyste enevelde
- `nach-pa-loftet.html` – Nach på loftet?
- `treenighet.html` – Den Kulturelle Treenighet
- `kontakt.html` – Adresse, e-post, om å bli Aspirant
- `css/style.css` – Felles styling
- `images/` – Bilder (logo: Tigeren-logo.png)
- `README.md` – Instruksjoner for kjøring/deploy

## Hierarki og Titler
(Slik det står på hankatter.html)
### Administrerende Direktør
- Administrerende Direktør: Halfdan H. Setvik

### Høyere Embetsmenn
- Justitiarius: Peder Flaat
- Chef d'Hazard: Markus Rasch

### Embetsmenn
- Qulturattaché: Halvor G. Bolkesjø

### Lavere Embetsmenn
- Osteopat: Trygve B. Refsnes
- Maestre de Paletto: Herman Engh
- Kapellmester: Jørg W. Haaland
- Teknisk Disponent: Daniel Arno Olsen

### Aspiranter
- Hovedkasserer: Andreas Slåttholm
- Bartender: Finhas W. Gaim
- Flaggelat: Sondre Aasenhuus
- Lys & Cloac: Leander Nærum
- Materialforvalter: Albert Bøttinger

### Aspirerende Aspiranter
- Ikke vist på hankatter.html foreløpig

## Oppgaver for Videre Utvikling
1. **Bilder**: Erstatt [Portrett] og [Foto] placeholders med faktiske bilder i `images/`
2. **Tekstinnhold**: Fyll inn [Navn] placeholders med riktige navn
3. **E-post**: Legg inn korrekt e-postadresse i kontakt.html
4. **Responsivitet**: Test og finjuster mobilvisning
5. **SEO**: Legg til meta-beskrivelser, alt-tekst på bilder
6. **Tilgjengelighet**: Sørg for god kontrast og navigasjon
7. **Deploy**: Test deploy til Netlify/Cloudflare Pages

## Tekniske Krav
- Semantisk HTML, lang="nb"
- Mobil-responsiv
- Ingen JavaScript nødvendig (statisk)
- Behold visuelt uttrykk fra mockup
- Felles header/footer på alle sider

## Arbeidsflyt
- Rediger filer direkte i VS Code
- Test lokalt ved å åpne index.html i nettleser
- For lokal server: `python3 -m http.server 8000`
- Commit endringer til git
- Deploy via Netlify/Cloudflare Pages

## Notater
- Bevar den arkaiske tonen i all tekst
- Hierarkiet er strengt: AD > Høyere Embetsmenn > Embetsmenn > Lavere Embetsmenn > Aspiranter > Aspirerende Aspiranter
- Foreningen har 13 medlemmer totalt (AD + 2 høyere + 1 embetsmann + 4 lavere + 5 aspiranter), pluss aspirerende aspiranter