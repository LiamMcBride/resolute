import React from "react";
import { ConfirmButton } from "./Button";
import { gray, green, red } from "./Colors";

let events = 
    [
        {
            "title": "Homework 1",
            "course": "Linear",
            "type": "Homework",
            "duration": 217
        },
        {
            "title": "Homework 2",
            "course": "Linear",
            "type": "Homework",
            "duration": 100
        },
        {
            "title": "Quiz 1",
            "course": "Systems",
            "type": "Quiz",
            "duration": 44
        },
        {
            "title": "Blacksburg",
            "course": "iOS Dev",
            "type": "Tutorial",
            "duration": 240
        },
        {
            "title": "Homework 1",
            "course": "Linear",
            "type": "Homework",
            "duration": 217
        },
        {
            "title": "Homework 1",
            "course": "Linear",
            "type": "Homework",
            "duration": 217
        },
        {
            "title": "Homework 1",
            "course": "Linear",
            "type": "Homework",
            "duration": 217
        },
        {
            "title": "Homework 1",
            "course": "Linear",
            "type": "Homework",
            "duration": 217
        },
        {
            "title": "Homework 1",
            "course": "Linear",
            "type": "Homework",
            "duration": 217
        },
        {
            "title": "Homework 1",
            "course": "Linear",
            "type": "Homework",
            "duration": 217
        },
        {
            "title": "Homework 1",
            "course": "Linear",
            "type": "Homework",
            "duration": 217
        }
    ]  


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

export function RecentEventsCard(){
    let event = {
        "title": "Homework 1",
        "course": "Linear",
        "type": "Homework",
        "duration": 217
    }

    let divStyle = {
        display: "grid",
        gridTemplateColumns: "0.7fr 1fr 1fr 0.5fr 25px 25px 25px",
        padding: "4px",
        textAlign: "left",
        gridGap: "4px",
        margin: "4px"
    }

    const holder = () => {
        return (
            <div>
                <div style={divStyle}>
                    <div>Course</div>
                    <div>Type</div>
                    <div>Assignment</div>
                    <div>Duration</div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {events.map((e) => {
                    return Event(e)
                })}
            </div>
        );
    }

    return (Card("Recent Events", holder()))
}

/*
    {
        "title": "",
        "course": "",
        "type": "",
        "duration": 90
    }
*/

function Event(event){

    let divStyle = {
        display: "grid",
        gridTemplateColumns: "0.7fr 1fr 1fr 0.5fr 25px 25px 25px",
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "4px",
        textAlign: "left",
        gridGap: "4px",
        margin: "4px"
    }

    let squareStyle = (color) => {
        return {
            backgroundColor: color,
            opacity: "0.5",
            minWidth: "25px",
            minHeight: "25px",
            width: "25px",
            height: "25px"
        }
    }

    let time = getHourAndMinutesFromMinutes(event["duration"]) 

    if(time["hour"].toString().length < 2){
        time["hour"] = `0${time['hour']}`
    }
    if(time["minutes"].toString().length < 2){
        time["minutes"] = `0${time['minutes']}`
    }


    return (
        <div style={divStyle}>
            <div>{event["course"]}</div>
            <div>{event["type"]}</div>
            <div>{event["title"]}</div>
            <div>{`${time['hour']}:${time['minutes']}`}</div>
            <div style={squareStyle(gray)}></div>
            <div style={squareStyle(green)}></div>
            <div style={squareStyle(red)}></div>

        </div>
    )
}

function getHourAndMinutesFromMinutes(min){
    let hours = Math.floor(min / 60)
    let minutes = Math.floor(60 * ((min / 60) - hours))

    return {
        "hour": hours,
        "minutes": minutes
    }
}