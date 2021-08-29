window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var particles = [];
	var numParticles = 200;

	//var p = particle.create(250, height, 10, -Math.PI / 2, 10);
	//var accel = vector2d.create(0.1, 0.1);
	//var gravity = vector2d.create(0, 0.1);

	initParticles(width / 2, height / 3);

	update();

	function update() {
		//context.fillStyle = '#1f1f1f';
		context.clearRect(0, 0, width, height);

		for (var i = 0; i < numParticles; i++) {
			//particles[i].accelerate(gravity);
			particles[i].update();
			particles[i].render(context);
		}

		//p.accelerate(accel);
		//p.update();
		//p.render(context);


		requestAnimationFrame(update);
	}

	function initParticles(x, y) {
		particles = [];

		for (var i = 0; i < numParticles; i++) {
			particles.push(
				particle.create(x, y, Math.random() * 4.9 + .1, Math.random() * Math.PI * 2, 0.1, Math.random() * 9 + 1)
			);
		}
	}

	document.addEventListener("click", function (event) {
		initParticles(event.x, event.y);
	});

};