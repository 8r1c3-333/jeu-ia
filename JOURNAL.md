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
Ajoute un bouclier qui absorbe la prochaine bombe, visible dans le HUD puis met un fond noir avec un modèle type 2D d'une voiture de sport représentée en lignes blanches qui fait des drifts en boucle
```

- Fichiers que l'agent a modifiés : config.js, dessin.js, index.html, jeu.js, style.css.
- Ce que j'ai relu dans les changements avant d'accepter : 
- Ce que j'ai refusé, corrigé ou fait refaire : Je lui ai fait refaire la voiture qui drift, le résultat n'est toujours pas ce que j'attendais mais je ne pousse pas plus car c'est clairement une limite.
- Mon jeu après l'agent (une phrase) : une voiture mal représentée tourne en arrière-plan et des coeurs apparaissent pour donner le bouclier au joueur.

## Défi 5 - Pull request et revue

- Lien de ma pull request : https://github.com/8r1c3-333/jeu-ia/pull/1
- Commentaire de la revue Copilot que j'ai traité (le texte) : "Review effectuée : le bouclier est correctement intégré au spawn, au HUD, à la collision avec la prochaine bombe et au reset de partie. Le rendu de fond et les nouveaux types d'objet sont cohérents avec le reste du jeu. Vérification navigateur effectuée sans erreur applicative ; seul le favicon manquant génère un 404, sans impact sur cette PR. Je ne relève aucun point bloquant."
- Ma décision (corrigé ou refusé) et pourquoi : 
- Lien de mon jeu publié :

## Bilan (3 lignes maximum)

- Ce que l'assistant a fait mieux ou plus vite que moi : je n'ai jamais fait de python ou javascript donc il a été plus efficace que moi sur tout.
- Ce qu'il a mal fait ou ce que j'ai dû corriger : La modification suivante : réinitialisation du nombre de cristaux à chaque début de partie et le score à 0 qui a dû être repris plusieurs fois.
- Ce que je ne lui laisserais pas faire : Faire un jeu plus évolué que celui-ci car même cela était difficile par moment pour Copilot.
