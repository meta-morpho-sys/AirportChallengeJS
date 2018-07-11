describe('Airport', function() {
   var airport;
   var plane;

   beforeEach(function(){
       airport = new Airport();
   });

   it('has an initial capacity', function(){
       expect(Airport.INITIAL_CAPACITY).toEqual(33)
   });

   describe('lands plane', function(){
       it('successfully', function(){
           plane = new Plane();
           spyOn(plane, 'landAtAirport').and.returnValue(true);
           expect(airport.land(plane)).toEqual(true);
           expect(plane.landAtAirport).toHaveBeenCalled();
        });

       it('and adds the plane to the list of landed planes', function(){
           plane = new Plane();
           airport.land(plane);
           expect(airport.landedPlanes).toContain(1);
       })
   });
});
