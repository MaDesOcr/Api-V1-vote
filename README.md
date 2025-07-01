V1

L’association VoteDonc organise une réunion de son conseil d’administration. Steve, le référent légal, a pensé mettre une tablette numérique à la sortie de la salle de vote, pour lister ceux qui auront voté.
Vous êtes le responsable technique bénévole de l'association. Vous avez eu le temps de faire l'API (V1), mais il vous faut maintenant faire l'app mobile.
Il n'y aura que Steve qui aura accès à la tablette, il n'y a donc pas d’authentification ni de rôle.
Lorsqu'un votant sortira de la salle de vote, Steve apuyra sur le bouton "Voter" de cette personne.

Voici les fonctionnalités retenues pour la V1 de l’app Ionic React :

    Affichage de la liste des membres
        Tableau affichant : nom, prénom, date de naissance et une information sur l'état du vote

    Enregistrement du vote irréversible

        Bouton Voter en face de chaque membre
        Une fois cliqué, le bouton disparaît et laisse apparaître « A voté »
