describe("addValueToClickCounter", function() {
	
	describe("with parameter 100 and clickCounter 0", function() {
		it("makes clickCounter equal 100.", function() {
			clickCounter = 0;
			var value = 100;
			addValueToClickCounter(value);
			expect(clickCounter).toEqual(100);
		});
	});

	describe("with parameter -100 and clickCounter 10", function() {
		it("makes clickCounter equal -90.", function() {
			clickCounter = 10;
			var value = -100;
			addValueToClickCounter(value);
			expect(clickCounter).toEqual(-90);
		});
	});
});