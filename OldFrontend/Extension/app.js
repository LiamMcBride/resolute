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
let testObj2 = {
    "current": {
        "course": "Systems",
        "type": "Project",
        "start-date-time": "01-12-2023 07:15:00",
        "duration": 4002,
    },
}

function startApp(){
    let current = document.getElementById("current-div");
    let html = createEntry(testObj);
    current.innerHTML += html;
    current = document.getElementById("current-div");
    html = createEntry(testObj2);
    current.innerHTML += html;
}

function createEntry(obj){
    return `
    <div class="entry">
        <div>${obj["current"]["course"]}</div>
        <div>${obj["current"]["type"]}</div>
        <div>${obj["current"]["duration"]}</div>
        <button class="pause-btn"></button>
        <button class="stop-btn"></button>
    </div>
    `;
}