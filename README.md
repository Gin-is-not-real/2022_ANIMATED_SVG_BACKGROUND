# Background SVG animé

## Etapes
### dessin du background sur Illustrator:
    - je fait des groupes en fonctions des elements devant fonctionner ensemble

    **Les elements doivent être dans des svg separés pour pouvoir les animer correctement, par exemple pour animer les cercles**

    - je nomme de façon reconnaissable les groupe et les elements pour les retrouver facilement dans le fichier SVG

    - j'exporte les groupes elements dans une même selection

### HTML:
    - je copie le contenu du fichier SVG exporté
    - je le colle dans une balise div dans le HTML
    
*je peux maintenant accéder aux elements via CSS ou JS*

### accés aux elements:
    - la balise <svg> contient le SVG
    - les balises <g> sont les groupes crées sur Illustrator
    - les balises <path>, <circle> etc.. sont les instructions de dessin des elements

*à ce stade je push le projet sur github, et je créer une nouvelle branche pour les animations*