# Comics backend

Backend in nodejs that consumes the COMIC VINE api.

## Requirements

For development, you will need the next tools installed in your environment::

- [Node.js](https://nodejs.org/es/)

### Recommended facilities

- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Postman](https://www.postman.com/)

### Text editor

The editor used to develop this project is: [Visual Studio Code](https://code.visualstudio.com/).

### Recommended plugins

- Prettier – Code Formatter
- JavaScript (ES6) code snippets
- EsLint

---

## Installations

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.16.1

    $ npm --version
    6.13.4

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

#### Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    git pull
    npm prune
    npm install

To run those 3 commands you can just do

    npm run pull

---

## Instalation

To install the project, you should follow the next steps:

    git clone https://github.com/Alula96/comics-backend.git
    cd comics-backend
    npm install

---

## Run the server

To run the server, you should execute in shell:

    node src/server.js

More information: [https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line](https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line).

### Use on development

It is recommended to use nodemon to work easily in development, you should execute in shell:

    nodemon

---

## Execute tests

To execute tests, you should execute in shell:

    npm test

**Note:** Test scripts are definite on package.json.
More information: [Jest CLI Options](https://jestjs.io/docs/es-ES/cli)

### Watch mode

To execute test in watch mode, you should execute:

    npm test:watch

### Code coverage

To know the project's coverage, you should execute:

    npm test:coverage

---

## Languages & tools

### Nodejs

- [Nodejs](https://nodejs.org/es/) It is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [ESLint](https://eslint.org/) It is used to find and solve problems in your typescript or javascript code.

### Tools

- [Prettier](https://prettier.io/) as a code formatter.

**Note:** Always make sure to use good practices.

---

## Dependencies

The next dependencies are used in this project:

- [Axios](https://www.npmjs.com/package/axios) to make http requests.
- [Express](https://www.npmjs.com/package/express) as framework.

---

## Repository branches

`Gitflow` was used as a tool to manage repository structure as follow:

### Develop and Master Branches

- **master:** Stores the official release history.
- **develop:** Serves as an integration branch for features.

### Branch prefixes

- **feature/:** Each new feature should reside in its own branch, which can be pushed to the central repository for `backup/collaboration`.

More information: [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

---

## Architecture

Folder structure is based on the next architecture diagram:

![Architecture diagram](https://www.coreycleary.me/_next/static/media/Express-REST-API-Struc.aa7ecaa0c41dbb7344c70665a5f5e259.png)

### Reference articles

The following articles were used for the definition of the folder structure:

- [Nodejs File Stucture Express](https://github.com/iamsrujal/nodejs-file-stucture-express).
- [Project structure for an Express REST API when there is no "standard way"](https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way).

## What's inside?

### Folder structure

A look at the top-level files and directories you'll see in this project.

```
    .
    ├── __test__/
    ├── node_modules/
    ├── src/
    |   ├── constants/
    |   ├── controllers/
    |   ├── models/
    |   ├── routes/
    |   ├── services/
    |   └── utils/
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md
```

1. **`/test`**: contains source files tests that correspond all application.

2. **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

3. **`/src`**: This directory contain all of the code related to thos backend application. `src` is a convention for “source code”.

    1. **`/constants`**: This directory contain all application constants files.

    2. **`/controllers`**: It saves the application controllers that will be used to orchestrate the calls of the services and defines data will be returned to the user.

    3. **`/models`**: Save classes which represents data object which can be used for transferring data in application

    4. **`/routes`**: Save application routes, They should only chain together your `controllers`.

    5. **`/services`**: Save application services; It should contain the majority of your business logic: - logic that encapsulates your business requirements, calls your data access layer or models, calls API's external to the Node application. And in general, contains most of your algorithmic code.

    6. **`/utils`**: Save common logic functions that are not necessarily specific to your business logic or domain.

4. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

6. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

7. **`README.md`**: A text file containing useful reference information about your project.

---
