//
// Representation of a Simple Particle
//
var particle = {
	position: undefined,
	velocity: undefined,
	gravity: undefined,
	radius: 1,
	mass: 1,
	friction: 1,

	create: function (x, y, speed, direction, gravity, radius) {
		var obj = Object.create(this);

		obj.position = vector2d.create(x, y);

		obj.velocity = vector2d.create(0, 0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);

		obj.gravity = vector2d.create(0, gravity || 0);

		obj.radius = radius || 50;

		return obj;
	},

	update: function () {
		this.velocity = this.velocity.multiply(this.friction);
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
	},

	angleTo: function (p2) {
		return Math.atan2(
			p2.position.getY() - this.position.getY(),
			p2.position.getX() - this.position.getX()
		);
	},

	distanceTo: function (p2) {
		var dx = p2.position.getX() - this.position.getX();
		var dy = p2.position.getY() - this.position.getY();

		return Math.sqrt(dx * dx + dy * dy);
	},

	gravitateTo: function (p2) {
		var grav = vector2d.create(0, 0);
		var dist = this.distanceTo(p2);

		grav.setLength(p2.mass / (dist * dist)); // gravity equation simplified
		grav.setAngle(this.angleTo(p2));

		this.velocity = this.velocity.add(grav);
	}
};