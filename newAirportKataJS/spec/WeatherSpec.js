describe('Weather', function() {
    var weather;
    beforeEach(function () {
        weather = new Weather();
    });
    it('is stormy', function() {
        spyOn(Math, 'random').and.returnValue(0.9);
        expect(weather.isStormy()).toBeTruthy();
    });

    it('is not stormy', function() {
        spyOn(Math, 'random').and.returnValue(0.4);
        expect(weather.isStormy()).toBeFalsy();
    })

});
