const express = require("express");
const pokemon = require("./models/pokemon.js");

const app = express();
const port = 5006;

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
app.use(express.urlencoded({extended: false}))

// LISTENER
app.listen(port, (req, res) => {
    console.log(`Today's port ${port} was brought to you by the good folks at Express Server! Please enjoy...`);
});

// ROUTES
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to the Pokemon App!</h1><br/><br/><button><a href="pokemon">Go To Pokemon Page</a></button>`);
});

app.get("/pokemon", (req, res) => {
    res.render("Index", {
        pokemon: pokemon
    });
});

// -"NEW" POKEMON ROUTE-
app.get("/pokemon/new", (req, res) => {
    res.render("New");
});
// POST ROUTE FOR POKEMON
app.post("/pokemon", (req,res) => {
    console.log("REQ.BODY BEFORE ANY CHANGES: ", req.body);
    !req.body.img || !req.body.img.includes("http") ? req.body.img = `http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}` : req.body.img = req.body.img.toLowerCase();
    req.body.name = req.body.name.toLowerCase();
    pokemon.push(req.body);
    console.log("REQ.BODY AFTER CHANGES: ", req.body);
    res.redirect("/pokemon");
});

app.get("/pokemon/:id", (req, res) => {
    res.render("Show", {
        pokemon: pokemon[req.params.id]
    });
});

// nodemon