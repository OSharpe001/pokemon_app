const express = require("express");
const pokemon = require("./models/pokemon.js")

const app = express();
const port = 5006;

// const indexStyle = {
//     backgroundColor: '#888888',
//     textAlign: "center",
//     textDecoration: "underline",
// };

// VIEW ENGINE
app.set("views", `${__dirname}/views`);
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// LISTENER
app.listen(port, (req, res) => {
    console.log(`Today's port ${port} was brought to you by the good folks at Express Server! Please enjoy...`);
});

// ROUTES    //style={{textAlign: "center", border:"2px solid red"}} 
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to the Pokemon App!</h1><br/><br/><a href="pokemon">Go To Pokemon Page</a>`)
});

app.get("/pokemon", (req, res) => {
    res.render("Index", {
        pokemon: pokemon
    });
});

// nodemon