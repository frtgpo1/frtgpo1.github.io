describe("addOneToCounterOrSetToOneWhenMaxIsReached", function() { 

	it("returns former-counter-plus-one if counter was bigger than 0 and lower than maximum before the function was called.", function() {
		var exampleCounter = 1;
		var exampleCounter = addOneToCounterOrSetToOneWhenMaxIsReached(exampleCounter, 10);
		expect(exampleCounter).toEqual(2);
	});    

	it("returns 1 if counter was at maximum before the function was called.", function() {
		var exampleCounter = 100;
		var exampleCounter = addOneToCounterOrSetToOneWhenMaxIsReached(exampleCounter, 100);
		expect(exampleCounter).toEqual(1);
	});    

	it("logs a caution to console if counter was higher than maximum before the functions was called.", function() {
		spyOn(console, 'log');
		var exampleCounter = 101;
		var exampleCounter = addOneToCounterOrSetToOneWhenMaxIsReached(exampleCounter, 100);
		expect(console.log).toHaveBeenCalledWith('caution: counter is higher than maximum.');
	});  

	it("logs a caution to console if counter was 0 before the functions was called.", function() {
		spyOn(console, 'log');
		var exampleCounter = 0;
		var exampleCounter = addOneToCounterOrSetToOneWhenMaxIsReached(exampleCounter, 10);
		expect(console.log).toHaveBeenCalledWith('caution: counter is 0.');
	});  

	it("logs a caution to console if counter was negative before the functions was called.", function() {
		spyOn(console, 'log');
		var exampleCounter = -100;
		var exampleCounter = addOneToCounterOrSetToOneWhenMaxIsReached(exampleCounter, 10);
		expect(console.log).toHaveBeenCalledWith('caution: counter is negative.');
	});  
});