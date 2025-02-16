---
layout: page
title: flimmerkiste
description: Alle öffentlich-rechtlichen Mediatheken in einer App
img: assets/img/projects/dev-202301_flimmerkiste/dev_flimmerkiste-thumbnail_v1.png
importance: 5
category: dev
images:
slider: true
---

<div class="header-pic">
    {% include figure.liquid loading="eager" path="assets/img/projects/dev-202301_flimmerkiste/202301_flimmerkiste-header.png" %}
</div>

---
### Kurzbeschreibung
Im Rahmen des Semesterprojekts im 1. Semester der Masterklasse Mobile wurde die Android-App flimmerkiste entwickelt. 
Sie bietet eine zentrale Plattform, um die `Mediatheken` deutschsprachiger öffentlich-rechtlicher Sender zu durchsuchen
und Videos direkt abzuspielen – ohne zwischen verschiedenen Apps wechseln zu müssen.

Die App wurde mit `Flutter` entwickelt, um eine plattfomübergreifende Lösung zu ermöglichen. Die Benutzerverwaltung 
erfolgt über `Google Firebase`, während die Mediathek-Daten per API-Abfrage von `MediathekView` geladen werden.

Der Kern von flimmerkiste ist der integrierte Video-Player, der Sendungen in MP4- und HLS-Streams abspielt. 

---
### Technologien
<i title="Flutter" class="techstack fa-brands fa-flutter"></i>
<i title="Github" class="techstack fa-brands fa-github"></i>
<i title="Figma" class="techstack fa-brands fa-figma"></i>

---
### Aufgaben & Learnings
- Einarbeitung in Flutter und Cross-Platform-Entwicklung: Grundlagen von Flutter und Programmiersprache Dart erlernt, 
erste Erfahrungen mit State-Management gesammelt (<i class="fa-solid fa-plus"></i>)
- Erstellung von Mockups und UI-Design für die App mit Figma
- Unterstützung bei der Integration der Mediathek API und Anbindung an das Backend (<i class="fa-solid fa-plus"></i>)
- Implementierung und Handling des Videoplayers für verschiedene Plattformen (<i class="fa-solid fa-plus"></i>)
- Durchführung und Evaluierung von Funktionstests der App

---
### Demo-Video
<div class="video-container">
    {% include video.liquid path="https://player.vimeo.com/video/1057081592?h=5f49a572ae&amp" %}
</div>

---
### Screenshots
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
    <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/dev-202301_flimmerkiste/202301_flimmerkiste-screenshot_01_v1.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

---
### Referenzen
- <a href="https://github.com/untitled-soundtrack/flimmerkiste">Projekt Repo [GitHub]</a>
- <a href="https://mfg.fhstp.ac.at/allgemein/flimmerkiste-semesterprojekt/">Blog-Beitrag über flimmerkiste [Mobile Forschungsgruppe FH St. Pölten]</a>
- <a href="https://www.figma.com/file/19xa2KyqRajSP30BZGQpEa/flimmerkiste?node-id=0%3A1&t=xnQuSn3OtmFcX5Is-1">Mockup der App [Figma]</a>