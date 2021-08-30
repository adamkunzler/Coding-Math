window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var particles = [];
	for (var i = 0; i < 1000; i++) {
		particles.push(getParticle());
	}

	update();

	function update() {
		context.clearRect(0, 0, width, height);

		for (var i = 0; i < particles.length; i++) {
			particles[i].update();
			particles[i].render(context);
		}

		removeDeadParticles();

		requestAnimationFrame(update);
	}

	function getParticle() {
		var p = particle.create(width / 2, height / 2, Math.random() * 8 + 3, (Math.random() * Math.PI / 4) - (Math.PI / 2));
		p.radius = 2;
		p.gravity = vector2d.create(0, 0.2);
		return p;
	}

	function removeDeadParticles() {
		for (var i = particles.length - 1; i >= 0; i -= 1) {
			var p = particles[i];

			if ((p.position.getX() - p.radius > width)
				|| (p.position.getX() + p.radius < 0)
				|| (p.position.getY() - p.radius > height)
				|| (p.position.getY() + p.radius < 0)) {
				particles.splice(i, 1);
				particles.push(getParticle());
			}
		}
	}
};