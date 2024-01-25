## compte rendu
<h3>Introduction</h3>
Notre projet Spring Boot et Spring Security, intégrant Thymeleaf pour le rendu côté serveur, assure une application web robuste. En optimisant la sécurité, nous avons intégré Keycloak pour une authentification et une gestion des autorisations avancées, garantissant une protection totale des données.

Parallèlement, l'ajout du microservice inventory-service, sécurisé avec les mécanismes de Spring Boot et Keycloak, renforce la modularité et la sécurité de l'ensemble du système. Cette approche assure une expérience utilisateur fiable et sécurisée, avec une attention particulière portée à chaque composant du projet.

## Oauth2
OAuth 2.0 est un protocole d'autorisation et NON un protocole d'authentification. En tant que tel, il est principalement conçu comme un moyen d'accorder l'accès à un ensemble de ressources, par exemple, des API distantes ou des données utilisateur.

## OIDC

OIDC, ou OpenID Connect, est un protocole d'authentification et d'autorisation conçu sur la base du protocole OAuth 2.0. Il vise à standardiser les processus d'authentification et de gestion des autorisations dans le contexte des applications web et des services API.

## Keycloack

<p align="center" >
<img src= "Resources/keycloak.png" height="290" width="auto" />
</p>

Mon projet intègre Keycloak en tant que fournisseur d'identité, utilisant le protocole OpenID Connect (OIDC) pour sécuriser le processus d'authentification des utilisateurs. Grâce à Keycloak, nous bénéficions d'une gestion avancée des autorisations, assurant un contrôle précis de l'accès aux ressources sensibles de notre application. Cette intégration renforce significativement la sécurité, garantissant une expérience utilisateur fiable. Ainsi, Keycloak constitue une composante essentielle de notre architecture, assurant une protection robuste et efficace des données et des services.

<h5>Installation keycloak</h5>

L'intégration fluide de Keycloak dans notre infrastructure a été réalisée en déployant avec succès une instance via Docker. Cette approche simplifiée garantit une gestion robuste des identités et des autorisations, renforçant ainsi la sécurité de notre application.

<p align="center" >
<img src= "Resources/docker.png" height="160" width="auto" />
</p>
<h3>Keycloak Login </h3>

<p align="center" >
<img src= "Resources/keycloak-Login.png" height="800" width="auto" />
</p>

<h3>Keycloak configuration </h3>
<p align="center" >
<img src= "Resources/configuration.png" height="800" width="auto" />
</p>
<p align="center" >
<img src= "Resources/keycloak_user.png" height="800" width="auto" />
</p>

