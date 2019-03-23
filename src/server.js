import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/app';
import Template from './template';

const server = express();

server.use('/dist', express.static('dist'));

server.get('/', (req, res) => {
  const component = ReactDOMServer.renderToString(
    <App location="server" />
  );
  const html = Template({
    content: component,
    initialState: JSON.stringify({ location: 'server' }),
    title: 'SSR from the server',
  });
  res.send(html);
});

server.listen(8000);
