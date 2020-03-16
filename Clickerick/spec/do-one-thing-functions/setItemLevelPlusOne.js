describe("setItemLevelPlusOne", function() {
	beforeEach(function() {
		items = initItems();
		counters = initCounters();
	});

	describe("with parameter 0", function() {
		var par;
		beforeEach(function() {
			par = 0;
		});
		it("sets the item level to 1 when it was 0 before.", function() {
			items[par][counters[par]].level = 0;
			setItemLevelPlusOne(par);
			expect(items[par][counters[par]].level).toEqual(1);
		});
		it("sets the item level to 10 when it was 9 before.", function() {
			items[par][counters[par]].level = 9;
			setItemLevelPlusOne(par);
			expect(items[par][counters[par]].level).toEqual(10);
		});
		it("sets the item level to 50 when it was 49 before.", function() {
			items[par][counters[par]].level = 49;
			setItemLevelPlusOne(par);
			expect(items[par][counters[par]].level).toEqual(50);
		});
	});

	describe("with parameter 1", function() {
		var par;
		beforeEach(function() {
			par = 1;
		});
		it("sets the item level to 1 when it was 0 before.", function() {
			items[par][counters[par]].level = 0;
			setItemLevelPlusOne(par);
			expect(items[par][counters[par]].level).toEqual(1);
		});
		it("sets the item level to 10 when it was 9 before.", function() {
			items[par][counters[par]].level = 9;
			setItemLevelPlusOne(par);
			expect(items[par][counters[par]].level).toEqual(10);
		});
		it("sets the item level to 50 when it was 49 before.", function() {
			items[par][counters[par]].level = 49;
			setItemLevelPlusOne(par);
			expect(items[par][counters[par]].level).toEqual(50);
		});
	});

	describe("with parameter 2", function() {
		var par;
		beforeEach(function() {
			par = 2;
		});
		it("sets the item level to 1 when it was 0 before.", function() {
			items[par][counters[par]].level = 0;
			setItemLevelPlusOne(par);
			expect(items[par][counters[par]].level).toEqual(1);
		});
		it("sets the item level to 10 when it was 9 before.", function() {
			items[par][counters[par]].level = 9;
			setItemLevelPlusOne(par);
			expect(items[par][counters[par]].level).toEqual(10);
		});
		it("sets the item level to 50 when it was 49 before.", function() {
			items[par][counters[par]].level = 49;
			setItemLevelPlusOne(par);
			expect(items[par][counters[par]].level).toEqual(50);
		});
	});
});