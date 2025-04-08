setInterval(() => {
    fetch("imagecrawler.php")
    .then(response => response.text())
    .then(data => {
        document.getElementById("images").innerHTML = data;
    })
}, 300);