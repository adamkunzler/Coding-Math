//
// Representation of a Simple Particle
//
var particle = {
	x: 0,
	y: 0,
	vx: 0,
	vy: 0,
	gravity: undefined,
	radius: 1,
	mass: 1,
	friction: 1, // percentage of velocity (1 will never reduce velocity...0.5 would reduce velocity by half every frame)
	springs: undefined,
	gravitations: undefined,

	//
	// creates a particle
	//
	create: function (x, y, speed, direction, gravity, radius) {
		var obj = Object.create(this);
		obj.x = x;
		obj.y = y;
		obj.vx = Math.cos(direction) * speed;
		obj.vy = Math.sin(direction) * speed;

		obj.gravity = gravity || 0;

		obj.radius = radius || 50;

		obj.springs = [];
		obj.gravitations = [];

		return obj;
	},

	//
	// update a particles velocity, applies friction and gravity (if set)
	//
	update: function () {
		this.handleSprings();
		this.handleGravitations();

		this.vx *= this.friction;
		this.vy *= this.friction;

		this.vy += this.gravity;

		this.x += this.vx;
		this.y += this.vy;
	},

	//
	// draw the particle as a circle or via a callback
	//
	render: function (context, renderCallback) {
		if (!renderCallback)
			drawCircle(context, this.x, this.y, this.radius);
		else
			renderCallback(context);
	},

	//
	// apply acceleration to the velocity
	//
	accelerate: function (ax, ay) {
		this.vx += ax;
		this.vy += ay;
	},

	//
	// calculate the angle between two particles
	//
	angleTo: function (p2) {
		return Math.atan2(
			p2.y - this.y,
			p2.x - this.x
		);
	},

	//
	// get distance between two particles
	//
	distanceTo: function (p2) {
		var dx = p2.x - this.x;
		var dy = p2.y - this.y;

		return Math.sqrt(dx * dx + dy * dy);
	},

	//
	// cause particle to gravitate to another particle (e.g. planet (this) around a sun (p2))
	//
	gravitateTo: function (p2) {
		var dx = p2.x - this.x;
		var dy = p2.y - this.y;

		var dist = this.distanceTo(p2);
		var force = p2.mass / (dist * dist);

		var ax = (dx / dist) * force; // Math.cos(angle) * force because cos(angle) = adjacent / hypotenuse
		var ay = (dy / dist) * force; // Math.sin(angle) * force because sin(angle) = opposite / hypotenuse

		this.vx += ax;
		this.vy += ay;
	},

	handleGravitations: function () {
		for (var i = 0; i < this.gravitations.length; i++) {
			this.gravitateTo(this.gravitations[i]);
		}
	},

	addGravitation: function (p) {
		this.removeGravitation(p);
		this.gravitations.push(p);
	},

	removeGravitation: function (p) {
		for (var i = 0; i < this.gravitations.length; i++) {
			if (p === this.gravitations[i]) {
				this.gravitations.splice(i, 1);
				return;
			}
		}
	},

	//
	// get the speed of the particle (e.g. magnitude of it's velocity)
	//
	getSpeed: function () {
		return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
	},

	//
	// set the speed of the particle (e.g. magnitude of it's velocity)
	//
	setSpeed: function (speed) {
		var heading = this.getHeading();
		this.vx = Math.cos(heading) * speed;
		this.vy = Math.sin(heading) * speed;
	},

	//
	// get the heading of the particle (e.g. angle of it's velocity)
	//
	getHeading: function () {
		return Math.atan2(this.vy, this.vx);
	},

	//
	// set the heading of the particle (e.g. angle of it's velocity)
	//
	setHeading: function (heading) {
		var speed = this.getSpeed();
		this.vx = Math.cos(heading) * speed;
		this.vy = Math.sin(heading) * speed;
	},

	addSpring: function (point, k, length) {
		this.removeSpring(point);

		this.springs.push({
			point: point,
			k: k,
			length: length || 0
		});
	},

	removeSpring: function (point) {
		for (var i = 0; i < this.springs.length; i++) {
			if (point === this.springs[i].point) {
				this.springs.splice(i, 1);
				return;
			}
		}
	},

	//
	// cause particle to spring towards a point
	//
	springTo: function (point, k, length) {
		var dx = point.x - this.x;
		var dy = point.y - this.y;
		var distance = Math.sqrt(dx * dx + dy * dy);
		var springForce = (distance - length || 0) * k;

		this.vx += dx / distance * springForce;
		this.vy += dy / distance * springForce;
	},

	handleSprings: function () {
		for (var i = 0; i < this.springs.length; i++) {
			var spring = this.springs[i];
			this.springTo(spring.point, spring.k, spring.length);
		}
	}
};