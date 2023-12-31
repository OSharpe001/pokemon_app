import React from 'react';
const Default = require("./layout/Default");


module.exports = function New() {

    const myStyle = {
        backgroundColor: '#888888',
        textAlign: "center",
        minHeight: "98vh",
    };

    const h1Style = {
        color: "black",
        margin: "0 auto 15px",
        padding: "15px",
        textDecoration: "underline",
    };

    const labelStyle = {
        fontSize: "20pt",
        margin: "40px auto 20px",
        display: "block",
    };

    const inputStyle = {
        width: "32ch",
        fontSize: "12pt",
        textAlign: "center",
    };

    const buttonStyle = {
        margin: "20px auto",
    };

    const submitButtonStyle = {
        margin: "10vh auto",
        fontSize: "12pt",
        cursor: "pointer"
    };

    const linkStyle = {
        fontSize: "12pt",
        padding: "4px 6px",
    };

  return (
    <Default bodyStyle={myStyle} headerStyle={h1Style} title={"New Pokemon Entry"}>
        <form action="/pokemon" method="POST">
            <label style={labelStyle} htmlFor="name">Pokemon Name: </label>
            <input style={inputStyle} name="name" type="text" placeholder="Pikachu"/>
            <br/>
            <label style={labelStyle} htmlFor="img">Pokemon Picture Url: </label>
            <input style={inputStyle} name="img" type="text" placeholder="http://img.pokemondb.net/artwork/Pikachu"/>
            <br/>
            <input style={submitButtonStyle}type="submit" value="Create Pokemon Entry"/>
            <br/>
            <button style={buttonStyle}><a style={linkStyle} href="/pokemon">Cancel</a></button>
            <br/>
        </form>
    </Default>
  );
};