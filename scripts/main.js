window.onload = function () {

	var labyrinth = "";

	for (var i = 1; i < 50; i++) {
		for (var j = 1; j < 50; j++) {
			charakter = (Math.floor(Math.random() * 2) % 2) ? "╱" : "╲";
			labyrinth += charakter;
		}
		labyrinth += "<br>";
	}

	// Create Elements
	var wrapperDiv = document.createElement("div");
	var paragraph = document.createElement("p");

	// Alter Elements
	paragraph.id = "map";
	paragraph.innerHTML = labyrinth;
	paragraph.style.cssText = "line-height: 18px; font-size: 18px; font-family: times;";
	paragraph.style.cssText += "color:red;";

	// Insert Elements To The Body
	document.body.appendChild(wrapperDiv);
	wrapperDiv.appendChild(paragraph);
}