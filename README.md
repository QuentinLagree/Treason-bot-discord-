# Treason Bot

Ici, vous trouverez  la documentation complète de votre bot discord en passant par les commandes que par les évènements que votre bot pourra effectuer.
# Pourquoi je fais cette documentation ?
J'ai fais cette documentation et placer votre projet sur github pour que vous puissiez y accéder facilement et pour que vous puissiez voir l'avancé des versions de votre bot discord.

Vous pourrez aussi voir l'avancer et l'allure que le projet a.

> le projet est en privé donc seul vous et moi pourront y accéder. ( c'est moi qui décide de qui peut accéder au GitHub de Treason )

- ##### Commandes
    - [X] **Commande de ban**
    - [ ] **Commande de tempban** -> ***En cours***
    - [ ] **Commande de mute**
    - [ ] **Commande de tempmute**
    - [ ] **Commande de unban**
    - [ ] **Commande de unmute**
    - [ ] **Commande de warn** -> ***EN COURS***
> **Infos :** Vous pouvez toujours me poser des questions sur discord : **Quentin#8244**
 

## Liste des commandes

Voici la liste des commandes pour **les staffs** du serveur

> **Note :** vous pouvez retrouver toutes les commandes dans src/commands/..

/ban -> Permet de bannir un membre définitivemen
> Syntaxe : > **```/ban <utilisateur> <raison> ```**
*-* **utilisateur** : Le membre à bannir format : <@id>
*-* **raison** : La raison du bannissement / (2000 caractères maximum) 
***
/tempban -> Permet de bannir un membre du serveur durant une certaine durée.
> Syntaxe : **```/ban <utilisateur> <durée> <raison> ```**

*-* **utilisateur** : Le membre à bannir format : <@id>
    
*-* **durée** : La durée du bannissement.
>  **Infos** : La durée doit être du format : _<nombre de><y/m/d/h/m/s>_
    
|| Abbréviations        | Nom complet ||
|--|-----|----------| --- |
| | y   | Années              | 
| | m   | Mois     |
| | d   | Jours    |
| | h   | Heures   |
| | min | Minutes  |
| |  s  | Secondes |

*-* **raison** : La raison du bannissement / (2000 caractères maximum) 
 > **Note** : Toutes les commandes seront répertoriés ici.

## Liste des événements

Voici la liste des événements que Treason pourra effectuer sur le serveur Discord.
> **Note :** vous pouvez retrouver tous les événements dans src/events/..

- événements du bot : tous les événements liés au bot et à son fonctionnement.
  - ready : se charge quand votre bot est prêt et qu'il est connecté sur le serveur Discord.
  - > on peut y afficher le serveur ou le Ping, vous pourrez me dire ce que vous voulez faire dans cette événement.

  - interaction

 > **Note** : Tous les événements seront répértoriés ici.
