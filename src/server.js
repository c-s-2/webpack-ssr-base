import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/app';
import Template from './template';

const initialState = { text: 'Hello from the server!' };
const server = express();

server.use('/dist', express.static('dist'));

server.get('/', (req, res) => {
  const component = ReactDOMServer.renderToString(
    <App { ...initialState } />
  );
  const html = Template({
    content: component,
    initialState: JSON.stringify(initialState),
    title: 'Hello world',
  });
  res.send(html);
});

server.listen(8000);
