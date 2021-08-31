window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	update();

	function update() {
		context.clearRect(0, 0, width, height);

		for (var i = 0; i < 200; i++) {
			context.beginPath();
			context.fillStyle = 'red';
			context.arc(
				randomRange(0, width * .33),
				randomRange(0, height),
				randomRange(10, 40),
				0, Math.PI * 2, false);
			context.fill();

			context.beginPath();
			context.fillStyle = 'green';
			context.arc(
				randomRange(width * .33, width * .66),
				randomRange(0, height),
				randomRange(10, 40),
				0, Math.PI * 2, false);
			context.fill();


			context.beginPath();
			context.fillStyle = 'blue';
			context.arc(
				randomRange(width * .66, width),
				randomRange(0, height),
				randomRange(10, 40),
				0, Math.PI * 2, false);
			context.fill();
		}

		//requestAnimationFrame(update);
	}

};