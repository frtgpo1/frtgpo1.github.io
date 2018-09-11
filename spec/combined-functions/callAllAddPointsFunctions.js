describe("callAllAddPointsFunctions", function() {
    beforeEach(function() {
        items = initItems();
        counters = initCounters();
    });

    it("calls addValueToClickCounter function.", function() {
        spyOn(window, 'addValueToClickCounter');
        callAllAddPointsFunctions(0);
        expect(addValueToClickCounter).toHaveBeenCalled();
    });

    it("calls displayCurrentClickCounterValueOnScreen function.", function() {
        spyOn(window, 'displayCurrentClickCounterValueOnScreen');
        callAllAddPointsFunctions(0);
        expect(displayCurrentClickCounterValueOnScreen).toHaveBeenCalled();
    });

    it("calls setItemsCssClassesToAvailableIfClickCounterHigherOrEqualToCurrentItemPriceAndLastItemLevelLowerOrEqualToItemLevelMax function.", function() {
        spyOn(window, 'setItemsCssClassesToAvailableIfClickCounterHigherOrEqualToCurrentItemPriceAndLastItemLevelLowerOrEqualToItemLevelMax');
        callAllAddPointsFunctions(0);
        expect(setItemsCssClassesToAvailableIfClickCounterHigherOrEqualToCurrentItemPriceAndLastItemLevelLowerOrEqualToItemLevelMax).toHaveBeenCalled();
    });

    it("calls callAllClickTextAnimationFunctions function.", function() {
        spyOn(window, 'callAllClickTextAnimationFunctions');
        callAllAddPointsFunctions(0);
        expect(callAllClickTextAnimationFunctions).toHaveBeenCalled();
    });

    it("calls addValueToClickCounter function with callAllAddPointsFunctions' parameter.", function() {
        var par;
        spyOn(window, 'addValueToClickCounter');
        callAllAddPointsFunctions(par);
        expect(addValueToClickCounter).toHaveBeenCalledWith(par);
    });

    it("calls callAllClickTextAnimationFunctions function with callAllAddPointsFunctions' parameter.", function() {
        var par;
        spyOn(window, 'callAllClickTextAnimationFunctions');
        callAllAddPointsFunctions(par);
        expect(callAllClickTextAnimationFunctions).toHaveBeenCalledWith(par);
    });



});