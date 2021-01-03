const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const es6Renderer = require("express-es6-template-engine");
const homeRouter = require("./routers/home");
const data = require("./data.json");
const movieRouter =require("./routers/movie");
const { User } = require("./models")
const bcrypt = require("bcryptjs")

const morgan = require("morgan");
const logger = morgan("tiny");

PORT = 3000;
HOST = "0.0.0.0";

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(logger);
app.use("/", homeRouter);
app.use("/movies", movieRouter)
app.use(express.urlencoded({ extended: true }))

app.get("/create", (req, res) => {
    res.send(`
    <form method="POST">
    <input type="text" name="username" autofocus placeholder="Username">
    <br>
    <input type="password" name="password">
    <br>
    <input type="submit" value="Create User">
    </form>`);
});



app.post("/create", async (req, res) => {
    const {
        username,
        password
    } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
        username,
        hash
    });
    console.log(newUser)
    res.send("user created") // This will inform users that the user info was created
})




app.get ('/restricted', (req, res) => {
    res.send(`<h1>Restricted!</h1>`)
})



server.listen(PORT, HOST, () => {
    console.log(`Running on ${PORT}`)
})