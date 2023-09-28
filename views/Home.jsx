import React from 'react';
import Default from "./layout/Default";


module.exports = function Home() {

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

    const buttonStyle = {
        margin: "20px auto",
    };

    const linkStyle = {
        fontSize: "12pt",
        padding: "4px 6px",
    };

  return (
    <Default bodyStyle={myStyle} headerStyle={h1Style} title={"Welcome to the Pokemon App!"}>
        <button style={buttonStyle}><a style={linkStyle} href="pokemon">Go To Pokemon Page</a></button>
    </Default>
  );
};
