
# Another Ionic 3 & Angular 5 Boilerplate

[![Build Status](https://travis-ci.org/Asone/ionic-3_Angular-5_Custom-Boilerplate.svg?branch=master)](https://travis-ci.org/Asone/ionic-3_Angular-5_Custom-Boilerplate)

The following repo provides a boilerplate for projects intended to be written with Ionic 3 & Angular 5. 

As there are many boilerplates for Ionic 3 and Angular 5, i couldnt find any satisfying repo providing a complete configuration as i would expect it personally, so here is my own. 


# Install

#### Install NPM : 
#### Install Ionic : `npm i -g Ionic`
#### Install Karma : `npm i karma --save-dev`
#### install Angular-cli : `npm -g angular-cli`
#### Install dependencies : `npm install`

#### Perform unit tests : `npm test`
#### Perform end-to-end tests :`npm e2e`


# Structure

Even if there is no perfect folder structure, some recommandations exist about how to structure your project. 
The repo brings the described structures and coding conventions, trying to stick as much as possible to the official recommendations.

## Root Structure

Root level is described as following : 

```
- src/				=> Sources of the application
- test-config/        		=> Config files for environments handling
-  package.json			=> Configure dependencies and npm run scripts
- tsconfig.json			=> TypeScript configuration
- ionic.config.json		=> Ionic configuration
- config.xml			=> Application configuration
- environments/			=> Environment configuration
- config/ 			=> Config folder containing main webpack configuration
- Test/ 			=> Config for environments handling
```

## Application Structure 

### Global Structure
Global structure is the following : 

```
- _Components				=> Components for Angular
- _Models				=> Custom types and interfaces 
- _TestData				=> Mocked data for tests & development
- _Services				=> Injectable classes for services like API requests
- _Pages				=> Pages containers for Ionic
-
```

### Angular Classes & Components

Following good practices, the structure of an Angular component should be as follows : 

```
- MyComponent
	- MyComponent.component.ts			=> Component Class
	- MyComponent.component.spec.ts			=> Unit tests
	- MyComponent.component.e2e.ts			=> end-to-end tests
	- MyComponent.component.scss			=> SASS/CSS styles
	- MyComponent.component.html			=> HTML Template
```

### Ionic pages Classes

Ionic pages classes should follow the same convention, however we will put here an additional file declaring an [`ngModule`](https://angular.io/api/core/NgModule)  for page which will provide Ionic Modules & scoped Angular components.

```
- MyPage
	- MyPage.page.ts				=> Component Class
	- MyComponent.page.spec.ts			=> Unit tests
	- MyComponent.page.e2e.ts			=> end-to-end tests
	- MyComponent.page.scss				=> SASS/CSS styles
	- MyComponent.page.html				=> HTML Template
	- MyComponent.page.module.ts	        	=> Page Module
```

# Dependencies

## Frameworks

### Core :

| Dependency | Description | Version | Documentation |
|----------------|-------------------------------|-----------------------------|------|
|Ionic| Javascript Hybrid Application development framework |v.3.20.2 | [Documentation](https://ionicframework.com/docs/) |
|Angular| SPA Framework for webapp development | @angular/core : v.5.2.9 <br /> angular-cli : v.1.2.3 | [Documentation](https://angular.io/docs) |
Cordova |mobile application development framework | v8.0.0 | [Documentation](https://cordova.apache.org/docs/) |
| Typescript |  JavaScript super-set for strong-typing code | v2.4.2 | [Documentation](http://www.typescriptlang.org/docs/) |
|Karma |Unit testing| Karma : v.2.0.0 <br /> karma-webpack : v.^3.0.0 | [Documentation](https://karma-runner.github.io/) |
| Jasmine | Behavior-driven development framework | v.^2.8.6 | [Documentation](https://jasmine.github.io/pages/docs_home.html) |
| Istanbul | test coverage reporting. Compatible reports for Jenkins. Package name : istanbul-instrumenter-loader | v.^3.0.1 | [Documentation](https://github.com/gotwarlost/istanbul) |
| Webpack | Bundle handler | v.3.8.1 | [Documentation](https://webpack.js.org/guides/) |

### Cordova plugins :

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  Deeplinks | URI navigation & Universal links | v.^1.0.15  
|  Network   | Device network access | 

### Ionic dependencies : 

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  IonicStorageModule  | Device storage | v.3.20.0  |
| Network | Network access module |


### Angular Dependencies : 

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  @angular/animations <br />@angular/common <br /> @angular/compiler  <br />@angular/compiler-cli: ^5.2.9 <br />@angular/core  <br /> @angular/forms  <br /> @angular/http <br /> @angular/platform-browser <br /> @angular/platform-browser-dynamic  | Core modules| v.5.2.9
| @angular/animations| animations for components | v.5.2.9

### Webpack plugins : 

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  angular2-template-loader  | Core modules| v.5.2.9 |
| 	html-loader			| 		bundles html files		| 
| @angular/animations| animations for components | v.5.2.9


### Karma plugins 

| Dependency package |  Description| Version |
|-|-|-|
|karma-chrome-launcher| loads karma in chrome | |
|karma-firefox-launcher| loads karma in firefox | |
|karma-jasmine | behavior driven framework | |
|karma-jasmine-html-reporter|  pretty ui for jasmine


## Angular Modules

| Dependency package |  Description| Version |
|-|-|-|
| @ionic/storage | Provides local storage to app  | |
| @ionic/network | Provides network module to app | |


## Ionic Modules

| Dependency package |  Description| Version |
|-|-|-|
| Native Page transitions | Animation plugin for page transitions in app | |


# Included features

## Environment handling

**Environment variables for build configuration.** 
Useful for handling different environment dependencies likes IPs or network UR.   


## Storage service

**Angular service for accessing application storage.** 
Useful for data caching, user auto-authentication and user parameters settings.

## Network heart & pulse

**Angular service for network state.** 
This service can be used to dispatch connectivity behaviors. Some other applications for service are request buffering and cache management.

Note that connectivity state is boolean.

## Auto resume auth 

Main App module has a built-in method to **load a session**.  If a `session` key is found in storage, App module will check for connectivity and execute a  `resume` from access authentication API class if `connected`.

useful for authentication based behaviours developments.

# Licence


## Good practices & conventions 

[Angular good practices](https://angular.io/guide/styleguide)
[TypeScript good practices](https://definitelytyped.org/guides/best-practices.html)
