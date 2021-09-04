# dkarnApp

This is my personal website - portfolio. It is implemented with Lightning Web Components Open Source. Lightning Web Components (LWC) Open Source is an implementation of that new breed of lightweight frameworks built on web standards. It uses custom elements, templates, shadow DOM, decorators, modules, and other new language constructs available in ECMAScript 6 and beyond. You can use this framework and build apps with your favorite tools, like Webpack, TypeScript, and Babel, and run it on Heroku, Google, or anywhere else. 

Other technologies used are Bootstrap 5, custom CSS and Express.js on the Node.js server. The web app is deployed and served on Heroku.

The website consists of 4 main modules:
1)The banner module which serves as the home of the page, with some basic info and a nice animation
2)The bio module
3)The timeline module, with some nice css styling
4)The contact module, with a contact form, a google recaptcha security, and useful links

Link: https://salty-meadow-09024.herokuapp.com


## How to start in case you clone this repo?

Start simple by running `yarn watch` (or `npm run watch`, if you set up the project with `npm`). This will start the project with a local development server.

The source files are located in the [`src`](./src) folder. All web components are within the [`src/client/modules`](./src/modules) folder. The folder hierarchy also represents the naming structure of the web components. The entry file for the custom Express configuration can be found in the ['src/server'](./src/server) folder.

Find more information on the main repo on [GitHub](https://github.com/muenzpraeger/create-lwc-app).
