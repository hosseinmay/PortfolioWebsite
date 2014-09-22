var elementsHovered = 0;
$("#left").one("mouseover", function() {
	$("#left").addClass("hoverleft");
	elementsHovered++;
	displaySecretText(elementsHovered);
});
$("#center").one("mouseover", function() {
	$("#center").addClass("hovercenter");
	elementsHovered++;
	displaySecretText(elementsHovered);
});
$("#right").one("mouseover", function() {
	$("#right").addClass("hoverright");
	elementsHovered++;
	displaySecretText(elementsHovered);
});

function displaySecretText (elementsHovered) {
	if (elementsHovered == 3) {
		$("#secret-text").fadeIn();	
	}
}