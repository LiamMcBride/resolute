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
    let html = createEntry(testObj);
    current.innerHTML = html;
}

function createEntry(obj){
    return `
    <div class="entry">
        <div>${testObj["current"]["course"]}</div>
        <div>${testObj["current"]["type"]}</div>
        <div>${testObj["current"]["duration"]}</div>
        <button class="pause-btn"></button>
        <button class="stop-btn"></button>
    </div>
    `;
}