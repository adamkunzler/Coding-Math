//
// functions for drawing simple shapes
//

function drawCircle(context, x, y, radius, fillStyle) {
	context.beginPath();

	if (fillStyle) context.fillStyle = fillStyle;

	context.arc(x, y, radius, 0, Math.PI * 2, false);

	context.fill();
}