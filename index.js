const http = require(http);
const express = require(express);
const app = express();
const server = http.createServer(app);
const es6Renderer = require("express-es6-template-engine");

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

PORT = 3000;
HOST = "0.0.0.0";

server.listen(PORT, HOST, () => {
    console.log(`Running on ${PORT}`)
}