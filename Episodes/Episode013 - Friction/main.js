window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var p = particle.create(width / 2, height / 2, 10, Math.random() * Math.PI * 2);
	p.radius = 10;
	p.friction = 0.97;

	// friction v1
	//var friction = vector2d.create(0.15, 0);

	// friction v2
	//var friction = 0.97;

	update();

	function update() {
		context.clearRect(0, 0, width, height);

		// friction v1
		// friction.setAngle(p.velocity.getAngle());
		// if (p.velocity.getLength() > friction.getLength()) {
		// 	p.velocity = p.velocity.subtract(friction);
		// } else {
		// 	p.velocity.setLength(0);
		// }

		// friction v2
		//p.velocity = p.velocity.multiply(friction);

		p.update();

		p.render(context);

		requestAnimationFrame(update);
	}

};