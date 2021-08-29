//
// Representation of a Simple Particle
//
var particle = {
	position: undefined,
	velocity: undefined,
	gravity: undefined,
	radius: 1,

	create: function (x, y, speed, direction, gravity, radius) {
		var obj = Object.create(this);

		obj.position = vector2d.create(x, y);

		obj.velocity = vector2d.create(0, 0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);

		obj.gravity = vector2d.create(0, gravity || 0);

		obj.radius = radius;

		return obj;
	},

	update: function () {
		this.velocity = this.velocity.add(this.gravity);
		this.position = this.position.add(this.velocity);
	},

	render: function (context, renderCallback) {
		if (!renderCallback)
			drawCircle(context, this.position.getX(), this.position.getY(), this.radius);
		else
			renderCallback(context);
	},

	accelerate: function (accel) {
		this.velocity = this.velocity.add(accel);
	}
};