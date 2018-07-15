function Airport(customCapacity) {
    Object.defineProperty(Airport, 'CAPACITY', {value: 33});
    this.landedPlanes = [];
    this.capacity = customCapacity || Airport.CAPACITY;
}

Airport.prototype.land = function(plane) {
    if (this._isFull()) {
        throw new Error('airport filled to capacity');
    }
    this.landedPlanes.push(plane);
    this.updateAvailability();
    return plane.landAtAirport();
};

Airport.prototype.updateAvailability = function(){
    return this.capacity - this.landedPlanes.length;
};

Airport.prototype.takeOffOk = function(plane) {
    var leavingPlane = this.landedPlanes.pop();
    this.updateAvailability();
    return leavingPlane.takeOff();
};

Airport.prototype._isFull = function() {
    return this.updateAvailability() === 0;
};
