function Plane() {
}

Plane.prototype.landAtAirport = function() {
  return this.isLanded = true;
};

Plane.prototype.takeOff = function() {
    return this.isLanded = false;
};
