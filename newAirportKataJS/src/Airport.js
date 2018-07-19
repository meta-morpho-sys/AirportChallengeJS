'use strict';

function Airport(customCapacity, weather) {
    this.landedPlanes = [];
    Object.defineProperty(Airport.prototype,
        'CAPACITY', {
            value: 33
        });
    this.capacity = customCapacity || this.CAPACITY;
    this._weather =  weather || new Weather();

}

Object.defineProperty(Airport.prototype, 'availability', {
    get: function () { return this.capacity - this.landedPlanes.length }
});

Airport.prototype.land = function(plane) {
    if (this._isFull()) {
        throw new Error('airport filled to capacity');
    } else if (this._weather.isStormy()) {
        throw new Error('Stormy weather. Landing denied')
    }
    this.landedPlanes.push(plane);
    return plane.landAtAirport();
};

Airport.prototype.takeOffOk = function(plane) {
    if (this._weather.isStormy()) {
        throw new Error('Stormy weather. Take-off denied')
    }
    var leavingPlane = this.landedPlanes.pop();
    return leavingPlane.takeOff();
};

Airport.prototype._isFull = function() {
    return this.availability === 0;
};
