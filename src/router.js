const handlers = require('./handlers/handlers.js');

const assetURLs = [
  '/index.html',
  '/signup.html',
  '/signup.js',
  '/dom.js',
  '/style.css',
  '/xhr.js'
];

/* Router fn to deal with 4 requests - the homepage, an asset (e.g. CSS file),
a client data request and an else which produces a 404 page. These requests call
on functions in the handlers file to produce a response. */
const router = (request, response) => {
  const { url } = request;
  if (url === '/') {
    handlers.homePageHandler(response);
  } else if (assetURLs.includes(url)) {
    handlers.signupHandler(url, response);
  } else if (url.includes('/signup')) {
    handlers.loginHandler(request, response);
  } else {
    handlers.notFoundHandler(response);
  }
};

module.exports = router;
