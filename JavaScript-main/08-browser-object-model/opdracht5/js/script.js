document.querySelector("button").addEventListener("click", () => {
    if(document.querySelector("button").innerHTML != "play") {
        time = setInterval(function() {
            let date = new Date();
            let datetime = date.toTimeString();
            datetime = datetime.split(' ')[0];
            document.querySelector("p").innerHTML = datetime;
        }, 1000);
        document.querySelector("button").innerHTML = "Pause";
    } else {
        document.querySelector("#pause").addEventListener("click", () => {
            clearInterval(time);
        });
        document.querySelector("button").innerHTML = "Play";
    }
});
