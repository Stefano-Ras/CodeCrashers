const config = {
	method: "GET",
	mode: "same-origin",
	cache: "no-store"
};

fetch("C:/xampp/htdocs/CodeCrashers/Fetch API/Opdracht 1", config)
	.then(response => response.text())
	.then(data => {
		document.getElementById("output").innerHTML = data;
	})
	.catch(error => {
		console.error("Niet gelukt.");
	});