'use strict';

function Airport(customCapacity) {
    this.landedPlanes = [];
    Object.defineProperty(Airport.prototype,
        'CAPACITY', {
            value: 33
        });
    this.capacity = customCapacity || this.CAPACITY;
}

Airport.prototype.land = function(plane) {
    if (this._isFull()) {
        throw new Error('airport filled to capacity');
    }
    this.landedPlanes.push(plane);
    this.availability = this.capacity - this.landedPlanes.length;
    return plane.landAtAirport();
};

Airport.prototype.takeOffOk = function(plane) {
    var leavingPlane = this.landedPlanes.pop();
    console.log(this.availability);
    this.availability = this.capacity - this.landedPlanes.length;
    return leavingPlane.takeOff();
};

Airport.prototype._isFull = function() {
    return this.availability === 0;
};
