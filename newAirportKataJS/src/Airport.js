function Airport() {
    Object.defineProperty(Airport, 'INITIAL_CAPACITY', {
        value: 33,
        writable : false,
        enumerable : true,
        configurable : false
    });
    this.landedPlanes = [];
}

Airport.prototype.land = function(plane) {
    this.plane = plane;
    this.landedPlanes.push(1);
    return this.plane.landAtAirport();
};
