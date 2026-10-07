# TurkeyNet — History of the Internet in Turkey

CM1040 Web Development Coursework — University of London

A website about the history of the internet in Turkey during my lifetime (2001–present).

## Pages

- **Home** — Overview and key facts
- **Early Internet** — Turkey's first connection (1993) to ADSL broadband (2001)
- **Mobile Era** — 3G launch (2009) to 4.5G revolution (2016)
- **Censorship** — YouTube bans, Wikipedia block, social media laws

## How It Works

Content on each page is loaded dynamically from JSON data files using a custom JavaScript template engine built from scratch (no external libraries). Data is validated before rendering.

## File Structure

Project/
├── index.html
├── early-int.html
├── mobile-era.html
├── censorship.html
├── css/style.css
├── js/
│ ├── template-engine.js
│ └── validators.js
└── data/
├── timeline.json
├── mobile.json
└── censorship.json


## Running Locally

Open with VS Code Live Server — required because the template engine fetches JSON via HTTP.

## Sources

Wikipedia, Freedom House, Statista, Reuters
