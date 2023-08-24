require("dotenv").config();
const mongoose = require("mongoose");

const express = require("express");
const Pokemon = require("./models/pokemonSchema.js");

const app = express();
const port = 5006;

// CONNECT TO DATABASE
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// MAKE SURE DATABASE IS CONNECTED
mongoose.connection.once("open", () => {
    console.log("Captain,... Our DataBase is now officially connected!");
});

// ERROR SUCCESS MESSAGES ABOUT CONNECTION
const db = mongoose.connection;
// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongodb not running?"));
db.on("close", () => console.log("mongo disconnected"));


// VIEW ENGINE
app.set("views", `${__dirname}/views`);
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// MIDDLEWARE
app.use((req, res, next) => {
    console.log("I run for all routes!")
    next();
});
// THIS ALLOWS THE BODY OF A POST REQUEST
app.use(express.urlencoded({extended: false}));

// LISTENER
app.listen(port, (req, res) => {
    console.log(`Today's port ${port} was brought to you by the good folks at Express Server! Please enjoy...`);
});

// ROUTES--

// MAIN INDEX PAGE ***(NEED TO CREATE A REACT-TYPE INDEX PAGE AND RENDER IT LIKE LEO!)***
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to the Pokemon App!</h1><br/><br/><button><a href="pokemon">Go To Pokemon Page</a></button>`);
});

app.get("/pokemon", async (req, res) => {
    const dbPokemon = await Pokemon.find({})
    res.render("Index", {
        pokemon: dbPokemon
    });
});

// -"NEW" POKEMON ROUTE-
app.get("/pokemon/new", (req, res) => {
    res.render("New");
});

// POST ROUTE FOR POKEMON
app.post("/pokemon", async (req,res) => {
    console.log("REQ.BODY BEFORE ANY CHANGES: ", req.body);
    !req.body.img || !req.body.img.includes("http") ? req.body.img = `http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}` : req.body.img = req.body.img.toLowerCase();
    req.body.name = req.body.name.toLowerCase();
    // pokemon.push(req.body);
    console.log("REQ.BODY AFTER CHANGES: ", req.body);
    await Pokemon.create(req.body);
    res.redirect("/pokemon");
});

app.get("/pokemon/:id", async (req, res) => {
    const aPokemon = await Pokemon.findById(req.params.id);
    res.render("Show", {
        pokemon: aPokemon
    });
});

// nodemon