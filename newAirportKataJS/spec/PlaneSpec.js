describe('Plane', function(){
    var plane;

    beforeEach(function(){
        plane = new Plane();
    });

    it("knows it's landed", function(){
        plane.landAtAirport();
        expect(plane.isLanded).toBe(true);
    });

    it("knows it's flying", function(){
        plane.takeOff();
        expect(plane.isLanded).toBe(false);
    })
});
