import React from "react";
import { Card, NewTaskCard, ThisWeekProductivityCard } from "./Card";
import { green } from "./Colors";
import { User } from "./User";

async function getUser() {
    // fetch("http://127.0.0.1:5000/user", {mode: 'no-cors'})
    // .then((response) => response.json())
    // .then((json) => console.log(json))\
    // const result = await fetch('http://127.0.0.1:5000/user', {
    //     method: 'GET',
    //     mode: 'no-cors'
    // });
    // console.log(result)
    // fetch('http://127.0.0.1:5000/user', {mode: "no-cors", headers: {}})
    //     .then(response => response.json())
    //     .then(data => console.log(data));
}

export function HomeScreen() {
    let testData1 = {
        "title": "This week's productivity",
        "max": 12,
        "columnNames": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        "columnData": [4, 8, 9, 2, 0, 11, 12]
    }
    
    let testData2 = {
        "title": "Best Classes",
        "max": 100,
        "columnNames": ["Linear", "Media", "iOS"],
        "columnData": [96, 84, 90]
    }



    let user = new User("mailmcbride", "Liam", "McBride", 20)

    const divStyle = {
        margin: "12px"
    }

    const h1Style = {
        fontSize: "32px",
        color: green
    }

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "507px 507px",
        overflow: "scroll",
        marginLeft: "auto",
        marginRight: "auto",
        gridGap: "8px"
    }

    return (
        <div style={divStyle}>
            <h1 style={h1Style}>Welcome back {user.username}!</h1>
            <div style={gridStyle}>
                <div>
                    {ThisWeekProductivityCard(testData1)}
                    {Card()}
                    {Card()}
                    {Card()}
                    {Card()}
                    {Card()}
                </div>
                <div>
                    {NewTaskCard()}
                    {ThisWeekProductivityCard(testData2)}
                </div>
            </div>
        </div>
    )
}