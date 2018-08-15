const handlers = require('./handlers/handlers.js');

const publicURLs = [
  '/index1.html',
  '/signUp.html',
  '/signUp.js',
  '/index.js',
  '/style.css',
  '/xhr.js',
  '/logIn.js',
  '/logIn.html'
];

/* Router fn to deal with 4 requests - the homepage, an asset (e.g. CSS file),
a client data request and an else which produces a 404 page. These requests call
on functions in the handlers file to produce a response. */
const router = (request, response) => {
  const { url } = request;
  if (url === '/' || publicURLs.includes(url)) {
    handlers.publicHandler(request, response);
  } else {
    handlers.Handler404(request, response);
  }
};

module.exports = router;
