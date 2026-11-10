# Journal de bord

Nom et prénom : MEYAPIN Brice
Dépôt : https://github.com/8r1c3-333/jeu-ia
Outil utilisé (Copilot, modèle affiché) : Copilot

Règle : tu colles ici le texte exact de tes prompts (copier-coller, pas de capture). Une entrée par défi. Ce que tu n'as pas gardé compte autant que ce que tu as gardé.

## Défi 1 - Complétion

- Commentaire ou début de code que j'ai écrit :

```
// compte les cristaux attrapés dans la variable cristaux
```

- Ce que Copilot a proposé : cristaux += 1;   finCristaux.textContent = cristaux;

- Ce que j'ai accepté, modifié ou refusé, et pourquoi : - j'ai accepté car le jeu fonctionnait normalement. : cristaux += 1; 
- finScore.textContent += " | Cristaux attrapés : " + cristaux;
J'ai refusé car le jeu crash.   : - finCristaux.textContent = cristaux; 
    - const cristauxAttrapes = document.getElementById("cristaux-attrapes");
  cristauxAttrapes.textContent = "Cristaux attrapés : " + cristaux;
    -   finCristaux.textContent = "Cristaux attrapés : " + cristaux;
    - const cristauxElement = document.getElementById("fin-cristaux");
  cristauxElement.textContent = cristaux; // Mettre à jour le texte avec le nombre de cristaux attrapés

- Comment j'ai vérifié que ça marche : J'ai testé le jeu.

## Défi 2 - Ask

- Ma question (prompt exact) :

```
 comment le combo est-il remis à zéro ?
```

- Une affirmation de la réponse que j'ai vérifiée : "Le combo est remis à zéro lorsque son chronomètre de 3 secondes expire, ou lorsqu’une bombe est attrapée ou qu’un cristal tombe sans être attrapé via perdreVie."

- Comment je l'ai vérifiée (un changement dans le code, un test dans le jeu) : J'ai testé le jeu et, effectivement, le combo se  remet à 0 dès qu'un cristal est raté.

- Résultat : exacte, fausse ou incomplète : Exacte.

## Défi 3 - Plan

- Mon prompt en mode Plan :

```
Je veux ajouter un cristal de glace, plus rare que le doré. Quand on l'attrape, tous les
objets ralentissent pendant 4 secondes, puis reprennent leur vitesse. Respecte les règles de
.github/copilot-instructions.md. Propose un plan sans modifier le code.
```

- Le plan est dans le fichier `PLAN.md`.
- Ce que j'ai changé dans le plan avant de le valider (étape retirée, ajoutée, contrainte) et pourquoi : j'ai changé la rareté de GLACE de 2 vers 3% et représenté celui-ci par une tête d'ours blanc afin d'optimiser cette nouvelle option.

## Défi 4 - Agent

- Mon prompt en mode Agent :

```
(colle-le ici)
```

- Fichiers que l'agent a modifiés :
- Ce que j'ai relu dans les changements avant d'accepter :
- Ce que j'ai refusé, corrigé ou fait refaire :
- Mon jeu après l'agent (une phrase) :

## Défi 5 - Pull request et revue

- Lien de ma pull request :
- Commentaire de la revue Copilot que j'ai traité (le texte) :
- Ma décision (corrigé ou refusé) et pourquoi :
- Lien de mon jeu publié :

## Bilan (3 lignes maximum)

- Ce que l'assistant a fait mieux ou plus vite que moi :
- Ce qu'il a mal fait ou ce que j'ai dû corriger :
- Ce que je ne lui laisserais pas faire :
