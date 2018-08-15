const https = require('https');
//const router = require('./router');

/* Creating server */
const server = https.createServer();
/* Port for local host is 9000, process.env allows for Heroku */
const port = process.env.PORT || 4444;
/* Set-up listen on the server, inputting the port and a callback to console log the port number. */
server.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
