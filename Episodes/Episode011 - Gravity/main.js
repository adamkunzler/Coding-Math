window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var sun1 = particle.create(300, 200, 0, 0);
	var sun2 = particle.create(600, 600, 0, 0);
	var emitter = {
		x: 100,
		y: 0
	};
	var particles = [];
	var numParticles = 100;

	sun1.mass = 10000;
	sun1.radius = 10;
	sun2.mass = 20000;
	sun2.radius = 20;

	for (var i = 0; i < numParticles; i++) {
		var p = particle.create(emitter.x, emitter.y, randomRange(7, 8), Math.PI / 2 * randomRange(-.1, .1));
		p.radius = 3;
		p.addGravitation(sun1);
		p.addGravitation(sun2);
		particles.push(p);
	}

	update();

	function update() {
		context.clearRect(0, 0, width, height);


		sun1.render(context, function (ctx) {
			drawCircle(ctx, sun1.x, sun1.y, sun1.radius, 'yellow');
		});

		sun2.render(context, function (ctx) {
			drawCircle(ctx, sun2.x, sun2.y, sun2.radius, 'orange');
		});

		for (var i = 0; i < numParticles; i++) {
			var p = particles[i];
			p.update();

			p.render(context, function (ctx) {
				drawCircle(ctx, p.x, p.y, p.radius, 'blue');
			});

			if (p.x > width || p.x < 0 || p.y > height || p.y < 0) {
				p.x = emitter.x;
				p.y = emitter.y;
				p.setSpeed(randomRange(7, 8));
				p.setHeading(Math.PI / 2 * randomRange(-.1, .1));
			}
		}


		requestAnimationFrame(update);
	}


};