describe("isCurrentItemLevelEqualToZero", function() {

	beforeEach(function() {
		items = initItems();
		counters = initCounters();
	});

	describe("with parameter 0", function () {
		var par;
		beforeEach(function() {
			par = 0;
		});
		it("returns true if item level equals zero.", function() {
			items[par][counters[par]].level = 0;
			var returnedValue = isCurrentItemLevelEqualToZero(par);
			expect(returnedValue).toBe(true);
		});

		it("returns false if item level doesn't equal zero.", function() {
			items[par][counters[par]].level = 1;
			var returnedValue = isCurrentItemLevelEqualToZero(par);
			expect(returnedValue).toBe(false);
		});
	});

	describe("with parameter 1", function () {
		var par;
		beforeEach(function() {
			par = 1;
		});
		it("returns true if item level equals zero.", function() {
			items[par][counters[par]].level = 0;
			var returnedValue = isCurrentItemLevelEqualToZero(par);
			expect(returnedValue).toBe(true);
		});

		it("returns false if item level doesn't equal zero.", function() {
			items[par][counters[par]].level = 2;
			var returnedValue = isCurrentItemLevelEqualToZero(par);
			expect(returnedValue).toBe(false);
		});
	});

	describe("with parameter 2", function () {
		var par;
		beforeEach(function() {
			par = 2;
		});
		it("returns true if item level equals zero.", function() {
			items[par][counters[par]].level = 0;
			var returnedValue = isCurrentItemLevelEqualToZero(par);
			expect(returnedValue).toBe(true);
		});

		it("returns false if item level doesn't equal zero.", function() {
			items[par][counters[par]].level = 3;
			var returnedValue = isCurrentItemLevelEqualToZero(par);
			expect(returnedValue).toBe(false);
		});
	});
});