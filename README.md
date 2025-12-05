# 🌐 App-Multi : Application Multi-Page Angular

---

## 🎯 Objectif général

App-Multi a été conçue pour **apprendre à créer une application Angular multi-pages**, en utilisant des **routes distinctes**, exactement comme une application web classique.  
L’un des objectifs pédagogiques majeurs est également d’explorer **le paramétrage d’un composant**, en passant des valeurs directement via son sélecteur HTML et ses attributs.

Concrètement, ce projet est un excellent support pour se familiariser avec :

- La navigation entre différentes pages d’une application Angular ;  
- La création de composants réutilisables et paramétrables ;  
- L’intégration de CSS via Bootstrap pour un rendu moderne et responsive.

---

## 💡 L’idée de l’application

L’application permet à l’utilisateur de générer et afficher **des tables de multiplication** (de 1 à 10 ou plus) selon une valeur qu’il choisit.  
Une table de multiplication présente dans ses lignes et colonnes le produit des nombres entiers naturels, et permet de visualiser rapidement ces calculs de manière structurée.

Historiquement, ces tables étaient appelées « livret » au XVIᵉ siècle, et l’apprentissage des tables reste fondamental à l’école primaire.

---

## 📄 Contexte et structure

App-Multi est organisée autour de plusieurs **pages**, chacune représentant un composant Angular dédié :

1. **Header** : barre de navigation avec liens vers les différentes pages.  
2. **PageTableMultComponent** : page affichant une table de multiplication simple.  
3. **TableMultiplicationComponent** : composant métier qui affiche une table de multiplication paramétrable.  
4. **Footer** : pied de page standard, réutilisable sur toutes les pages.  

Chaque page utilise les routes Angular pour assurer une navigation fluide. Le projet illustre ainsi parfaitement le **pattern SPA (Single Page Application)** avec Angular.

---

## 🏗️ Fonctionnement et construction

L’application a été initialisée avec **Angular CLI**, avec le paramètre `--routing` activé pour gérer les différentes pages :

- Le composant principal (`app.component`) contient le `router-outlet` qui permet de charger dynamiquement chaque page selon la route.  
- Bootstrap et Bootstrap Icons sont intégrés pour un rendu esthétique et responsive, via le module `@ng-bootstrap/ng-bootstrap`.  

---

## 🔧 Composants et paramétrage

Le projet met en pratique plusieurs concepts clés d’Angular :

- **Composants paramétrables** : `TableMultiplicationComponent` peut afficher n’importe quelle table en passant la valeur `n` via l’attribut `[n]`.  
- **Directives Angular** : `*ngFor` pour générer dynamiquement les lignes de la table.  
- **Routes et navigation** : configuration dans `app-routing-module.ts`, avec des liens dans le header pour naviguer entre les pages.  

Exemple d’utilisation d’un composant paramétré :  

```html
<app-table-multiplication [n]="3"></app-table-multiplication>
``

``
# TableMultApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.13.

## Development server

To start a local development server, run:

```bash
ng serve


Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.`

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# AppMulti_Angular
