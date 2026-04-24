# Vorsorgehafen Design System

## Company Overview

**Vorsorgehafen** ist eine moderne, vertrauenswürdige Vorsorgemarke, die finanzielle Komplexität in klare, ruhige und nachvollziehbare Entscheidungen übersetzt.

Der Name ist programmatisch: **Vorsorge** (Altersvorsorge, Absicherung, Planung) + **Hafen** (Schutz, Ruhe, Ziel) = ein sicherer Hafen in einem unübersichtlichen Feld. Kein Finanzvertrieb — sondern Orientierung.

### Fünf Markendimensionen

1. **Markenkern** — Sicherheit, Klarheit, langfristige Orientierung
2. **Markenwirkung** — Beruhigend statt drängend · Kompetent statt laut · Persönlich statt kalt · Modern statt altbacken

### Produkte / Surfaces

- **Web-App** — Vorsorge-Dashboard und Beratungsflow (primäre digitale Oberfläche)
- **Marketing-Website** — Landingpage und Erklärseiten (nicht im Scope dieses Design Systems, aber visuell konsistent)

### Quellen

> Dieses Design System wurde ohne externe Codebase oder Figma-Link aufgebaut. Es basiert ausschließlich auf dem bereitgestellten Brand-Briefing. Wenn Figma-Links oder Codebasis-Zugang verfügbar werden, sollte das System entsprechend überarbeitet werden.

---

## CONTENT FUNDAMENTALS

### Sprache & Ton

- **Sprache**: Deutsch (primär). Kein Denglisch, kein Finance-Slang.
- **Anrede**: Du-Form — persönlich, auf Augenhöhe, nicht distanziert.
- **Tonalität**: Ruhig, klar, kompetent. Nie drängend, nie verkäuferisch.
- **Casing**: Satzcase für Headlines (erstes Wort groß, Rest klein — außer Substantive). Keine Allcaps.
- **Emoji**: Keine Emoji in der primären UI. Maximal sparsam in informellen Kontexten.
- **Satzlänge**: Kurz und klar. Komplexe Sachverhalte werden aufgebrochen, nicht versteckt.
- **Zahlen**: Immer konkret. „Spare 280 € pro Monat" > „spare mehr".
- **Verben statt Substantive**: „Plane deine Zukunft" > „Zukunftsplanung".

### Beispiele

| ❌ Vermeide | ✓ Verwende |
|---|---|
| „Optimieren Sie Ihr Portfolio" | „Dein Geld, klar angelegt" |
| „Finanzielle Absicherung für die Zukunft" | „Weißt du, wie viel du im Ruhestand brauchst?" |
| „Jetzt registrieren!" | „Starte deinen Plan" |
| „Komplexe Altersvorsorgelösungen" | „Schritt für Schritt zur richtigen Vorsorge" |

### Struktur von Headlines

- Empathisch → konkret → handlungsorientiert
- Fragen als Headlines funktionieren gut (erzeugen Reflexion, nicht Druck)
- Keine Ausrufezeichen in der primären Kommunikation

---

## VISUAL FOUNDATIONS

### Farben

**Primärpalette (Hafen-Blau-Familie)**
- `--color-tiefblau`: `#1B3150` — Ankerpunkt, dunkelste Markenfarbe; Haupt-CTA, starke Überschriften
- `--color-hafenblau`: `#2C5282` — Primärblau; Links, aktive States, Icons
- `--color-himmel`: `#5A89B8` — Mittleres Blau; sekundäre Buttons, Highlights
- `--color-watt`: `#D6E4F0` — Helles Blau; Badges, Chips, ruhige Hintergründe

**Akzent (Leuchtfeuer)**
- `--color-leuchtfeuer`: `#C0873A` — Warmes Amber; sparsam als Guidance-Farbe, nie dominant
- `--color-leuchtfeuer-hell`: `#F2DEB0` — Helles Amber; Tint für Hinweis-Boxen

**Neutrals**
- `--color-nebel`: `#F6F8FB` — Seitenhintergrund
- `--color-sand`: `#F0ECE4` — Warme Alternative zu Weiß; Card-Backgrounds im warmen Kontext
- `--color-fg1`: `#1A2535` — Haupttext
- `--color-fg2`: `#4A5568` — Sekundärtext, Captions
- `--color-fg3`: `#8A96A3` — Placeholder, Disabled
- `--color-border`: `#D1DCE8` — Subtile Linien

**Semantisch**
- `--color-success`: `#2F855A`
- `--color-warning`: `#C0873A` (= Leuchtfeuer)
- `--color-error`: `#C53030`
- `--color-info`: `--color-hafenblau`

### Typografie

**Display / Headlines**: Cormorant Garamond — elegantes Classicist-Serif. Wirkt etabliert, klug, ruhig. Nie dekorativ einsetzen — nur für echte Headlines.

**Body / UI**: DM Sans — humanistisches Grotesk. Klar, modern, sehr gut lesbar auch in kleinen Größen. Standardschrift für alles, was kein Titel ist.

**Zahlen / Mono**: DM Mono — für Geldbeträge, Prozentsätze, technische Werte.

Substitutionen (Google Fonts): Cormorant Garamond → exakter Match auf GF. DM Sans → exakter Match auf GF. Kein Ersatz nötig.

### Abstände & Raster

- Basis-Einheit: `4px`
- Raster: 8-Punkt-System (xs=4, sm=8, md=16, lg=24, xl=32, 2xl=48, 3xl=64, 4xl=96)
- Seitenrand: 24px mobil, 48px desktop, max-width 1200px
- Card-Padding: 24px (md–lg)

### Ecken (Border Radius)

- Buttons, Chips: `8px`
- Cards, Inputs: `12px`
- Modals, Panels: `16px`
- Pillen / Tags: `999px`
- Keine vollrunden Buttons (kein `border-radius: 50%` auf rechteckigen Elementen)

### Schatten (Elevation)

- `shadow-sm`: `0 1px 3px rgba(27,49,80,0.08)` — Cards im Ruhezustand
- `shadow-md`: `0 4px 16px rgba(27,49,80,0.10)` — Hover-State von Cards, Dropdowns
- `shadow-lg`: `0 8px 32px rgba(27,49,80,0.14)` — Modals, Floating Panels
- Schatten sind immer auf der Markenfarbe basiert (blau-getönt, nie neutral schwarz)

### Hintergründe & Texturen

- Haupthintergrund: `--color-nebel` (#F6F8FB) — sehr leichtes Blaugrau
- Karten: Weiß (`#FFFFFF`) auf Nebelgrund; oder `--color-sand` für wärmere Sektionen
- **Keine** aggressiven Gradienten — allenfalls sehr subtile radiale Verläufe (`tiefblau → hafenblau`) für Hero-Bereiche
- **Keine** Vollbild-Hintergrundbilder in der App
- Marketing-Bereich: kann mit einem dezenten navy-Gradient-Hero arbeiten

### Animationen

- **Easing**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out) — beruhigend, nicht springend
- **Dauer**: 200ms für Micro-Interactions (Hover, Toggle); 350ms für Panel-Übergänge; 500ms für Seitenübergänge
- **Kein Bounce** — passt nicht zur Marke
- **Fade + translate(0, 4px)** als Standardmuster für eingehende Elemente
- Keine überwältigenden Animationen; weniger ist mehr

### Hover / Press States

- Buttons: Hintergrundfarbe leicht dunkler (`tiefblau` auf `hafenblau`-Button); kein Schatten-Sprung
- Cards: `shadow-sm` → `shadow-md`; keine Farb- oder Größenänderung
- Links: Unterstreichung erscheint; Farbe bleibt gleich
- Press: leichtes `scale(0.98)` auf interaktiven Elementen

### Iconografie

Lucide Icons (Stroke-Style, 1.5px stroke, rounded linecaps) — passen perfekt zur Modernität von DM Sans. Keine gefüllten Icons. Keine Emoji als Icons.

### Bilder & Illustration

- Fotografie: Ruhige, warmtonige Lifestyle-Bilder (Natur, Familie, Hafen-Atmosphäre). Kein Stock-Look.
- Illustration: Wenn eingesetzt, dann als klare Line-Illustration (nicht Cartoon, nicht verspielt). Tinte/Linien in `tiefblau` oder `hafenblau`.
- Grain/Textur: minimal bis keine
- Keine KI-Bilder als primäre Marken-Bildsprache

---

## ICONOGRAPHY

- **Icon-Set**: Lucide Icons (CDN: `https://unpkg.com/lucide@latest`)
- **Stil**: Outline/Stroke, 1.5px, rounded — modern, klar, nicht verspielt
- **Größen**: 16px (inline), 20px (Standard-UI), 24px (Feature-Icons), 32px (Hero-Contexts)
- **Farbe**: Immer `currentColor` — erbt von Elternkontext
- **Emoji**: Keine
- **Unicode-Icons**: Keine
- **SVG**: Lucide als JS-Library oder direkte SVG-Einbettung; kein Icon-Font

---

## DATEI-INDEX

```
README.md                     — Dieses Dokument
SKILL.md                      — Agent Skill Definition
colors_and_type.css           — CSS Custom Properties (Farben, Typo, Spacing, Radius, Shadow)
assets/
  logo.svg                    — Vorsorgehafen Wortmarke (Placeholder-SVG)
  logo-icon.svg               — Vorsorgehafen Zeichen / Hafen-Icon
fonts/                        — (leer; Google Fonts werden per CDN geladen)
preview/
  colors-primary.html         — Primärfarben-Swatches
  colors-neutral.html         — Neutral-Palette
  colors-semantic.html        — Semantische Farben
  type-display.html           — Display-Typografie (Cormorant Garamond)
  type-body.html              — Body-Typografie (DM Sans)
  type-scale.html             — Typografie-Skala
  spacing.html                — Spacing-Tokens
  radius-shadow.html          — Border-Radius & Schatten
  buttons.html                — Button-Varianten
  inputs.html                 — Form-Inputs
  cards.html                  — Card-Komponenten
  badges.html                 — Badges & Chips
  logo-brand.html             — Logo & Brand-Mark
ui_kits/
  webapp/
    README.md                 — UI Kit Dokumentation
    index.html                — Interaktives App-Prototype
    Components.jsx            — Kern-Komponenten
    Dashboard.jsx             — Dashboard-Screen
    Onboarding.jsx            — Onboarding-Flow
```
