---
layout: page
title: PinGo
description: Eine Location-Based App zum Erkunden
img: assets/img/projects/dev-202305_pingo/dev-202305_pingo_thumbnail_v1.png
importance: 3
category: dev
images:
  slider: true
---

<div class="header-pic">
    {% include figure.liquid loading="eager" path="assets/img/projects/dev-202305_pingo/202305_pingo-header.png" %}
</div>

---
### Kurzbeschreibung
Im Rahmen der `Extreme Programming Week` im zweiten Semester der Masterklasse Mobile wurde die plattformübergreifende App "PinGo" entwickelt.
Die Extreme Programming Week ist ein intensives Softwareentwicklungsformat, das auf agilen Methoden basiert. Innerhalb einer Woche wird
ein funktionsfähiger Prototyp entwickelt, wobei der Fokus auf kollaborativer Arbeit, schneller Iteration und kontinuierlichem Feedback liegt.

PinGo ist eine `geobasierte Plattform`, die Nutzer:innen ihre Umgebung auf spielerische und informative Weise näherbringt. Mithilfe eines
Location-Based Systems (LBS) bietet die App eine interaktive Karte, auf der verschiedene „Geostops“ erkundet werden können – von verborgenen
Naturjuwelen über kulturelle Highlights bis hin zu historischen Sehenswürdigkeiten.

Das Hauptziel von PinGo ist es, Neugier und Entdeckungsfreude zu fördern. Egal ob Einheimische neue Orte in ihrer Stadt entdecken oder Reisende
auf der Suche nach ihrem nächsten Abenteuer sind – PinGo dient als interaktiver Reisebegleiter. Neben detaillierten Informationen, Fotos und
Bewertungen ermöglicht die App das Teilen und Erleben von Geschichten hinter den Orten.

Die App wurde zunächst mit `Ionic` und `Vue.js` entwickelt, jedoch später aufgrund technischer Herausforderungen auf Angular, `NestJS` und Ionic umgestellt.
Zudem wurde eine CI/CD-Pipeline mit GitLab und Docker-Containern für eine effiziente Entwicklung und Bereitstellung implementiert. In einer späteren
Phase kamen `automatisierte Tests` (Unit-Tests, e2e-Tests mit Cypress) hinzu, um die wichtigsten Use-Cases zu sichern.

---
### Technologien
<i title="Vue.js" class="techstack fa-brands fa-vuejs"></i>
<i title="Github" class="techstack fa-brands fa-github"></i>
**Ionic**
**Cypress**

---
### Aufgaben & Learnings
- **Frontend-Entwicklung mit Vue.js**: Implementierung von UI-Komponenten und Benutzerinteraktionen
- **Erstellung von Wireframes & Mockups**: Nutzung von Adobe XD zur visuellen Planung der Benutzeroberfläche
- **Design der User-Interfaces & Corporate Identity**: Entwicklung eines konsistenten UI-Designs gemäß CI-Richtlinien
- **Testautomatisierung mit Cypress**: Erstellung von End-to-End-Tests (e2e) und Unit-Tests zur Sicherstellung der Funktionalität 

---
### Screenshots
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/dev-202305_pingo/202305_pingo-screenshot_01.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/dev-202305_pingo/202305_pingo-screenshot_02.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/dev-202305_pingo/202305_pingo-screenshot_03.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

---
### Referenzen
- <a href="https://github.com/fhstpoelten-avr21/pingo_backend">Projekt Repo für das PinGo Backend [GitHub]</a>
- <a href="https://github.com/fhstpoelten-avr21/pingo_frontend">Projekt Repo für das PinGo Frontend [GitHub]</a>
- <a href="https://mfg.fhstp.ac.at/development/cypress-testing-mit-pingo/">Blog-Beitrag über Testing für PinGo [Mobile Forschungsgruppe FH St. Pölten]</a>
- <a href="https://mfg.fhstp.ac.at/development/pingo-oder-die-einwoechige-entstehung-eines-location-based-service/">Blog-Beitrag über die Entwicklung von PinGo #1 [Mobile Forschungsgruppe FH St. Pölten]</a>
- <a href="https://mfg.fhstp.ac.at/allgemein/rueckblick-unsere-reise-mit-pingo-und-die-herausforderungen-von-ionic-vue/">Blog-Beitrag über die Entwicklung von PinGo #2 [Mobile Forschungsgruppe FH St. Pölten]</a>
