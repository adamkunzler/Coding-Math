window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var sun = particle.create(width / 2, height / 2, 0, 0);
	var planet = particle.create(width / 2 + 200, height / 2, 10, -Math.PI / 2);

	sun.mass = 20000;

	sun.radius = 50;
	planet.radius = 10;

	update();

	function update() {
		context.clearRect(0, 0, width, height);

		planet.gravitateTo(sun);

		planet.update();
		planet.render(context, function (ctx) {
			drawCircle(ctx, planet.position.getX(), planet.position.getY(), planet.radius, '#0000ff');
		});

		sun.update();
		sun.render(context, function (ctx) {
			drawCircle(ctx, sun.position.getX(), sun.position.getY(), sun.radius, '#ffff00');
		});


		requestAnimationFrame(update);
	}


};