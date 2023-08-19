const express = require("express");
const pokemon = require("./models/pokemon.js");

const app = express();
const port = 5006;

// VIEW ENGINE
app.set("views", `${__dirname}/views`);
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

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

app.get("/pokemon/:id", (req, res) => {
    res.render("Show", {
        pokemon: pokemon[req.params.id]
    });
});

// nodemon