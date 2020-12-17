describe("substractItemPriceFromClickCounter", function() {
	beforeEach(function () {
		items = initItems();
		counters = initCounters();
	});

	describe("with parameter 0", function() {
		var par;
		beforeEach(function() {
			par = 0;
		});
		it("makes clickCounter equal to 100 when price was 50 and clickCounter was 150.", function() {
			items[par][counters[par]].price = 50;
			clickCounter = 150;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).toEqual(100);
		});

		it("doesn't make clickCounter greater than 100 when price was 50 and clickCounter was 150.", function() {
			items[par][counters[par]].price = 50;
			clickCounter = 150;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeGreaterThan(100);
		});

		it("doesn't make clickCounter less than 100 when price was 50 and clickCounter was 150.", function() {
			items[par][counters[par]].price = 50;
			clickCounter = 150;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeLessThan(100);
		});

		it("makes clickCounter equal to 77 when price was 1 and clickCounter was 78.", function() {
			items[par][counters[par]].price = 1;
			clickCounter = 78;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).toEqual(77);
		});

		it("doesn't make clickCounter greater than 77 when price was 1 and clickCounter was 78.", function() {
			items[par][counters[par]].price = 1;
			clickCounter = 78;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeGreaterThan(77);
		});

		it("doesn't make clickCounter less than 77 when price was 1 and clickCounter was 78.", function() {
			items[par][counters[par]].price = 1;
			clickCounter = 78;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeLessThan(77);
		});
	});

	describe("with parameter 1", function() {
		var par;
		beforeEach(function() {
			par = 1;
		});
		it("makes clickCounter equal to 100 when price was 100 and clickCounter was 200.", function() {
			items[par][counters[par]].price = 100;
			clickCounter = 200;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).toEqual(100);
		});

		it("doesn't make clickCounter greater than 100 when price was 100 and clickCounter was 200.", function() {
			items[par][counters[par]].price = 100;
			clickCounter = 200;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeGreaterThan(100);
		});

		it("doesn't make clickCounter less than 100 when price was 100 and clickCounter was 200.", function() {
			items[par][counters[par]].price = 100;
			clickCounter = 200;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeLessThan(100);
		});

		it("makes clickCounter equal to 98 when price was 1 and clickCounter was 99.", function() {
			items[par][counters[par]].price = 1;
			clickCounter = 99;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).toEqual(98);
		});

		it("doesn't make clickCounter greater than 98 when price was 1 and clickCounter was 99.", function() {
			items[par][counters[par]].price = 1;
			clickCounter = 99;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeGreaterThan(98);
		});

		it("doesn't make clickCounter less than 98 when price was 1 and clickCounter was 99.", function() {
			items[par][counters[par]].price = 1;
			clickCounter = 99;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeLessThan(98);
		});
	});

	describe("with parameter 2", function() {
		var par;
		beforeEach(function() {
			par = 2;
		});
		it("makes clickCounter equal to 50 when price was 25 and clickCounter was 75.", function() {
			items[par][counters[par]].price = 25;
			clickCounter = 75;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).toEqual(50);
		});

		it("doesn't make clickCounter greater than 50 when price was 25 and clickCounter was 75.", function() {
			items[par][counters[par]].price = 25;
			clickCounter = 75;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeGreaterThan(50);
		});

		it("doesn't make clickCounter less than 50 when price was 25 and clickCounter was 75.", function() {
			items[par][counters[par]].price = 25;
			clickCounter = 75;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeLessThan(50);
		});

		it("makes clickCounter equal to 999 when price was 1 and clickCounter was 1000.", function() {
			items[par][counters[par]].price = 1;
			clickCounter = 1000;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).toEqual(999);
		});

		it("doesn't make clickCounter greater than 999 when price was 1 and clickCounter was 1000.", function() {
			items[par][counters[par]].price = 1;
			clickCounter = 1000;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeGreaterThan(999);
		});

		it("doesn't make clickCounter less than 999 when price was 1 and clickCounter was 1000.", function() {
			items[par][counters[par]].price = 1;
			clickCounter = 1000;
			substractItemPriceFromClickCounter(par);
			expect(clickCounter).not.toBeLessThan(999);
		});
	});
});