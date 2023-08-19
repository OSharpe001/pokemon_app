import React from 'react'

module.exports = function Index({ pokemon }) {
    const myStyle = {
        color: '#ddddff',
        backgroundColor: '#888888',
        textAlign: "center",
        textDecoration: "underline",
    };

    const listStyle = {
        display: "flex",
        flexDirection: "row",
    };

    const nameStyle = {
        flex: "50%",
        margin: "10px 20px",
        textAlign: "left",
        alignSelf: "center",
    };

    const imageStyle = {
        flex: "50%",
        margin: "10px 20px",
        textAlign: "left",
        borderRadius: "0 16px",
        border: "2px ridge black"
    };
    const buttonStyle = {
        width: "fit-content",
        height: "fit-content",
        textDecoration: "none",
    };

    const capitalizePhrase = (noun) => {
        const cappedNoun = noun.charAt(0).toUpperCase()+noun.slice(1).toLowerCase();
        return cappedNoun;
    };

    return (
        <div style={myStyle}>
            <h1>See All The Pokemon!</h1>
            {pokemon.map((fighter, index) => {
                return (
                    <li key={index} style={listStyle}>
                        <h2 style={nameStyle}>{capitalizePhrase(fighter.name)}</h2>
                        <img style={imageStyle} src={`${fighter.img}.png`} alt={capitalizePhrase(fighter.name)} />
                        <br/><br/>
                    </li>
                )
            })}
            <button style={buttonStyle}><a href="/">Back to home page</a></button>
        </div>
    );
};
