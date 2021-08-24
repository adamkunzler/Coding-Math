window.onload = function () {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width = window.innerWidth;
	var height = canvas.height = window.innerHeight;

	var centerX = width * .5;
	var centerY = height * .5;
	var offset = height * .45;
	var speed = 0.1 / 2;
	var angle = 0;

	render();

	function render() {
		var y = centerY + Math.sin(angle) * offset;

		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.arc(centerX, y, 50, 0, Math.PI * 2, false);
		context.fill();

		angle += speed;

		requestAnimationFrame(render);
	}
};