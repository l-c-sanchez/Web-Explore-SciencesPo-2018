Concours de L'Equipe Explore. 

En 1966, Erika Schinegger, sportive encore inconnue, devient championne du monde de descente en ski alpin. Elle semble promise à une grande carrière, et l'Autriche place en elle de grands espoirs pour les Jeux Olympiques de Grenoble en 1968. Pourtant, elle n’y participera pas : à la suite de tests de féminité, comme en subissent de nombreuses athlètes à cette époque-là, elle apprend avant les JO qu’elle est née avec un corps d’homme. 
L'équipe Ecole de journalisme Sciences Po

# Modèle Explore Horizontal

## Installation

Dans un terminal : 

`cd xx-shell`

`npm install` (éventuellement précédé de `sudo` si problème d'écriture)

## Lancement du serveur

`npm start`

théoriquement, une fenêtre du navigateur par défaut doit s'ouvrir sur l'url `http://localhost:3000/`.

les mises à jour des fichiers entraîne immédiatement une mise à jour de cette fenêtre.

## Description de l'arborecence


### public/index.html

Fichier d'index contenant les métas


### public/datas/xx-shell/content.json

Fichier contenant les textes


### public/img/share.jpg

Images de partage


### src/components

Dossiers contenants les composants


## Description des composants

### Board

C'est le composant principal qui orchestre les autres composants. Le board est découpé en slide qui peux éventuellement être une slide double. Voir les exemples dans le code.

### Element

Composant permettant d'ajouter un élément dans une slide du board.

Attributs : 
- name : nom du fichier
- index : définit la profondeur de l'élément et donc sa vitesse de défilement par rapport au défilement par défaut (m1 pour -1, m2 pour -2, p1 pour +1, p2 pour +2)
- left : décalage de l'élément

### StaticElement

Composant permettant d'ajouter un élément qui occupe toute une slide du board.

Attributs : 
- name : nom du fichier en 1er plan
- bg : nom du fichier en arrière plan
- size : double ou simple selon le nombre de slide que l'on souhaite couvrir

### Edito

Composant permettant d'ajouter une zone de texte dans une slide du board.

Attributs : 
- content : texte (sous forme de référence définit dans content.json)
- top : décalage de l'élément
- bottom : décalage de l'élément

### Vidéo

Composant permettant d'embeder une vidéo Dailymotion dans une slide du board.

Attributs :
- id : id de la vidéo
- positionTop : positionnement de l'élément
- positionBottom : positionnement de l'élément
- ratio : ratio de la vidéo

### Skew

Composant biseauté pour l'ouverture des chapitres.

Attributs :
- name : nom du fichier en 1er plan
- bg : nom du fichier en arrière plan
- position : positionnement du biseau


### Masthead

Composant permettant de configurer l'ours en fin d'Explore.


## Exportation du projet

Avant l'envoi du projet :

- compresser les images sur TinyPNG `https://tinypng.com/`
- s'assurer que les métas sont bien renseigné pour le partage
- zipper l'ensemble du dossier xx-shell


