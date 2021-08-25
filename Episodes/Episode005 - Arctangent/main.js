window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var centerX = width / 2;
	var centerY = height / 2;
	var arrowX, arrowY;
	var radius = 200;
	var arrowPosAngle = 0;
	var arrowSpeed = 0.01;
	var dx, dy, angle = 0;

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		arrowX = centerX + radius * Math.cos(arrowPosAngle);
		arrowY = centerY + radius * Math.sin(arrowPosAngle);

		arrowPosAngle += arrowSpeed;

		context.save();
		context.translate(arrowX, arrowY);
		context.rotate(angle);

		context.beginPath();
		context.moveTo(20, 0);
		context.lineTo(-20, 0);
		context.moveTo(20, 0);
		context.lineTo(10, -10);
		context.moveTo(20, 0);
		context.lineTo(10, 10);
		context.stroke();

		context.restore();

		requestAnimationFrame(render);
	}

	document.body.addEventListener("mousemove", function (event) {
		dx = event.clientX - arrowX;
		dy = event.clientY - arrowY;
		//angle = Math.atan(dy / dx); // limits to quadrants 1 and 4
		angle = Math.atan2(dy, dx); // smart enough to know quadrants
	});
};