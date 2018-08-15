const path = require('path');
const fs = require('fs');

const handlerPublic = (req, res) => {
  let url = req.url;
  if (url === '/') url = 'index.html';
  let extension = url.split('.')[1];
  let extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    json: 'application/json'
  };
  let filePath = path.join(__dirname, '..', '..', 'public', url);
  fs.readFile(filePath, function(error, file) {
    if (error) {
      handler500(res);
    } else {
      res.writeHead(200, { 'Content-Type': extensionType[extension] });
      res.end(file);
    }
  });
};
