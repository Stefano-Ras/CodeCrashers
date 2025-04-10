const dropdown = document.querySelector("select");

dropdown.addEventListener("change", function() {
	fetch("pages/" + dropdown.value + ".html", {
        method: "GET",
        mode: "same-origin",
        cache: "default",
        priority: "high"
    })
	.then(response => response.text())
	.then(response => {
		document.getElementById("output").innerHTML = response;
	})
});