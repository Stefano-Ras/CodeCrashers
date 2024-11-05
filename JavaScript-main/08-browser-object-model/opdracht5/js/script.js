let button = document.querySelector("button");
let time;
document.querySelector("button").addEventListener("click", () => {
    if(button.innerHTML === "Play"){
            time = setInterval(function() {
                let date = new Date();
                let datetime = date.toTimeString();
                datetime = datetime.split(' ')[0];
                document.querySelector("p").innerHTML = datetime;
            }, 1000);
            button.classList.remove("play");
            button.classList.add("pause");
            button.innerHTML = "Pause";
    } else {
            console.log("pause");
            document.querySelector("button").innerHTML = "Pause";
            document.querySelector("#pause").addEventListener("click", () => {
                clearInterval(time);
            });
            button.classList.remove("pause");
            button.classList.add("play");
            button.innerHTML = "Play";
    }
});