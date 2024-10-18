# testIO

This project is an end-to-end testing setup using WebdriverIO with Mocha framework. It includes various services and reporters to enhance the testing experience.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Services](#services)
- [Reporters](#reporters)
- [TypeScript Configuration](#typescript-configuration)

## Installation

To get started, clone the repository and install the dependencies:

```sh
git clone <repository-url>
cd testIO
npm install
```
# WebdriverIO Configuration Overview

## Configuration
The main configuration file for WebdriverIO is `wdio.conf.ts`. This file includes settings for the test runner, capabilities, services, and hooks.

### Key Configuration Options
- **Runner Configuration:** Specifies the runner as `'local'`.
- **Test Files:** Specifies the test specs located in `./test/specs/**/*.ts`.
- **Capabilities:** Defines the browser capabilities, e.g., Chrome.
- **Services:** Includes services like `lighthouse` and `vscode`.
- **Framework:** Uses **Mocha** as the test framework.
- **Reporters:** Uses `spec` and `allure` reporters.

## Running Tests
To run the tests, use the following command:
```bash
npm run wdio
```
This will execute the tests based on the configuration in `wdio.conf.ts`.

## Project Structure
```
.DS_Store
.env
allure-results/
package.json
test/
    .DS_Store
    pageobjects/
    specs/
tsconfig.json
wdio.conf.ts
```

- **allure-results/**: Directory where Allure reports are stored.
- **test/**: Contains the test specifications and page objects.
- **tsconfig.json**: TypeScript configuration file.
- **wdio.conf.ts**: WebdriverIO configuration file.

## Scripts
The `package.json` file includes the following script:

- **wdio**: Runs the WebdriverIO tests using the command `wdio run ./wdio.conf.ts`.

## Services
The project uses the following WebdriverIO services:
- **Lighthouse Service**: For performance testing.
- **VSCode Service**: For integration with Visual Studio Code.

## Reporters
The project uses the following reporters:
- **Spec Reporter**: Provides a detailed report of the test execution.
- **Allure Reporter**: Generates Allure reports, stored in the `allure-results` directory.

## TypeScript Configuration
The TypeScript configuration is defined in `tsconfig.json`. Key options include:

- **moduleResolution**: `node`
- **module**: `ESNext`
- **target**: `es2022`
- **types**: Includes types for Node, WebdriverIO, Mocha, and various services.
- **strict**: Enables strict type-checking options.
