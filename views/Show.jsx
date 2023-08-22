import React from 'react';


module.exports = function Show({ pokemon }) {

    const capitalizePhrase = (noun) => {
        const cappedNoun = noun.charAt(0).toUpperCase()+noun.slice(1).toLowerCase();
        return cappedNoun;
    };

    const myStyle = {
        color: '#ddddff',
        backgroundColor: '#888888',
        textAlign: "center",
        textDecoration: "underline",
        minHeight: "98vh",
    };

    const h1Style = {
        color: "black",
        padding: "15px",
        margin: "0 auto 20px",
        textDecoration: "underline",
    };

    const h2Style = {
        fontSize: "25pt",
        margin: "40px auto 20px",
    };

    const imageStyle = {
        margin: "20px auto",
        border: "10px ridge black",
        padding: "30px",
        backgroundColor: '#99bbff',
    };

    const buttonStyle = {
        display: "block",
        margin: "20px auto",
    };

    const linkStyle = {
        fontSize: "12pt",
        padding: "4px 6px",
    };

    return (
        <div style={myStyle}>
            <h1 style={h1Style}>Gotta Catch 'Em All!</h1>
            <h2 style={h2Style}>{capitalizePhrase(pokemon.name)}</h2>
            <img style={imageStyle} src={`${pokemon.img}.jpg`} alt={capitalizePhrase(pokemon.name)} />
            <button style={buttonStyle}><a style={linkStyle} href="/pokemon">Back</a></button>
            <button style={buttonStyle}><a style={linkStyle} href="/">Back to home page</a></button>
        </div>
    );
};