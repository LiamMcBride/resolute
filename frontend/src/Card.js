import React from "react";
import { ConfirmButton } from "./Button";




export function Card(title, internalObjects){

    const cardStyle = {
        backgroundColor: "#D9D9D9",
        display: "block",
        width: "475px",
        minHeight: "150px",
        borderRadius: "10px",
        padding: "16px",
        textAlign: "center",
        margin: "8px"
    }

    const h1Style = {
        fontSize: "24px",
        color: "black"
    }

    return (
        <div class="card" style={cardStyle}>
            <h1 style={h1Style}>{title}</h1>
            {internalObjects}
        </div>
    );
}

export function NewTaskCard(){
    return (Card("New Task", ConfirmButton("Create")));
}