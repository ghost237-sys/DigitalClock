function updateClock(){
    const New = new Date();

    let hours = (New.getHours().toString()).padStart(2,0);

    const meredium = hours < 12 ? "Am" : "PM";
    hours = hours % 12 || 12;


    const minutes = New.getMinutes().toString().padStart(2,"0");
    const seconds = New.getSeconds().toString().padStart(2,"0");

    const time = `${hours}:${minutes}:${seconds} ${meredium}`

    document.getElementById("clock").textContent = time;

}

updateClock();

setInterval(updateClock, 1000);