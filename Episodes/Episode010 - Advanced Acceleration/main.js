window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var ship = particle.create(width / 2, height / 2, 0, 0, 0, 10);
	var thrust = vector2d.create(0, 0);
	var angle = 0;
	var turningLeft = false;
	var turningRight = false;
	var thrusting = false;

	update();

	function update() {
		context.clearRect(0, 0, width, height);

		if (turningLeft) {
			angle -= 0.05;
		}

		if (turningRight) {
			angle += 0.05;
		}

		thrust.setAngle(angle);

		if (thrusting) {
			thrust.setLength(0.1);
		} else {
			thrust.setLength(0);
		}


		ship.accelerate(thrust);
		ship.update();
		if (ship.position.getX() > width) ship.position.setX(0);
		if (ship.position.getX() < 0) ship.position.setX(width);
		if (ship.position.getY() > height) ship.position.setY(0);
		if (ship.position.getY() < 0) ship.position.setY(height);

		ship.render(context, drawShip);

		requestAnimationFrame(update);
	}

	function drawShip(ctx) {
		ctx.save();
		ctx.translate(ship.position.getX(), ship.position.getY());
		ctx.rotate(angle);

		ctx.beginPath();
		ctx.moveTo(10, 0);
		ctx.lineTo(-10, -7);
		ctx.lineTo(-10, 7);
		ctx.lineTo(10, 0);

		if (thrusting) {
			ctx.moveTo(-10, 0);
			ctx.lineTo(-18, 0);
		}

		ctx.stroke();


		ctx.restore();
	}

	document.body.addEventListener('keydown', function (event) {
		switch (event.keyCode) {
			case 38: //up				
				thrusting = true;
				break;

			case 37: //left
				turningLeft = true;
				break;

			case 39: //right
				turningRight = true;
				break;

			default:
				break;
		}
	});

	document.body.addEventListener('keyup', function (event) {
		switch (event.keyCode) {
			case 38: //up
				thrusting = false;
				break;

			case 37: //left
				turningLeft = false;
				break;

			case 39: //right
				turningRight = false;
				break;

			default:
				break;
		}
	});
};