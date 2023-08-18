const express = require("express");
const pokemon = require("./models/pokemon.js")

const app = express();
const port = 5006;

// LISTENER
app.listen(port, (req, res) => {
    console.log(`Today's port ${port} was brought to you by the good folks at Express Server! Please enjoy...`);
});

// ROUTES    //style={{textAlign: "center", border:"2px solid red"}} 
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to the Pokemon App!</h1>`)
});

app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});

// nodemon