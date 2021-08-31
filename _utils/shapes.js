//
// functions for drawing simple shapes
//

function drawCircle(context, x, y, radius, fillStyle) {
	context.beginPath();

	if (fillStyle) context.fillStyle = fillStyle;

	context.arc(x, y, radius, 0, Math.PI * 2, false);

	context.fill();
}


//
// assumes { x, y, radius }
//
function circleCollision(c0, c1) {
	return distance(c0.x, c0.y, c1.x, c1.y) <= c0.radius + c1.radius;
}

function circlePointCollision(x, y, circle) {
	return distance(x, y, circle.x, circle.y) <= circle.radius;
}

//
// assumes {x, y, width, height}
//
function rectangleCollision(r0, r1) {
	return rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width)
		&& rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height);
}

function pointInRectangle(x, y, rect) {
	return inRange(x, rect.x, rect.x + rect.width) && inRange(y, rect.y, rect.y + rect.height);
}