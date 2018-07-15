describe('Airport', function() {
   var airport; var plane;
   beforeEach(function() {airport = new Airport(); plane = new Plane(); });

   it('has an default capacity', function() {expect(Airport.CAPACITY).toEqual(33)});
   it('accepts custom capacity on initiation', function () {
       var airport2 = new Airport(100);
       expect(airport2.capacity).toEqual(100)
   });

   describe('gives permission to land', function(){
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
           expect(airport.updateAvailability()).toEqual(31)
       });
       it('- error is thrown when its full', function(){
          var cap = airport.capacity;
          for(var i = 0; i < cap; i++) {airport.land(plane);}
          expect(function(){ airport.land(plane); }).toThrowError('airport filled to capacity');
       })
   });

   describe('gives permission to take off', function(){
       beforeEach(function() {airport.land(plane); airport.land(plane);});

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
           expect(airport.updateAvailability()).toEqual(32)
       });
   });
});
