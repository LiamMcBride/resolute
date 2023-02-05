import React from "react";
import { ConfirmButton } from "./Button";
import { green } from "./Colors";




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

function Column(percent){
    let columnStyle = {
        display: "inline-block",
        backgroundColor: green,
        // minHeight: "10px",
        minHeight: (percent) + "%",
        width: "75%",
        position: "absolute",
        bottom: "0px",
        left: "12.5%",
        // transform: "translateX(15%)"
    }

    return (<div style={columnStyle}></div>);
}

function ProductivityGraph(data){
    let dataSize = data['columnData'].length
    let colData = data['columnData']
    let colReadData = data['columnData']
    let labels = data['columnNames']
    let max = data['max']

    for(let i = 0; i < dataSize; i++){
        colReadData[i] = colData[i] / max * 100
    }

    let graphStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${dataSize.toString()},1fr)`,
        gridColumnGap: "0px",
        // gridTemplateRows: "300px",
        heigth: "300px"
    }
    //  grid-template-columns: repeat(4, 1fr);


    let daysStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${dataSize.toString()},1fr)`,
        gridColumnGap: "0px",
        textAlign: "center"
    }



    let outerColumnStyle = {
        display: "block",
        position: "relative",
        heigth: "100px",
        minHeight: "150px",
        // border: "solid 1px black"
    }

    let hrStyle = {
        border: "solid 2px black",
        marginTop: "0px"
    }

    return (
        <div>
            <div style={graphStyle}>
                {colReadData.map((d) => {
                    return (
                        <div style={outerColumnStyle}>
                            {Column(d.toString())}
                        </div>
                    )
                })}                
            </div>
            <hr style={hrStyle}></hr>
            <div style={daysStyle}>
                {labels.map((d) => {
                    return (
                        <div>
                            {d}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export function ThisWeekProductivityCard(data){
    /*
        {
            "columnNames": ["Sun",..etc],
            "columnData": [10,12,...etc]
        }
    */
    

    return (Card(data['title'], ProductivityGraph(data)))
}