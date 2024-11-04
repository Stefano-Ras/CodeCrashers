let count = document.querySelector("p").innerHTML;
countdown = setInterval(function() {
    if(count > 0) {
        count--;
        document.querySelector("p").innerHTML = count;
    }
    console.log(count);
    if(count == 0) {
        clearInterval(countdown);
        alert("Thanks for waiting!");
        function displayDiv() {
            document.querySelector("p").style.display = "block";
        }
        setTimeout(displayDiv, 2000)
    }
}, 1000);