describe("calculateNewItemPrice", function() {
	beforeEach(function () {
		items = initItems();
		counters = initCounters();
	});

	describe("with parameter 0", function () {
		var par;
		beforeEach(function () {
			par = 0;
		});

		it("returns 21 when price is 1 and level is 2.", function() {
			var returnValue;
			items[par][counters[par]].price = 1;
			items[par][counters[par]].level = 2;
			returnValue = calculateNewItemPrice(par);
			expect(returnValue).toEqual(21);
		});
		it("returns 100 when price is 50 and level 5.", function() {
			var returnValue;
			items[par][counters[par]].price = 50;
			items[par][counters[par]].level = 5;
			returnValue = calculateNewItemPrice(par);
			expect(returnValue).toEqual(100);
		});
	});

	describe("with parameter 1", function () {
		var par;
		beforeEach(function () {
			par = 1;
		});

		it("returns 21 when price is 1 and level is 2.", function() {
			var returnValue;
			items[par][counters[par]].price = 1;
			items[par][counters[par]].level = 2;
			returnValue = calculateNewItemPrice(par);
			expect(returnValue).toEqual(21);
		});
		it("returns 100 when price is 50 and level 5.", function() {
			var returnValue;
			items[par][counters[par]].price = 50;
			items[par][counters[par]].level = 5;
			returnValue = calculateNewItemPrice(par);
			expect(returnValue).toEqual(100);
		});
	});

	describe("with parameter 2", function () {
		var par;
		beforeEach(function () {
			par = 2;
		});

		it("returns 21 when price is 1 and level is 2.", function() {
			var returnValue;
			items[par][counters[par]].price = 1;
			items[par][counters[par]].level = 2;
			returnValue = calculateNewItemPrice(par);
			expect(returnValue).toEqual(21);
		});
		
		it("returns 100 when price is 50 and level 5.", function() {
			var returnValue;
			items[par][counters[par]].price = 50;
			items[par][counters[par]].level = 5;
			returnValue = calculateNewItemPrice(par);
			expect(returnValue).toEqual(100);
		});
	});
})