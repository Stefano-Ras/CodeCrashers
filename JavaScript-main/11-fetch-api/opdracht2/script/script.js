fetch("files/ff4.txt")
.then(response => response.text())
.then(response => {
    document.getElementById("output").innerHTML = response;
})

const dropdown = document.querySelector("select");

dropdown.addEventListener("change", function() {
    const value = dropdown.value;
    if(value == "FFIV") {
	    fetch("files/ff4.txt")
	    .then(response => response.text())
	    .then(response => {
	    	document.getElementById("output").innerHTML = response;
	    })
    } else if (value == "FFV") {
	    fetch("files/ff5.txt")
	    .then(response => response.text())
	    .then(response => {
	    	document.getElementById("output").innerHTML = response;
	    })
    }  if (value == "FFVI") {
	    fetch("files/ff6.txt")
	    .then(response => response.text())
	    .then(response => {
	    	document.getElementById("output").innerHTML = response;
	    })
    }
});