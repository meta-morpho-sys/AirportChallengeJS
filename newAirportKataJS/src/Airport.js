function Airport() {
    Object.defineProperty(Airport, 'INITIAL_CAPACITY', {
        value: 33,
        writable : false,
        enumerable : true,
        configurable : false
    });
    this.landedPlanes = [];
    this.currentCapacity = Airport.INITIAL_CAPACITY;
}

Airport.prototype.land = function(plane) {
    this._isFull();
    this.plane = plane;
    this.landedPlanes.push(plane);
    this.updateAvailability(1);
    this._hangarAndCapacityInfo();
    return this.plane.landAtAirport();
};

Airport.prototype.updateAvailability = function(num){
    this.currentCapacity -= num;
};

Airport.prototype.takeOffOk = function(plane) {
    var leavingPlane = this.landedPlanes.pop();
    this.updateAvailability(-1);
    this._hangarAndCapacityInfo();
    return leavingPlane.takeOff();
};

Airport.prototype._hangarAndCapacityInfo = function(){
    console.log('Planes in hangar ', this.landedPlanes.length);
    console.log('Current capacity ',this.currentCapacity);
};

Airport.prototype._isFull = function() {
    if (this.currentCapacity === 0){
        throw new Error('airport filled to capacity')
    }
};
