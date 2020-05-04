# Suika
### meal organizer

Ce projet est animé par d’un besoin tout bête: L’organisation d’un repas. 
Et bien sur, il est nourrit par l’amour de la bonne cuisine. Pour ceux qui aiment convier des amis, de la famille, des voisins à leur table cela peut néanmoins rapidement se transformer en un véritable casse tête. Qui est allergique, intolérant, végétarien, végan, religieux ou tout simplement qui n’aime pas tel ou tel aliment ? La convivialité étant au centre de ce genre de repas, nous souhaitons tous que chacun puisse partager un même menu dans la joie et la bonne humeur sans l’angoisse de manger quelque chose qu’il ne devrait pas.



## OBJECTIF : 
Permettre à l'hôte de lister à un seul endroit ses invités ainsi que les préférences alimentaires de chacun. Cela se ferait en plusieurs étapes : 
  - V1 : une liste des aliments à proscrire pour l’élaboration du menu à venir
  - V2 : Une liste des aliments à proscrire + des propositions de menus pouvant correspondre à cette contrainte



## COMMENT: 
L'hôte se crée un compte.
Sur son espace personnel, il peut :
  - **Ajouter des convives**: Une liste de noms peut être préalablement entrée avec la liste des aliments à proscrire pour chacun d’eux. Cette liste est divisée en plusieurs catégories : 
    - Aliments non appréciés
    - Régime spécial (sans gluten, sans lactose, végétarien, végan...)
    - Allergie (arachides, soja, oeufs…)
    - Religion (pas de porc, kasher…)
  - **Supprimer des convives**
  - **Ajouter un commentaire** sur chaque convive
  - **Créer un menu**: Cela va créer un “événement”. L'hôte peut lui donner un nom, une description et y ajouter des convives. Cela affichera la liste des aliments OU familles d’aliments à éviter (viande par exemple). Possible d’ajouter OU supprimer des convives à volonté : La liste finale se met à jour en fonction
  - **Supprimer un menu**
  - **Ajouter certains convives en favori**: Pour les convives que l’hôte invite souvent, il peut les mettre dans une liste de favori pour faciliter leur sélection lors de la création d’un menu.



## POUR ALLER PLUS LOIN: 
Dès que tout ce qu’il y a ci-dessus sera mis en place, il serait possible d’améliorer l’outil avec des petites features supplémentaires telles que citées ci-dessous: 
  - **Proposer des recettes** correspondant aux contraintes alimentaires de chacun: se baser sur des recettes en lignes existantes (voir si API marmiton ou 750g ou autre)
  - **Ajouter ses propres recettes**: En listant les ingrédients nécessaire sous forme de “tag”, elles pourront ressortir lors de l’élaboration de menus parmis les recettes récupérées via l’API
  - **Programmer des menus**: En ajoutant une date, un lieu, à lier avec google calendar. 
  - **Regrouper les convives par groupes**: regrouper les personnes qui partagent souvent des repas ensemble (famille, amis, collègues…) Cela facilitera la sélection des convives à création d’un nouveau menu
  - **Renseigner les aliments qu’un convive apprécie particulièrement**: Cela  permettra d’améliorer la création du menu. Dans un premier temps cela peut être indiqué dans la partie commentaire du convive mais n’entrera pas en compte dans la création des menus.
  - **Renseigner type de repas souhaité**: pique-nique, barbecue, repas de fête, healthy… Cela permettra de faire ressortir les recettes adaptées à ce filtre de tri.
  - **Renseigner qui apporte quoi**: dans le cas où chaque convive apporte un plat, pouvoir renseigner qui apporte quoi

Et aussi, il est important pour moi que ça soit joli et simple à utiliser bien sur ✨

# suika

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
