export default ({ content, initialState, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${title}</title>
        <link rel="stylesheet" href="../dist/main.css" type="text/css" />
      </head>

      <body>
        <main id="root">${content}</main>
      </body>

      <script>window.__STATE__ = ${initialState}</script>
      <script src="/dist/main.js"></script>
    </html>
  `;
};
