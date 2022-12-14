# Background SVG animé
J'ai commencé ce projet pour m'entrainer à la manipulation et animation de SVG en CSS et JS. Le résultant m'ayant bien plu, j'ai décider d'en faire ma page d'accueil.

## Page d'accueil
Le background animé de la première page consiste en un groupe de cercles centrés sur le même point, effectuant des rotations de vitesse et directions différentes, et un groupe de courbes de deux couleurs différentes, apparaissant et disparaissant progressivement à des rythmes différents.  

D'autres animations sur les cercles: changement progressiv d'opacité, une inversion de couleur (via changement de classe) et l'apparition d'un ombrage rouge.

### Etapes

#### dessin du background sur Illustrator:
- je fait des groupes en fonctions des elements devant fonctionner ensemble

**Les elements doivent être exporter dans des svg separés pour pouvoir les animer correctement, par exemple pour animer les cercles indépendamment**

- je nomme de façon reconnaissable les groupes et les elements pour les retrouver facilement dans le fichier SVG (CIRCLE_1, WAVES_L ...)

- j'exporte les groupes et elements dans une même selection

#### HTML:
- je copie le contenu des fichiers SVG exporté
- je le colle dans une balise div (#svg-background) dans le HTML
- je renomme les classes de styles attribuées par Illustrator (.cls-n) en .cir-1, .cir-2, .wav-1... pour éviter l'écrassement de styles
    
*je peux maintenant accéder aux elements via CSS ou JS*

#### accés aux elements:
- les balises `<svg>` contient le SVG (<svg id="SVG_CIRCLES" ...>)
- les balises `<g>` sont les groupes crées sur Illustrator (<g id="SCREEN">)
- les balises `<path>`, `<circle>` etc.. sont les instructions de dessin des elements

#### CSS:
- je replace les svg sur la page en utilisant les positions absolues

*à ce stade je push le projet sur github, et je créer une nouvelle branche pour les animations*

#### animations:
**Il y a plusieurs types d'animations:**
- les rotations des cercles (css)
- les variations d'opacité des cercles et lignes (css)
- les variations d'ombrages (css)
- le "flash" du gros cercle (js)  

**- Les 3 premiers types d'animations sont gérées en CSS via le sytème de `keyframes`**  
**- La dernière est gérée en Javascript via un `setInterval` qui viens changer la classe de l'élement pour une durée aléatoire, modifiant ainsi son style**

#### responsivité
**Je veux que les svg concervent leur proportions lorsqu'on réduit la fenêtre, jusqu'a un minimum choisi, et qu'ils restent centrés verticalement**   
- J'utilise les unités `vh` et `vw` pour les proportions, et j'indique une `min-width` en px
```
#SVG_CIRCLES {
    width: 40vw;
    min-width: 300px;
    height: 100vh;
    position: absolute;
}

#SVG_WAVES {
    width: 100vw;
    min-width: 700px;
    height: 100vh;
    position: absolute;
    top: 1vh;
}
```