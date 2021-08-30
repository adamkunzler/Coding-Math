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
	return Math.min(Math.max(value, min), max);
}