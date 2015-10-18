function init() {
	var canvas = document.getElementById("game_canvas");
	var ctx = canvas.getContext('2d');

	var background = new Image();
	var birds = new Image();

	/* Linked images */
	background.src = "duckhunt-background.gif";
	birds.src = "duckhunt_various_sheet.png";
	
	background.onload = function () {
		/* Background */
		ctx.drawImage(background, 0,0, 256, 240, 0, 0, 640, 600);

		/* Bird #1 */
		ctx.drawImage(birds, 127, 121, 40, 30, 200, 150, 80, 60);

		/* Bird #2 */
		ctx.drawImage(birds, 335, 115, 40, 40, 350, 100, 80, 80);
	}

}
