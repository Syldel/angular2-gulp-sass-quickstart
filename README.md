Angular2 with TypeScript and Gulp
=================================

A basic Angular2 application with Gulp as build system.

#### 1. Prerequisites

*nodejs* must be installed on your system and the below global node packages must be installed:

- gulp

> npm i -g gulp

- gulp-cli

> npm i -g gulp-cli

- typings

> npm i -g typings@1.3.3

- typescript

> npm i -g typescript@2.0.2

- ts-node

> npm i -g ts-node@1.3.0

- bower

> npm install -g bower


#### 3. Installing dependencies

Install Yarn if it's not already done :

> npm install -g yarn

To install the packages, from the root of the working directory, run yarn or yarn install

> yarn install

`node_modules` and `typings` directories will be created during the install.

Adding a new dependency is easy, simply call :
> yarn add [package-name]

For dev dependencies, peer dependencies and optional dependencies you pass the --dev --peer --optional respectively.
> yarn add gulp --dev


#### 4. Building the project

Build the project by running the following command:

> gulp clean & gulp install

<!-- `site/web` directory will be created during the build -->


#### 5. Starting the application

Start the application by running the following command:

> gulp serve

The application will be displayed in the browser.
