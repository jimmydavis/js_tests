describe("a bus", function() {

  var bus, passenger, passenger2;

  beforeEach(function() {
    bus = new Bus();
    passenger = { name: "Levon Helm" };
    passenger2 = { name: "Yoko Ono" };
  });

  it("is empty", function() {
    expect(bus.isEmpty()).toBe(true);
  });

  it("accepts a passenger", function() {
    bus.add(passenger);
    expect(bus.isEmpty()).toBe(false);
  });

  it("returns true if it contains a specific passenger", function() {
    bus.add(passenger);
    expect(bus.contains(passenger)).toBe(true);
    expect(bus.contains(passenger2)).toBe(false);
  });

  it("accepts multiple passengers", function() {
    bus.add(passenger);
    expect(bus.getSize()).toBe(1);
    bus.add(passenger2);
    expect(bus.getSize()).toBeGreaterThan(1);
  });

  it("throws an error if we add passenger twice", function() {
    bus.add(passenger);
    var test = function() {
      bus.add(passenger);
    }
    expect(test).toThrow();
    expect(bus.getSize()).toBeLessThan(2);
  });

  it("retuens a list of passengers names", function() {
    bus.add(passenger);
    bus.add(passenger2);
    expect(bus.getPassengers()).toEqual(["Levon Helm", "Yoko Ono"]);
  });


});
