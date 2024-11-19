/* const section = function sectionMaker(inputText) {
	let result = "<section><p>" + inputText + "</p></section>";
	return result;
} */

const sectionMaker = inputText => "<section><p>" + inputText + "</p></section>";

document.querySelector("body").innerHTML = sectionMaker("Meow!");