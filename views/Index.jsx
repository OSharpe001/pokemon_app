import React from 'react';
const Default = require("./layout/Default");


module.exports = function Index({ pokemon }) {

    // console.log("POKEMON INFO: ", pokemon)

    const capitalizePhrase = (noun) => {
        const cappedNoun = noun.charAt(0).toUpperCase()+noun.slice(1).toLowerCase();
        return cappedNoun;
    };

    const myStyle = {
        backgroundColor: '#888888',
        textAlign: "center",
        minHeight: "98vh",
    };

    const h1Style = {
        color: "black",
        padding: "15px",
        margin: "0 auto 15px",
        textDecoration: "underline",
    };

    const listItemStyle = {
        listStyleType: "none",
        width: "fit-content",
    };

    const nameStyle = {
        margin: "0 0 0 30px",
        textAlign: "left",
    };

    const buttonStyle = {
        margin: "20px auto",
    };

    const linkStyle = {
        fontSize: "12pt",
        padding: "4px 6px",
    };

    return (
        <Default bodyStyle={myStyle} headerStyle={h1Style} title={"See All Of Our Pokemon!"}>
            <nav>
                <button style={buttonStyle}><a style={linkStyle} href="/pokemon/new">Create New Pokemon Entry</a></button>
            </nav>
            <ul>
                {pokemon.map((fighter, index) => (
                        <li key={index} style={listItemStyle}>
                            <a href={`/pokemon/${fighter.id}`} style={nameStyle}><h2 >{capitalizePhrase(fighter.name)}</h2></a>
                            <form  method ="POST" action={`/pokemon/${fighter.id}?_method=DELETE`}>
                                <input type="submit" value="DELETE" />
                            </form>
                            <a href={`/pokemon/${fighter.id}/edit`}>Edit This Pokemon</a>
                        </li>
                    )
                )}
            </ul>
            <button style={buttonStyle}><a style={linkStyle} href="/">Back to home page</a></button>
        </Default>
    );
};
