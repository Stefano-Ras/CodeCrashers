let button = document.querySelector("button");
let time;
let i = 0;
document.querySelector("button").addEventListener("click", () => {
    i++;
    if(i % 2){
        time = setInterval(function() {
            let date = new Date();
            let datetime = date.toTimeString();
            datetime = datetime.split(' ')[0];
            document.querySelector("p").innerHTML = datetime;
        }, 1000);
        button.innerHTML = "Pause";
    } else {
        document.querySelector("button").innerHTML = "Pause";
        button.innerHTML = "Play";
        clearInterval(time);
    }
});