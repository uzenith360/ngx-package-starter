# ngx-package-starter

An Angular library NPM starter (or example) project to ease setup of Angular libraries as NPM packages from your GitHub repo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5 but updated to version 15.0.4.

## Setup

1. Install the latest version of angular CLI on your machine
2. git clone https://github.com/uzenith360/npm-package-starter
3. npm install
4. Search/replace my github handle and NPM Package name/Github repo with yours
5. Create github/NPM/Synk tokens (See section below) and add to the secrets in your github repo
6. Delete the ngx-lib example library together with references in the angular.json and tsconfig.json files then add your library using this command (`ng generate library your-library-here`)

## Secrets

For this setup you will need to create 3 auth tokens and save them as secrets in your github repo's settings, 
1. NPM token: An Automation-type access token from npm to be used solely in CI environments so that it is able to work around your account’s 2FA. To create one, go to https://www.npmjs.com/settings/\<your-npm-account\>/tokens. Be sure to select the type “Automation” as this will be used in a CI/CD workflow. i named it NPM_TOKEN
2. Github repo token: A personal access token from GitHub, to enable github actions access your public repositories. To create one go to https://github.com/settings/tokens select Personal access tokens > Tokens (Classic). Click on the button to create new token and select public_repo scope. I named it GH_Token
3. Synk API token: Snyk is a tool that simplifies security checks, to help monitor for, alert on, and offer assistance to mitigate vulnerabilities. Snyk is free, so sign-up and get your [Snyk API Token](https://app.snyk.io/account). Add your Snyk API Token as a Repository Secret on GitHub: https://github.com/\<your-account-or-organization\>/\<your-repo-name\>/settings/secrets/actions/new. I named it SNYK_TOKEN

## Support

For support, email wogwugwu.zenith@gmail.com, I will do my best to respond to all issues

## Important

Don't forget to search/replace my github handle and NPM Package name/Github repo with yours, after you fork/clone/download this repo :)

If you like it remember to **give repo a star**⭐
