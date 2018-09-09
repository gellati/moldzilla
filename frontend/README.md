# Introduction

## Moldzilla mock frontend

User interface for Moldzilla, built with [React](https://reactjs.org/) and [Create React App](https://github.com/facebook/create-react-app). Styling with [styled components](https://www.styled-components.com/).

## Usage

Install dependencies with

    npm install

How to start:

    npm run start

opens up the application in `localhost:3000`. The application is hot reloaded whenever the source code is changed.

A github pages demo can be seen at [https://gellati.github.io/moldzilla/](https://gellati.github.io/moldzilla/).

In order to build and deploy the github page, run

    npm run deploy

This will deploy the latest version of the project to github pages. It also updates the gh-pages development branch, which contains the github pages source code.

### Structure

The components are in the `src/components` folder.

These components are part of the password strength meter project:
* Dashboard
* Material
* ResultArea

The Dashboard contains the components for the materials, and a result area for the inputs from the materials.

### Documentation

More detailed documentation on this project's setup with Create React App [in the CRA_README](CRA_README.md)
