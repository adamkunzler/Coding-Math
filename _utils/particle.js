var particle = {
	position: undefined,
	velocity: undefined,
	radius: 1,

	create: function (x, y, speed, direction, radius) {
		var obj = Object.create(this);

		obj.position = vector2d.create(x, y);

		obj.velocity = vector2d.create(0, 0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);

		obj.radius = radius;

		return obj;
	},

	update: function () {
		this.position = this.position.add(this.velocity);
	},

	render: function (context) {
		drawCircle(context, this.position.getX(), this.position.getY(), this.radius);
	}
};