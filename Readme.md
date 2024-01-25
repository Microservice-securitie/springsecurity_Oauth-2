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
<img src= "Resources/keycloak-Login.png" width="960" />
</p>

<h3>Keycloak configuration </h3>
<p align="center" >
<img src= "Resources/configuration.png" width="960" />
</p>
<p align="center" >
<img src= "Resources/keycloak_user.png" width="960" />
</p>

<h3>Application page (HOME)</h3>
<p align="center" >
<img src= "Resources/homepage.png" width="960" />
</p>

<h3>Provider</h3>
L'élargissement des options d'authentification de notre application a été réalisé en ajoutant les fournisseurs d'identité Google, GitHub et Keycloak. Cette diversification permet aux utilisateurs de choisir entre les méthodes d'authentification de leur choix, qu'il s'agisse de comptes Google, GitHub ou du système sécurisé de Keycloak. L'intégration soigneuse de ces fournisseurs garantit une expérience d'authentification harmonieuse, tout en préservant la sécurité des données et en assurant la conformité aux normes élevées de notre application. Ainsi, notre système offre non seulement une variété d'options aux utilisateurs, mais maintient également une sécurité robuste.
* Endpoint = localhost:8083/Oauth2Login 
<p align="center" >
<img src= "Resources/provider.png" width="960" />
</p>

<h3>Testing end point</h4>
<p align="center" >
<img src= "Resources/jwtToken.png" width="960" />
</p>


## Part 2 : Securiser l'application en utilisation spring boot et Angular 

## Angular 
Angular est un framework pour clients, open source, basé sur TypeScript et codirigé par l'équipe du projet « Angular » chez Google ainsi que par une communauté de particuliers et de sociétés. Angular est une réécriture complète d'AngularJS,

<h3>Creation d'un nouveau Client dans Keycloack </h3>

<p align="center" >
<img src= "Resources/NvClient.png" width="960" />
</p>
