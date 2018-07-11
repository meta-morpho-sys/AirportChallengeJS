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
    return this.plane.landAtAirport();
};

Airport.prototype.decreaseCapacity = function(){
    this.currentCapacity -= 1;
};

Airport.prototype._isFull = function() {
    if (this.currentCapacity === 0){
        throw new Error('airport filled to capacity')
    }
};
