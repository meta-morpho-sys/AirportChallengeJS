describe('Airport', function() {
   var airport;
   var plane;

   beforeEach(function(){
       airport = new Airport();
       plane = new Plane();
   });

   it('has an initial capacity', function(){
       expect(Airport.INITIAL_CAPACITY).toEqual(33)
   });

   describe('lands plane', function(){
       it('successfully', function(){
           spyOn(plane, 'landAtAirport').and.returnValue(true);
           expect(airport.land(plane)).toEqual(true);
           expect(plane.landAtAirport).toHaveBeenCalled();
        });

       it('and adds the plane to the list of landed planes', function(){
           airport.land(plane);
           expect(airport.landedPlanes).toContain(plane);
       });

       it('the capacity decreases with each landed plane', function(){
           airport.land(plane);
           airport.land(plane);
           expect(airport.landedPlanes).toContain(plane, plane);
           expect(airport.currentCapacity).toEqual(31)
       });

       it('throws an error when its full', function(){
          var cap = Airport.INITIAL_CAPACITY;
          for(var i = 0; i < cap; i++) {
              console.log('I am landing a plane n ' + i);
              airport.land(plane);
          }
          expect(function(){ airport.land(plane); }).toThrowError('airport filled to capacity');
       })
   });
});
