# webpack-4-base
Base setup for an SSR React app using Express

- Webpack 4
- Babel 7
- React 16
- Express/Nodemon
- Hot Module Replacement

__Client__

`npm run client`

_Runs client version of the app using webpack dev server with Hot Module Replacement_

__Server__

`npm run server`

_Runs server side rendered version of the app which runs hydrated component on the client_

__Build__

`npm run compile`

__TODO__

- Properly hydrate the client version with the initial state from the server (may need to separately bundle the app client entry file to stop issues when packing)

- Stylesheets
