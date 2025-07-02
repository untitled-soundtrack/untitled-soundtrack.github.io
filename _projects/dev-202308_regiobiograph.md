---
layout: page
title: RegioBioGraph
description: “Lebende” Archive filmisch erzählen
img: assets/img/projects/dev-202308_regiobiograph/dev-202308_regiobiograph_thumbnail_v1.png
importance: 4
category: dev
images:
    slider: true
---

<div class="header-pic">
    {% include figure.liquid loading="eager" path="assets/img/projects/dev-202308_regiobiograph/dev-202308_regiobiograph-header_v1.png" %}
</div>

---
### Kurzbeschreibung
Im Forschungsprojekt RegioBioGraph wurde untersucht, wie digitale Technologien zur `Vermittlung lokaler Geschichte` beitragen können, 
indem Biografien mit verschiedenen Medienelementen verknüpft werden. Ziel war es, eine `interaktive Anwendung` zu entwickeln, die 
filmische Erzählungen und biografische Inhalte in chronologischer Reihenfolge abspielt.

Im Rahmen der Mitarbeit wurde der `Prototyp in Unity` durch umfangreiche Tests und gezielte Vorschläge weiterentwickelt. Dabei lag der Fokus darauf,
zu analysieren, wie spezifische Medien animiert und für welche Dauer eingeblendet werden sollten, um eine möglichst immersive und
informative Darstellung zu ermöglichen.

Es wurden zudem `Archivmaterialien` recherchiert, referenziert und in den Prototyp integriert. 
Verschiedene API-Schnittstellen wurden genutzt, um relevante Datenquellen effizient einzubinden. Zusätzlich wurde ein 
automatisierter Workflow entwickelt, der den `Export` der notwendigen Daten für die Anwendung erleichtert und 
strukturiert bereitstellt. Dadurch konnten Medienelemente gezielt eingebunden und die digitale Geschichtsvermittlung weiter optimiert werden.

Das Projekt entstand in Zusammenarbeit mit der Universität Wien sowie der theaterhistorischen Sammlung des Instituts 
für Theater-, Film- und Medienwissenschaft.

---
### Technologien
<i title="Node.js" class="techstack fa-brands fa-node-js"></i>
<i title="MediaWiki" class="techstack fa-brands fa-wikipedia-w"></i>
<i title="Github" class="techstack fa-brands fa-github"></i>

---
### Aufgaben & Learnings

- **Weiterentwicklung des Export-Tools für MediaWiki & Topothek**: 
Anpassung eines bestehenden CLI-Tools mit Node.js (ohne Framework) zur effizienten Datenübertragung an MediaWiki und Topothek.
- Um den barrierefreien und nutzerfreundlichen Einsatz zu erleichtern, wurde das Tool als ausführbare Datei für Windows und macOS exportiert.
- **Analyse der API-Schnittstellen von Topothek & MediaWiki**: Untersuchung der verfügbaren API-Funktionen, um eine 
optimale Integration und Datenübertragung zwischen den Plattformen zu ermöglichen. 
- **Archivarbeit & Mediensammlung für Biografien**: Für eine umfassende Darstellung der Biografien im Unity-Prototyp 
wurden zahlreiche Medienelemente recherchiert, gesammelt und referenziert. Diese wurden in die lokale Topothek Groß-Enzersdorf 
hochgeladen, wobei eine korrekte Formatierung der Mediendaten sichergestellt wurde. Insgesamt wurden ca. 100 Biografien mit 
zugehörigen Medienelementen ergänzt und optimiert.
- **Entwicklung eines einfachen Testworkflows für den Unity-Prototyp**: Etablierung eines strukturierten Testprozesses, 
um die Anwendung effizient zu evaluieren und die Nutzer:innenerfahrung zu verbessern. 
- **Erarbeitung von Vorschlägen für Medienelement-Formate und Anwendungserweiterungen**: Analyse bestehender Medienelemente
und Entwicklung ergänzender Vorschläge zur Formatierung, Darstellung und technischen Umsetzung, um die Benutzerfreundlichkeit 
der Anwendung weiter zu optimieren. 

---
### Screenshots
<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/dev-202308_regiobiograph/dev-202308_regiobiograph-screenshot_01.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/dev-202308_regiobiograph/dev-202308_regiobiograph-screenshot_02.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/dev-202308_regiobiograph/dev-202308_regiobiograph-screenshot_03.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/dev-202308_regiobiograph/dev-202308_regiobiograph-screenshot_04.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid loading="eager" path="assets/img/projects/dev-202308_regiobiograph/dev-202308_regiobiograph-screenshot_05.png" class="img-fluid rounded z-depth-1" %}</swiper-slide>
</swiper-container>

---
### Referenzen
- <a href="https://github.com/untitled-soundtrack/rgb-json-translator">Repo für RBG Export Tool [GitHub]</a>
- <a href="https://research.fhstp.ac.at/projekte/regiobiograph">Forschungsprojekt RBG [FH St. Pölten]</a>
- <a href="https://regiobiograph.media.fhstp.ac.at/wiki/Hauptseite">MediaWiki RBG [MediaWiki]</a>
- <a href="https://gross-enzersdorf.topothek.at/">Topothek Groß-Enzersdorf [Topothek.at]</a>