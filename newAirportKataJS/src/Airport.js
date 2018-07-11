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
    this.plane = plane;
    this.landedPlanes.push(plane);
    this._calculateCapacity();
    return this.plane.landAtAirport();
};

Airport.prototype._calculateCapacity = function(){
    this.currentCapacity -= 1;
};
