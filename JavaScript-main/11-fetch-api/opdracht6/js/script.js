const dropdown = document.querySelector("select");

$( dropdown ).on( "change", function() {
    $.ajax({
        url: "pages/" + dropdown.value + ".html",
        method: "GET",
        cache: true,
        crossDomain: false
    })
    .done(function( html ) {
		document.getElementById("output").innerHTML = html;
    });
});