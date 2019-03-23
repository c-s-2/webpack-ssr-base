export default ({ content, initialState, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
      </head>

      <body>
        <div id="root">${content}</div>
      </body>

      <script>window.__STATE__ = ${initialState}</script>
      <script src="/dist/main.js"></script>
    </html>
  `;
};
