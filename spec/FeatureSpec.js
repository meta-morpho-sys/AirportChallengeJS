'use strict';

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plan to land at
//   an airport and confirm that it has landed

describe('Feature Test:', function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

//   As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to take off from
//   an airport and confirm that it is no longer in the airport

  it('planes can be instructed to take off', function(){
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.planes).not.toContain(plane);
  });

//   As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy

  it('prevents planes from takeoff when weather is stormy', function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff(airport);}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });

//   As an air traffic controller
// To ensure safety
// I want to prevent landing when weather is stormy

  it('prevents planes from landing when weather is stormy', function(){
    plane.takeoff(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.land(airport);}).toThrowError('cannot land during storm');
    expect(airport.planes()).not.toContain(plane);
  });

});
