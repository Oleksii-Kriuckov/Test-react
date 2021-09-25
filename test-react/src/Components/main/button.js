import React from "react";

const buttonStyles = {
    backgroundColor: "#16a085",
    width: "190px",
    height: "50px",
    margin: "40px auto 60px",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold"
}

export default function Button () {
    return (
        <button style={buttonStyles}>get started</button>
    )
}