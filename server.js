require("dotenv").config();
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const express = require("express");
const Pokemon = require("./models/pokemonSchema.js");

const app = express();
const port = 5006;

// CONNECT TO DATABASE
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// ERROR SUCCESS MESSAGES ABOUT CONNECTION
const db = mongoose.connection;
// DEFINE CALLBACK FUNCTIONS FOR ERROR AND CLOSE EVENTS
db.on("error", (err) => console.log(err.message + " is mongodb not running?"));
db.on("close", () => console.log("mongo disconnected"));

// MAKE SURE DATABASE IS CONNECTED
db.once("open", () => {
    console.log("Captain,... Our DataBase is now officially connected!");
});

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
// THIS LETS YOU USE HTTP VERBS (PUT, DELETE,...) IN PLACES WHERE CLIENT DOESN'T SUPPORT IT
app.use(methodOverride("_method"));

// LISTENER
app.listen(port, (req, res) => {
    console.log(`Today's port ${port} was brought to you by the good folks at Express Server! Please enjoy...`);
});

// ROUTES--

// MAIN INDEX PAGE
app.get("/", (req, res) => {
    res.render("Home", {})
});

// POKEMON LIST ROUTE
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
    !req.body.img || !req.body.img.includes("http") ? req.body.img = `http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}` : req.body.img = req.body.img.toLowerCase();
    req.body.name = req.body.name.toLowerCase();
    await Pokemon.create(req.body);
    res.redirect("/pokemon");
});

// POKEMON SHOW ROUTE
app.get("/pokemon/:id", async (req, res) => {
    const aPokemon = await Pokemon.findById(req.params.id);
    res.render("Show", {
        pokemon: aPokemon
    });
});

// POKEMON EDIT METHOD
app.get("/pokemon/:id/edit", async (req, res) => {
    const editedPokemon = await Pokemon.findById(req.params.id);
    res.render("Edit", {
        pokemon: editedPokemon
    });
});

// POKEMON UPDATE METHOD
app.put("/pokemon/:id", async (req, res) => {
    !req.body.img || !req.body.img.includes("http") ? req.body.img = `http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}` : req.body.img = req.body.img.toLowerCase();
    req.body.name = req.body.name.toLowerCase();
    console.log("EDIT REQ.BODY AFTER CHANGES: ", req.body);
    await Pokemon.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/pokemon/${req.params.id}`);
});

// POKEMON DELETE METHOD
app.delete("/pokemon/:id", async (req, res) => {
    await Pokemon.findByIdAndRemove(req.params.id);
    res.redirect("/pokemon");
});




// nodemon