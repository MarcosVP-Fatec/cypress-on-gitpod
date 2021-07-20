[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](gitpod.io/#https://github.com/MarcosVP-Fatec/cypress-on-gitpod)

# Vídeo explicativo
[Vídeo Youtube](https://www.youtube.com/watch?v=gTRMuWCp8mE)

## Cria um novo projeto Cypress
>> npm init [--yes]
## Inslatar uma versão específica ou a última disponível
## Isto muda o package.json colocando a dependência lá dentro
>> npm install -D cypress@4.1 | npm install -D cypress
## Criar a estrutura de pastas e abrir o Cypress
>> ./node_modules/.bin/cypress open

# cypress-on-gitpod
A template repository to run [Cypress.io](https://www.cypress.io/) on [Gitpod.io](https://www.gitpod.io/).

## Getting Started

Click the Gitpod - Ready-to-Code badge above to start the development environment in your browser.

### Gitpod Disount

If you like the simplicity of a one-click development environment, you can contact me to get 30% off for the first 3 months of your Gitpod
subscription.

## How does it work?

The Gitpod configuration in `.gitpod.yml` contains the following settings:
* `image`: A custom Docker image to use for the development environment workspace.
* `tasks`: Two terminals, one that install dependencies and starts the development server. The other one that opens Cypress.
* `ports`: Instructions to open port `6080` in a new tab. This is where the Virtual Desktop runs and where you can interact with Cypress.

The `.gitpod.Dockerfile`:
* Uses the `gitpod/workspace-full-vnc` base image, which includes a virtual desktop.
* Installs the required dependencies to run Cypress.
    * This is documented at https://docs.cypress.io/guides/guides/continuous-integration.html#Dependencies.
