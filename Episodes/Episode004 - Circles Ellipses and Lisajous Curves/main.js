window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var centerX = width * .5;
	var centerY = height * .5;
	var angle = 0;
	var speed = .01;
	var radius = 200;
	var numObjects = 17;
	var slice = (Math.PI * 2) / numObjects;

	render();

	function render() {
		context.clearRect(0, 0, width, height);

		for (var i = 0; i < numObjects; i += 1) {
			angle = i * slice;
			var x = centerX + radius * Math.cos(angle);
			var y = centerY + radius * Math.sin(angle);

			context.beginPath();
			context.arc(x, y, 10, 0, Math.PI * 2, false);
			context.fill();
		}


		//angle += speed;

		//requestAnimationFrame(render);
	}
};