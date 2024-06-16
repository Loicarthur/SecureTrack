# SecureTrack

SecureTrack est une solution backend innovante conçue pour assurer la surveillance en temps réel des véhicules de transport de fonds. Suite à un incident majeur de sécurité, cette application offre un moyen fiable de suivre les véhicules, détecter les immobilisations prolongées, et envoyer des alertes instantanées en cas de problème potentiel.

## Fonctionnalités

- **Suivi en temps réel** : Utilisation de Socket.IO pour fournir des mises à jour instantanées des positions des véhicules.
- **Alertes d'immobilisation** : Envoie des notifications lorsque des véhicules restent immobiles trop longtemps.
- **Gestion des utilisateurs** : Création, authentification et gestion des sessions des utilisateurs avec une sécurité renforcée.
- **Stockage des données** : Enregistrement des positions des véhicules dans MongoDB pour une analyse et une récupération ultérieures.

## Technologies utilisées

- **Node.js** : Serveur backend asynchrone et événementiel.
- **Express** : Framework web minimaliste pour Node.js.
- **Socket.IO** : Communication bidirectionnelle en temps réel entre le serveur et les clients.
- **MongoDB** : Base de données NoSQL pour le stockage des données de position des véhicules.
- **Mongoose** : ODM (Object Data Modeling) pour MongoDB et Node.js.
- **jsonwebtoken** : Gestion des tokens JWT pour l'authentification.
- **express-validator** : Validation des données des requêtes.

## Installation

### Prérequis

- Node.js (v14 ou supérieur)
- MongoDB (local ou cloud)

### Étapes d'installation

1. Clonez le repository :
    ```bash
    git clone https://github.com/Loicarthur/securetrack.git
    cd securetrack
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```

3. Configurez les variables d'environnement :
   Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :
    ```env
    MONGODB_URI=mongodb://localhost:27017/vehiculeBd
    JWT_SECRET=your_jwt_secret
    SESSION_SECRET=your_session_secret
    ```

4. Lancez le serveur :
    ```bash
    npm start
    ```

## Utilisation

### API Endpoints

- **Ajouter un utilisateur**
    - `POST /api/register`
    - Body : `{ "username": "example", "password": "password" }`

- **Authentifier un utilisateur**
    - `POST /api/login`
    - Body : `{ "username": "example", "password": "password" }`

- **Déconnexion**
    - `POST /api/logout`

- **Récupérer les données de position des véhicules**
    - `GET /api/vehicles`
    - Header : `Authorization: Bearer <token>`

### WebSocket

Connectez-vous au serveur Socket.IO pour recevoir les mises à jour en temps réel.

- **Événements disponibles** :
    - `position` : Envoie la position des véhicules.
    - `alert` : Envoie une alerte d'immobilisation.

## Sécurité

- Les informations des utilisateurs sont validées avec `express-validator`.
- Les mots de passe sont hashés et salés avant stockage pour une sécurité accrue.
- L'authentification est gérée de manière fiable avec des tokens JWT.

## Contribuer

Les contributions sont les bienvenues ! Pour toute proposition de fonctionnalité ou rapport de bug, veuillez ouvrir une issue ou soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteurs

- Loic Tchuenkam (https://github.com/Loicarthur)

#