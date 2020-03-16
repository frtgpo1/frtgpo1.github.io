describe("setItemValueAccordingToCalculation", function() {
    beforeEach(function() {
        items = initItems();
        counters = initCounters();
    });

    describe("with parameter 0", function() {
        var par;
        beforeEach(function() {
            par = 0;
        });

        it("calls the calculateNewItemValue function.", function() {
            spyOn(window, 'calculateNewItemValue');
            setItemValueAccordingToCalculation(par);
            expect(calculateNewItemValue).toHaveBeenCalled();
        });

        it("calls the calculateNewItemValue function with parameter 0.", function() {
            spyOn(window, 'calculateNewItemValue');
            setItemValueAccordingToCalculation(par);
            expect(calculateNewItemValue).toHaveBeenCalledWith(par);
        });
    });

    describe("with parameter 1", function() {
        var par;
        beforeEach(function() {
            par = 1;
        });

        it("calls the calculateNewItemValue function.", function() {
            spyOn(window, 'calculateNewItemValue');
            setItemValueAccordingToCalculation(par);
            expect(calculateNewItemValue).toHaveBeenCalled();
        });

        it("calls the calculateNewItemValue function with parameter 1.", function() {
            spyOn(window, 'calculateNewItemValue');
            setItemValueAccordingToCalculation(par);
            expect(calculateNewItemValue).toHaveBeenCalledWith(par);
        });
    });

    describe("with parameter 2", function() {
        var par;
        beforeEach(function() {
            par = 2;
        });

        it("calls the calculateNewItemValue function.", function() {
            spyOn(window, 'calculateNewItemValue');
            setItemValueAccordingToCalculation(par);
            expect(calculateNewItemValue).toHaveBeenCalled();
        });

        it("calls the calculateNewItemValue function with parameter 2.", function() {
            spyOn(window, 'calculateNewItemValue');
            setItemValueAccordingToCalculation(par);
            expect(calculateNewItemValue).toHaveBeenCalledWith(par);
        });
    });
});