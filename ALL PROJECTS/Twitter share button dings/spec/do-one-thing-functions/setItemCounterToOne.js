describe("setItemCounterToOne", function() {
    
    it("should set the item counter to one with parameter 0.", function() {
        counters[0] = 50;
        setItemCounterToOne(0);
        expect(counters[0]).toEqual(1);

    });

    it("should set the item counter to one with parameter 1.", function() {
        counters[1] = 50;
        setItemCounterToOne(1);
        expect(counters[1]).toEqual(1);

    });

    it("should set the item counter to one with parameter 2.", function() {
        counters[2] = 50;
        setItemCounterToOne(2);
        expect(counters[2]).toEqual(1);
    });

});