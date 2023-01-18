window.onload = function () {
    startApp();
}

let testObj = {
    "current": {
        "course": "HCI",
        "type": "Homework",
        "start-date-time": "01-12-2023 07:15:00",
        "duration": 5
    },
}

function startApp(){
    let current = document.getElementById("current-div");
    let html = `
    <h2>${testObj["current"]["course"]}</h2>
    <h2>${testObj["current"]["type"]}</h2>
    <h2>${testObj["current"]["start-date-time"]}</h2>
    <h2>${testObj["current"]["duration"]}</h2>
    `
    current.innerHTML = html;
}