const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const es6Renderer = require("express-es6-template-engine");
const homeRouter = require("./routers/home");
const morgan = require("morgan");
const logger = morgan("tiny");
const data = require("./data.json");
const movieRouter =require("./routers/movie");


PORT = 3000;
HOST = "0.0.0.0";

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(logger);
app.use("/", homeRouter);
app.use("/movies", movieRouter)





server.listen(PORT, HOST, () => {
    console.log(`Running on ${PORT}`)
})