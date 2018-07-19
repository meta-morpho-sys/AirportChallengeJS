'use strict';

describe('Airport', function() {
    var airport, plane, weather;

    beforeEach(function() {
       plane = new Plane();
       weather = new Weather();
       airport = new Airport(33, weather);
   });

    it('small thing', function() {
        spyOn(weather, 'isStormy').and.returnValue(false);
        expect(weather.isStormy()).toEqual(false);
    });

    it('has a default capacity', function() { expect(airport.CAPACITY).toEqual(33)});

   it('accepts custom capacity on initiation', function () {
       var airport2 = new Airport(100);
       expect(airport2.capacity).toEqual(100)
   });

   describe('gives permission to land', function(){
       beforeEach(function(){
           spyOn(weather, 'isStormy').and.returnValue(false);
       });

       it('- plane lands successfully', function(){
           spyOn(plane, 'landAtAirport').and.returnValue(true);
           expect(airport.land(plane)).toEqual(true);
           expect(plane.landAtAirport).toHaveBeenCalled();
       });

       it("- plane's added to the list of landed planes", function(){
           airport.land(plane);
           expect(airport.landedPlanes).toContain(plane);
       });

       it('- the availability decreases with each landed plane', function(){
           airport.land(plane); airport.land(plane);
           expect(airport.landedPlanes).toContain(plane, plane);
           expect(airport.availability).toEqual(31)
       });
   });

   describe('gives permission to take off', function(){
       beforeEach(function(){
           spyOn(weather, 'isStormy').and.returnValue(false);
           airport.land(plane); airport.land(plane);
       });

       it('- plane takes off successfully',function() {
           spyOn(plane, 'takeOff').and.returnValue(false);
           expect(airport.takeOffOk(plane)).toEqual(false);
           expect(plane.takeOff).toHaveBeenCalled();
       });

       it("- plane's removed from the list of landed planes", function(){
           airport.takeOffOk(plane);
           expect(airport.landedPlanes).toContain(plane, plane);
       });

       it('- the availability grows', function(){
           airport.takeOffOk(plane);
           expect(airport.landedPlanes).toContain(plane);
           expect(airport.availability).toEqual(32)
       });
   });


   describe("doesn't give permission to land", function() {
       it("- when it's full", function(){
           spyOn(weather, 'isStormy').and.returnValue(false);
           var cap = airport.capacity;
           for(var i = 0; i < cap; i++) {airport.land(plane);}
           expect(function(){ airport.land(plane); }).toThrowError('airport filled to capacity');
       });

       it('- when the weather is stormy', function() {
           spyOn(weather, 'isStormy').and.returnValue(true);

           expect(function(){ airport.land(plane); }).toThrowError('Stormy weather. Landing denied');
       })
   });

   describe("doesn't give permission to take off", function() {
       it('when the weather is stormy', function() {
           spyOn(weather, 'isStormy').and.returnValue(true);
           expect(function() { airport.takeOffOk(plane); }).toThrowError('Stormy weather. Take-off denied');
           expect(weather.isStormy).toHaveBeenCalled();
       })
   })
});
