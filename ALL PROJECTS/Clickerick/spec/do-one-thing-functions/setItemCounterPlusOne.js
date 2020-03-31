describe("setItemCounterToOne", function() {
    beforeEach(function () {
		counters = initCounters();
	});

    describe("with parameter 0",function() {
        var par;
        beforeEach(function() {
            par = 0;
        })
        
        it("sets the item counter to 1 when it was 0 before.", function() {
            counters[par] = 0;
            setItemCounterPlusOne(par);
            expect(counters[par]).toEqual(1);
        });

        it("sets the item counter to 10 when it was 9 before.", function() {
            counters[par] = 9;
            setItemCounterPlusOne(par);
            expect(counters[par]).toEqual(10);
        });

        it("sets the item counter to -49 when it was -50 before.", function() {
            counters[par] = -50;
            setItemCounterPlusOne(par);
            expect(counters[par]).toEqual(-49);
        });
    });

    describe("with parameter 1",function() {
        var par;
        beforeEach(function() {
            par = 1;
        })
        
        it("sets the item counter to 1 when it was 0 before.", function() {
            counters[par] = 0;
            setItemCounterPlusOne(par);
            expect(counters[par]).toEqual(1);
        });

        it("sets the item counter to 10 when it was 9 before.", function() {
            counters[par] = 9;
            setItemCounterPlusOne(par);
            expect(counters[par]).toEqual(10);
        });

        it("sets the item counter to -49 when it was -50 before.", function() {
            counters[par] = -50;
            setItemCounterPlusOne(par);
            expect(counters[par]).toEqual(-49);
        });
    });

    describe("with parameter 2",function() {
        var par;
        beforeEach(function() {
            par = 2;
        })
        
        it("sets the item counter to 1 when it was 0 before.", function() {
            counters[par] = 0;
            setItemCounterPlusOne(par);
            expect(counters[par]).toEqual(1);
        });

        it("sets the item counter to 10 when it was 9 before.", function() {
            counters[par] = 9;
            setItemCounterPlusOne(par);
            expect(counters[par]).toEqual(10);
        });

        it("sets the item counter to -49 when it was -50 before.", function() {
            counters[par] = -50;
            setItemCounterPlusOne(par);
            expect(counters[par]).toEqual(-49);
        });
    });
});