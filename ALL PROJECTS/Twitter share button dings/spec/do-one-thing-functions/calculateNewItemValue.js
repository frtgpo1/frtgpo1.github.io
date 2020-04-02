describe("calculateNewItemValue", function() {

	beforeEach(function () {
		items = initItems();
		counters = initCounters();
	});

	describe("with parameter 0", function() {
		var par;
		beforeEach(function() {
			par = 0;
		});
		
		it("returns 5 when value was 1 and level was 2.", function() {
			items[par][counters[par]].value = 1;
			items[par][counters[par]].level = 2;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).toEqual(5);
		});

		it("doesn't return something greater than 5 when value was 1 and level was 2.", function() {
			items[par][counters[par]].value = 1;
			items[par][counters[par]].level = 2;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeGreaterThan(5);
		});    

		it("doesn't return something less than 5 when value was 1 and level was 2.", function() {
			items[par][counters[par]].value = 1;
			items[par][counters[par]].level = 2;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeLessThan(5);
		});  

		it("returns 60 when value was 50 and level was 5.", function() {
			items[par][counters[par]].value = 50;
			items[par][counters[par]].level = 5;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).toEqual(60);
		});

		it("doesn't return something greater than 60 when value was 50 and level was 5.", function() {
			items[par][counters[par]].value = 50;
			items[par][counters[par]].level = 5;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeGreaterThan(60);
		});  

		it("doesn't return something less than 60 when value was 50 and level was 5.", function() {
			items[par][counters[par]].value = 50;
			items[par][counters[par]].level = 5;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeLessThan(60);
		}); 
	});

	describe("with parameter 1", function() {
		var par;
		beforeEach(function() {
			par = 1;
		});
		
		it("returns 5 when value was 1 and level was 2.", function() {
			items[par][counters[par]].value = 1;
			items[par][counters[par]].level = 2;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).toEqual(5);
		});

		it("doesn't return something greater than 5 when value was 1 and level was 2.", function() {
			items[par][counters[par]].value = 1;
			items[par][counters[par]].level = 2;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeGreaterThan(5);
		});    

		it("doesn't return something less than 5 when value was 1 and level was 2.", function() {
			items[par][counters[par]].value = 1;
			items[par][counters[par]].level = 2;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeLessThan(5);
		});  

		it("returns 60 when value was 50 and level was 5.", function() {
			items[par][counters[par]].value = 50;
			items[par][counters[par]].level = 5;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).toEqual(60);
		});

		it("doesn't return something greater than 60 when value was 50 and level was 5.", function() {
			items[par][counters[par]].value = 50;
			items[par][counters[par]].level = 5;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeGreaterThan(60);
		});  

		it("doesn't return something less than 60 when value was 50 and level was 5.", function() {
			items[par][counters[par]].value = 50;
			items[par][counters[par]].level = 5;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeLessThan(60);
		}); 
	});

	describe("with parameter 2", function() {
		var par;
		beforeEach(function() {
			par = 2;
		});
		
		it("returns 5 when value was 1 and level was 2.", function() {
			items[par][counters[par]].value = 1;
			items[par][counters[par]].level = 2;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).toEqual(5);
		});

		it("doesn't return something greater than 5 when value was 1 and level was 2.", function() {
			items[par][counters[par]].value = 1;
			items[par][counters[par]].level = 2;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeGreaterThan(5);
		});    

		it("doesn't return something less than 5 when value was 1 and level was 2.", function() {
			items[par][counters[par]].value = 1;
			items[par][counters[par]].level = 2;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeLessThan(5);
		});  

		it("returns 60 when value was 50 and level was 5.", function() {
			items[par][counters[par]].value = 50;
			items[par][counters[par]].level = 5;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).toEqual(60);
		});

		it("doesn't return something greater than 60 when value was 50 and level was 5.", function() {
			items[par][counters[par]].value = 50;
			items[par][counters[par]].level = 5;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeGreaterThan(60);
		});  

		it("doesn't return something less than 60 when value was 50 and level was 5.", function() {
			items[par][counters[par]].value = 50;
			items[par][counters[par]].level = 5;
			var returnValue = calculateNewItemValue(par);
			expect(returnValue).not.toBeLessThan(60);
		}); 
	});

});
