# Personal Website 👤

## Description

This application provides the frontend source code for my personal website at http://rolandhalasz.hu.

## Requirements:

| Name               | Version |
| ------------------ | ------- |
| Angular CLI        | 18.0.5  |
| Node               | 20.14.0 |
| npm                | 10.7.0  |
| TypeScript         | 5.4.2   |
| Git Bash (Windows) | 5.2.26  |

## Project setup

### Generating the app

For generating this application the following command was used:

```shell
ng new app-client --skip-git --standalone --strict --routing=true --prefix app --style scss --inline-template false --inline-style false --directory ./
```

Click [here](https://angular.io/cli/new) for more info about these flags.

### Development server

Run `npm run start:dev` for a dev server. Navigate to `http://localhost:4200`.
The application will automatically reload if you change any of the source files.

### Build

Run `npm run build` or `npm run build:dev` to build the project. The build artifacts will be stored
in the `dist/` directory.

#### Production Build / Deployment

To ensure proper deployment to production, it's essential to run the `npm run prepare:prod`
script before deploying your application.

### Setting Up Git Bash for Windows

Bash is required for some scripts that Husky uses. To ensure Husky's Git hooks
work correctly on Windows, follow these steps:

#### Install Git Bash

Download and install Git Bash from the official Git website:
[Git Downloads](https://git-scm.com/downloads)

#### Adjust PATH Environment Variable

After installing Git Bash:

- In the "**Environment Variables**" dialog, under "**System variables**", find the
  **Path variable**, select it, and click "**Edit...**".
- Add the path to Git Bash (`C:\Program Files\Git\bin` by default) to the list of paths.
- Restart _(optional)_

#### Fix GitHub Desktop not being able to use Bash:

Add `C:\Program Files\Git\bin` to Path for both variable types: User and System -
and put it before `"%SystemRoot%\system32"`.

If that does not work try changing `npm` to `npm.cmd` in `C:\Program Files\nodejs`.

### Linting and Formatting

This Angular project is configured with [Prettier](https://prettier.io/) as the
code formatter and [ESLint](https://github.com/angular-eslint/angular-eslint) as the linter to
maintain code quality and consistency.

#### Setting Up Prettier and ESLint in Visual Studio Code

To set up Prettier and ESLint in Visual Studio Code for this project, follow these steps:

##### Running these tools from the terminal

- ESLint: `npm run lint`
- Prettier: `npm run prettier`
- **Both ESLint and Prettier:** `npm run pretty-lint`

##### Install VS Code Extensions

- Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Install the [Prettier - Code formatter extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

##### Configure VS Code

Open your VS Code settings (Ctrl/Cmd + ,), and add or modify the following settings in your settings.json file:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "eslint.validate": ["typescript"]
}
```

### Running unit tests

To run all your tests, use the command `npm run test`. For interactive execution of tests,
use `npm run test:watch`. This allows for a more dynamic testing experience.
([more info](https://medium.com/edataconsulting/how-to-switch-from-karma-to-jest-using-angular-7335588ffdf0))

## File Structure Recommendation

For a scalable and maintainable Angular application, it's crucial to organize your files
effectively. Below is the recommended file structure for your project. For further information
about Angular file structure and best practices, refer to
[this article by Shijin Nath](https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5).

<details>
  <summary>Click to expand the recommended file structure</summary>

```
∇ app
    ∇ core
         ∇ guards
              auth.guard.ts
              module-import.guard.ts
              no-auth.guard.ts
         ∇ interceptor
              token.interceptor.ts
              error.interceptor.ts
         ∇ services
              service-a.service.ts
              service-b.service.ts
         ∇ components
              ∇ navbar
                    navbar.component.html|scss|ts
              ∇ page-not-found
                    page-not-found.component.html|scss|ts
         ∇ constants
              constant-a.ts
              constant-b.ts
         ∇ enums
              enum-a.ts
              enum-b.ts
         ∇ models
              model-a.ts
              model-b.ts
         ∇ utils
              common-functions.ts
         ∇ mocks
              mock-data-a.ts
              mock-data-b.ts
    ∇ features
         ∇ feature-a
              ∇ components
                    ∇ scoped-shared-component-a
                            scoped-shared-component-a.component.html|scss|ts
                    ∇ scoped-shared-component-b
                            scoped-shared-component-b.component.html|scss|ts
              ∇ pages
                   ∇ page-a
                        page-a.component.html|scss|ts
                   ∇ page-b
                        page-b.component.html|scss|ts
              ∇ models
                    scoped-model-a.model.ts
                    scoped-model-b.model.ts
              ∇ services
                    scoped-service-a.service.ts
                    scoped-service-b.service.ts
              ∇ mocks
                    scoped-mock-data-a.ts
                    scoped-mock-data-b.ts
              feature-a-routing.module.ts
              feature-a.module.ts
              feature-a.component.html|scss|ts
    ∇ shared
         ∇ components
              ∇ shared-button
                   shared-button.component.html|scss|ts
         ∇ directives
              shared-directive.ts
         ∇ pipes
              shared-pipe.ts
         ∇ mocks
              shared-mock-data.ts
         shared.module.ts
    styles.scss
    ∇ styles
        app-loading.scss
        company-colors.scss
        spinners.scss
        variables.scss
    ∇ assets
        ∇ i18n
            lang-a.json
            lang-b.json
        ∇ images
            image-a.svg
            image-b.svg
        ∇ static
            structure-a.json
            structure-b.json
        ∇ icons
            custom-icon-a.svg
            custom-icon-b.svg
```

</details>
