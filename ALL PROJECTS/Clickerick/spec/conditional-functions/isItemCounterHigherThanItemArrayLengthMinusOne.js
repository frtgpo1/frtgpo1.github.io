describe("isItemCounterHigherThanItemArrayLengthMinusOne", function() {

	beforeEach(function() {
		items = initItems();
		counters = initCounters();
	});

	describe("with parameter 0",function () {
		var par;
		beforeEach(function () {
			par = 0;
			items[par].length = 5;
		});

		it("returns true if item counter is higher than item array length minus one.", function() {
			counters[par] = 5;
			var result = isItemCounterHigherThanItemArrayLengthMinusOne(par);
			expect(result).toBe(true);
		});

		it("returns false if item counter is less than item array length minus one.", function() {
			counters[par] = 3;
			var result = isItemCounterHigherThanItemArrayLengthMinusOne(par);
			expect(result).toBe(false);
		});

		it("returns false if item counter is equal to item array length minus one.", function() {
			counters[par] = 4;
			var result = isItemCounterHigherThanItemArrayLengthMinusOne(par);
			expect(result).toBe(false);
		});
	});

	describe("with parameter 1",function () {
		var par;
		beforeEach(function () {
			par = 1;
			items[par].length = 10;
		});

		it("returns true if item counter is higher than item array length minus one.", function() {
			counters[par] = 10;
			var result = isItemCounterHigherThanItemArrayLengthMinusOne(par);
			expect(result).toBe(true);
		});

		it("returns false if item counter is less than item array length minus one.", function() {
			counters[par] = 8;
			var result = isItemCounterHigherThanItemArrayLengthMinusOne(par);
			expect(result).toBe(false);
		});

		it("returns false if item counter is equal to item array length minus one.", function() {
			counters[par] = 9;
			var result = isItemCounterHigherThanItemArrayLengthMinusOne(par);
			expect(result).toBe(false);
		});
	});

	describe(" with parameter 2",function () {
		var par;
		beforeEach(function () {
			par = 2;
			items[par].length = 20;
		});

		it("returns true if item counter is higher than item array length minus one.", function() {
			counters[par] = 20;
			var result = isItemCounterHigherThanItemArrayLengthMinusOne(par);
			expect(result).toBe(true);
		});

		it("returns false if item counter is less than item array length minus one.", function() {
			counters[par] = 18;
			var result = isItemCounterHigherThanItemArrayLengthMinusOne(par);
			expect(result).toBe(false);
		});

		it("returns false if item counter is equal to item array length minus one.", function() {
			counters[par] = 19;
			var result = isItemCounterHigherThanItemArrayLengthMinusOne(par);
			expect(result).toBe(false);
		});
	});
});
