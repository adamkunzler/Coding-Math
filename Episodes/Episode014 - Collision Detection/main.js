window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var circle0 = {
		x: Math.random() * width,
		y: Math.random() * height,
		radius: 50 + Math.random() * 100
	};

	var circle1 = {
		x: Math.random() * width,
		y: Math.random() * height,
		radius: 50 + Math.random() * 100
	};

	var rect = {
		x: 200,
		y: 200,
		width: 200,
		height: 100
	};

	var rect1 = {
		x: 0,
		y: 0,
		width: 100,
		height: 200
	};

	update();

	function update() {
		context.clearRect(0, 0, width, height);

		//drawCircle(context, circle0.x, circle0.y, circle0.radius);
		//drawCircle(context, circle1.x, circle1.y, circle1.radius);

		context.fillRect(rect.x, rect.y, rect.width, rect.height);
		context.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);

		requestAnimationFrame(update);
	}

	document.body.addEventListener('mousemove', function (event) {
		// circle1.x = event.clientX;
		// circle1.y = event.clientY;

		// if (circleCollision(circle0, circle1)) {
		// 	context.fillStyle = '#f66';
		// } else {
		// 	context.fillStyle = '#999';
		// }



		// if (circlePointCollision(event.clientX, event.clientY, circle0)) {
		// 	context.fillStyle = '#f66';
		// } else {
		// 	context.fillStyle = '#999';
		// }


		// if (pointInRectangle(event.clientX, event.clientY, rect)) {
		// 	context.fillStyle = '#f66';
		// } else {
		// 	context.fillStyle = '#999';
		// }


		rect1.x = event.clientX;
		rect1.y = event.clientY;
		if (rectangleCollision(rect, rect1)) {
			context.fillStyle = '#f66';
		} else {
			context.fillStyle = '#999';
		}
	});

};