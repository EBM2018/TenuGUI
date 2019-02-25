# TenuGUI

TenuGUI est une application web cherchant à dynamiser le déroulement d'un enseignement ou d'une formation.  
Cette application propose :
* La création d'activités incitant l'interaction entre professeur et apprenants, par exemple :
    * Des quizz
    * Des icebreakers
    * Des nuages de mots
    * Des témoins d'avancement sur un exercice
* La remontée de feedback des apprenants vers le professeur

Ce projet est développé dans le cadre du fil rouge EBM et utilise donc l'architecture du [boilerplate de l'option](https://github.com/EBM2018/filrouge-boilerplate).

# Utilisation

* Exécuter `git clone https://github.com/EBM2018/TenuGUI.git`
* Installer `npm`
* Exécuter `npm install` à la racine pour installer les dépendances front-end et back-end
* Mettre en place une base de données `MariaDB` s'appelant `TenuGUI` hébergée localement
* Créer un fichier `.env` dans le dossier `backend`
    * Utiliser le fichier `.env.example` comme template
    * Le remplir avec ses propres paramètres
* Exécuter `npm start` à la racine pour servir le front-end et le back-end

# Tests

## Front-end

* Exécuter `npm run test` dans le dossier `frontend`

## Back-end

* Mettre en place une base de données `MariaDB` s'appelant `TenuGUI-test` hébergée localement
* Créer un fichier `.env.testing` dans le dossier `backend`
    * Utiliser le fichier `.env.example` comme template
    * Le remplir avec ses propres paramètres
* Exécuter `NODE_ENV=testing sequelize db:migrate` dans le dossier `backend` pour migrer la base de données
* Exécuter `NODE_ENV=testing sequelize db:seed:all` dans le dossier `backend` pour peupler la base de données
* Exécuter `npm run test` dans le dossier `backend` pour lancer les tests
* Exécuter `npm run lint` dans le dossier `backend` pour lancer le linter

# Déploiement local

* [Installer Docker CE](https://docs.docker.com/install/)
* [Installer docker-compose](https://docs.docker.com/compose/install/)
* Compléter les variables d'environnement `MYSQL_PASSWORD` et `MYSQL_ROOT_PASSWORD` du fichier `.env` du dossier `backend`
* Éxécuter `sudo docker-compose -f ../docker-compose.local.yml up --build` dans le dossier `backend`
    * À tuer et relancer à chaque modification du code source

# Licence

Code mis à disposition selon la [Licence MIT](./LICENSE).