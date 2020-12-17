describe("isCurrentItemLevelHigherThanItemLevelMax", function() {
	beforeEach(function() {
		items = initItems();
		counters = initCounters();
	});

	describe("with parameter 0", function() {
		var par;
		beforeEach(function() {
			par = 0;
			levelMax = 10;
		});

		it("should return true if item level is higher than item level max.", function() {
			items[par][counters[par]].level = 11;
			var result = isCurrentItemLevelHigherThanItemLevelMax(par);
			expect(result).toBe(true);
		});

		it("should return false if item level is less than item level max.", function() {
			items[par][counters[par]].level = 9;
			var result = isCurrentItemLevelHigherThanItemLevelMax(par);
			expect(result).toBe(false);
		});

		it("should return false if item level is equal to item level max.", function() {
			items[par][counters[par]].level = 10;
			var result = isCurrentItemLevelHigherThanItemLevelMax(par);
			expect(result).toBe(false);
		});
	});

	describe("with parameter 1", function() {
		var par;
		beforeEach(function() {
			par = 1;
			levelMax = 20;
		});

		it("should return true if item level is higher than item level max.", function() {
			items[par][counters[par]].level = 21;
			var result = isCurrentItemLevelHigherThanItemLevelMax(par);
			expect(result).toBe(true);
		});

		it("should return false if item level is less than item level max.", function() {
			items[par][counters[par]].level = 19;
			var result = isCurrentItemLevelHigherThanItemLevelMax(par);
			expect(result).toBe(false);
		});

		it("should return false if item level is equal to item level max.", function() {
			items[par][counters[par]].level = 20;
			var result = isCurrentItemLevelHigherThanItemLevelMax(par);
			expect(result).toBe(false);
		});
	});

	describe("with parameter 2", function() {
		var par;
		beforeEach(function() {
			par = 2;
			levelMax = 30;
		});

		it("should return true if item level is higher than item level max.", function() {
			items[par][counters[par]].level = 31;
			var result = isCurrentItemLevelHigherThanItemLevelMax(par);
			expect(result).toBe(true);
		});

		it("should return false if item level is less than item level max.", function() {
			items[par][counters[par]].level = 29;
			var result = isCurrentItemLevelHigherThanItemLevelMax(par);
			expect(result).toBe(false);
		});

		it("should return false if item level is equal to item level max.", function() {
			items[par][counters[par]].level = 30;
			var result = isCurrentItemLevelHigherThanItemLevelMax(par);
			expect(result).toBe(false);
		});
	});


});