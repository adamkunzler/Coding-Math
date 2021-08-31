function degreesToRadians(degrees) {
	return (degrees * Math.PI) / 180;
}

function radiansToDegrees(radians) {
	return (radians * 180) / Math.PI;
}

function normalize(value, min, max) {
	return (value - min) / (max - min);
}

function lerp(normalizedValue, min, max) {
	return (max - min) * normalizedValue + min;
}

function map(value, sourceMin, sourceMax, destMin, destMax) {
	var n = norm(value, sourceMin, sourceMax);
	return lerp(n, destMin, destMax);
}

function clamp(value, min, max) {
	return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
}

function distance(x0, y0, x1, y1) {
	var dx = x1 - x0;
	var dy = y1 - y0;
	return Math.sqrt(dx * dx + dy * dy);
}

function inRange(value, min, max) {
	return value >= Math.min(min, max) && value <= Math.max(min, max);
}

function rangeIntersect(min0, max0, min1, max1) {
	return Math.max(min0, max0) >= Math.min(min1, max1)
		&& Math.min(min0, max0) <= Math.max(min1, max1);
}

function randomRange(min, max) {
	return min + Math.random() * (max - min);
}

function randomInt(min, max) {
	return Math.floor(min + Math.random() * (max - min + 1));
}