const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const pokemonSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        img:  String,
    },
);

const Pokemon = model("Pokemon", pokemonSchema);

module.exports = Pokemon;