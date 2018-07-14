function Airport(customCapacity) {
    Object.defineProperty(Airport, 'CAPACITY', {value: 33});
    this.landedPlanes = [];
    this.capacity = customCapacity || Airport.CAPACITY;
}

Airport.prototype.land = function(plane) {
    this._isFull();
    this.landedPlanes.push(plane);
    this.availabilityManagement(1);
    return plane.landAtAirport();
};

Airport.prototype.updateAvailability = function(num){
    this.capacity -= num;
};

Airport.prototype.takeOffOk = function(plane) {
    var leavingPlane = this.landedPlanes.pop();
    this.availabilityManagement(-1);
    return leavingPlane.takeOff();
};

Airport.prototype.availabilityManagement = function (num) {
    this.updateAvailability(num);
    this._hangarAndCapacityInfo();
};

Airport.prototype._hangarAndCapacityInfo = function(){
    console.log('Planes in hangar ', this.landedPlanes.length);
    console.log('Current capacity ',this.capacity);
};

Airport.prototype._isFull = function() {
    if (this.capacity === 0){
        throw new Error('airport filled to capacity')
    }
};
