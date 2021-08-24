window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	// make the screen black
	context.fillStyle = '#000000';
	context.fillRect(0, 0, width, height);

	context.font = "20px Georgia";

	context.fillStyle = '#ff0000';
	context.fillText("SIN", 10, 25);
	context.fillStyle = '#00ff00';
	context.fillText("COS", 60, 25);
	context.fillStyle = '#0000ff';
	context.fillText("TAN", 110, 25);

	// setup screen orientation
	context.translate(0, height / 2); // move 0 on y-axis to middle of screen
	context.scale(1, -1); // flip the y-axis (make positive go up)

	// draw sin wave
	context.fillStyle = '#ff0000';
	for (var angle = 0; angle < Math.PI * 2; angle += .01) {
		var x = angle * 200;
		var y = Math.sin(angle) * 200;

		context.fillRect(x, y, 5, 5);
	}

	// draw cos wave
	context.fillStyle = '#00ff00';
	for (var angle = 0; angle < Math.PI * 2; angle += .01) {
		var x = angle * 200;
		var y = Math.cos(angle) * 200;

		context.fillRect(x, y, 5, 5);
	}

	// draw tan wave
	context.fillStyle = '#0000ff';
	for (var angle = 0; angle < Math.PI * 2; angle += .01) {
		var x = angle * 200;
		var y = Math.tan(angle) * 200;

		context.fillRect(x, y, 5, 5);
	}
};