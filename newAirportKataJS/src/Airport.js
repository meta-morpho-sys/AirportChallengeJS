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
    this.decreaseCapacity();
    this.monitorHangarAndCapacity();
    return this.plane.landAtAirport();
};

Airport.prototype.decreaseCapacity = function(){
    this.currentCapacity -= 1;
};

Airport.prototype.takeOffOk = function(plane) {
    console.log('Planes in hangar before take off ', this.landedPlanes.length );
    var blah = this.landedPlanes.pop();
    return blah.takeOff();
};

Airport.prototype.monitorHangarAndCapacity = function(){
    console.log('Planes in hangar ', this.landedPlanes.length);
    console.log('Current capacity ',this.currentCapacity);
};

Airport.prototype._isFull = function() {
    if (this.currentCapacity === 0){
        throw new Error('airport filled to capacity')
    }
};
