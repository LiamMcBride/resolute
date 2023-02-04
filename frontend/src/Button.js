import React from "react";

export function ConfirmButton(text){
    const buttonStyle = {
        borderRadius: "5px",
        backgroundColor: "#61C9A8",
        border: "none",
        padding: "4px",
        minWidth: "122.5px",
        minHeight: "35px",
        color: "white",
        fontSize: "16px",
        fontWeight: "bold",
        margin: "16px"
    }

    return (
        <button style={buttonStyle}>{text}</button>
    );
}