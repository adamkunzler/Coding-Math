window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var particles = [];
	var numParticles = 200;

	initParticles(width / 2, height / 2);

	update();

	function update() {
		context.clearRect(0, 0, width, height);

		for (var i = 0; i < numParticles; i++) {
			particles[i].update();
			particles[i].render(context);
		}


		requestAnimationFrame(update);
	}

	function initParticles(x, y) {
		particles = [];

		for (var i = 0; i < numParticles; i++) {
			particles.push(
				particle.create(x, y, Math.random() * 4.5 + .5, Math.random() * Math.PI * 2, Math.random() * 9 + 1)
			);
		}
	}

	document.addEventListener("click", function (event) {
		initParticles(event.x, event.y);
	});

};