# Boilerplate using Typescript/React/SASS/Webpack

Updated as of May 2019 for the latest public builds of all the mentioned things

## Before You Start

Make sure you have the correct version of Node installed. You need 8.X.X or above.

```
node --version
```

If you don't have it installed, or you have an old version, update [here](https://nodejs.org/en/download/).

## Installation

As this is intended to be used as a starter kit, it is suggested that you clone the repo into a folder with the name of your intended project.

```
git clone https://github.com/ALTinners/react-typescript-sass-webpack-starter MyProjectName
cd MyProjectName
npm install
```

## Hot Reloading and Production Builds

For dev work - use the `webpack-dev-server`

```
npm run build-dev
```

A minified build can also be produced for a proper deployment using

```
npm run build-prod
```

Config for webpack can be done in the root `webpack.*.js` files.