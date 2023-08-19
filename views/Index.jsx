import React from 'react';


module.exports = function Index({ pokemon }) {

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
        margin: "0 auto 15px",
        textDecoration: "underline",
    };

    const listItemStyle = {
        listStyleType: "none",
        width: "fit-content",
    };

    const nameStyle = {
        margin: "0 0 0 20px",
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
        <div style={myStyle}>
            <h1 style={h1Style}>See All Of Our Pokemon!</h1>
            <ul>
                {pokemon.map((fighter, index) => {
                    return (
                        <li key={index} style={listItemStyle}>
                            <a href={`/pokemon/${index}`} style={nameStyle}><h2 >{capitalizePhrase(fighter.name)}</h2></a>
                        </li>
                    )
                })}
            </ul>
            <button style={buttonStyle}><a style={linkStyle} href="/">Back to home page</a></button>
        </div>
    );
};
