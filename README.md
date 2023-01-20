# Treason Bot

Ici, vous trouverez  la documentation complète du bot discord en passant par les commandes ainsi que par les évènements que le bot pourra effectuer.
# Pourquoi je fais cette documentation ?
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

> **Note :** toutes les commandes se trouvent dans src/commands/..

/ban -> Permet de bannir un membre définitivement
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
> **Note :** tous les événements se trouvent dans src/events/..

- événements du bot : tous les événements liés au bot et à son fonctionnement.
  - ready : se charge quand votre bot est prêt et qu'il est connecté sur le serveur Discord.
  - > on peut y afficher le serveur ou le Ping, vous pourrez me dire ce que vous voulez faire dans cette événement.

  - interactionCreate : se charge lorsqu'un utilisateur créer une interaction avec le bot en tapant une commande en cliquant sur des boutons ou autre.

 > **Note** : Tous les événements seront répértoriés ici.


## Configuration du bot: en cours
