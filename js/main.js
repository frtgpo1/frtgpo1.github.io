/*

To understand the structure of this program, there are a few things to know:

Every unicorn-item is located in the 'unicorns' array which groups all the unicorns.
The 'unicorns' array is located in the 'items' array that lists all the items. Same thing for the other items.

Its like this:

														  items
							 _______________________________|_______________________________ _______________________________ 	...
							|															  	|									...
						unicorns														cottoncandys 							...
					  ( items[0] )														( items[1] )
	________________________|___________________ ______ ...			 _______________________|___________________ ______ 		...
	|						|					|		...			|						|					|				...						
unicorn-item		unicorn1-item		unicorn2-item	...		cottoncandy-item	cottoncandy-item	cottoncandy-item		...
( unicorns[0] )		( unicorns[1] )		( unicorns[2] )			( cottoncandys[0] ) ( cottoncandys[1] ) ( cottoncandys[2] )


						   /\															    /\
						  /  \															   /  \
so when we want to call  /this\  item, we simply write items[0][1]. If we want 			  /this\	      item, we write items[1][1]. Get it?

Also, every item has a counter that declares which item (unicorn1, unicorn2...) is the current one to apply things to.
These counters are also put in an array 'counters'. Like the unicorn has the number 0 in the 'items' array, it also has the number 0 in the counter array.
Same thing applies to the other items.

So if we want to call the current unicorn, we call it by typing items[0][counters[0]].
In this way we can always call the current item by just changing the '0' to just another number.
The reason why we do this is to make functions universal. We use the array numbers as a function argument called 'num'.
By doing this the function can by applied to every item depending on what number is given to the function.


A few abbreviations which are used in this code:
mid = middle
max = maximum
var = variable
init = initialize

*/

//	item constructor
var Item = function (name, value, price) {
	this.name = name;
	this.value = value;
	this.price = price;
	this.level = 0;
	this.selector = ('.' + name);
	this.buyTextSelector = ('.buy_text_' + name);
	this.setPrice = function(newPrice) {
		this.price = Math.floor(newPrice);
	};
	$(this.buyTextSelector).text(this.price);
};

//	declare variables
var gameActive = true;
var cloudCounter = 1;
var clickCounter = 0;
var clickValue = 1;
var clickTextCounter = 1;
var levelMax = 10;

var items = initItems();
var counters = initCounters();

var callbackUnicorn1;
var callbackUnicorn2;
var callbackUnicorn3;
var callbackUnicorn4;
var callbackCottoncandy1;
var callbackCottoncandy2;
var callbackCandycane1;
var callbackCandycane2;

//	initialization
function initCounters() {
	var unicornCounter = 1;
	var cottoncandyCounter = 1;
	var candycaneCounter = 1;
	return [unicornCounter, cottoncandyCounter, candycaneCounter];
}

function initItems() {
	var unicorns = initUnicorns();
	var cottoncandys = initCottoncandys();
	var candycanes = initCandycanes();
	return [unicorns, cottoncandys, candycanes];
}

function initUnicorns() {
	var unicorn = new Item('unicorn', 10, 50);
	var unicorn1 = new Item('unicorn', 10, 50);
	var unicorn2 = new Item('unicorn', 10, 50);
	var unicorn3 = new Item('unicorn', 10, 50);
	var unicorn4 = new Item('unicorn', 10, 50);
	return [unicorn, unicorn1, unicorn2, unicorn3, unicorn4];
}

function initCottoncandys() {
	var cottoncandy = new Item('cottoncandy', 100, 250);
	var cottoncandy1 = new Item('cottoncandy', 100, 250);
	var cottoncandy2 = new Item('cottoncandy', 100, 250);
	return [cottoncandy, cottoncandy1, cottoncandy2];
}

function initCandycanes() {
	var candycane = new Item('candycane', 200, 1000);
	var candycane1 = new Item('candycane', 200, 1000);
	var candycane2 = new Item('candycane', 200, 1000);
	return [candycane, candycane1, candycane2];
}

/*
 *	-----------ON CLICK FUNCTIONS--------------
 */

$('.cloud').on('click', function() {
	var cloudSmNameVar = ('.cloud_sm--' + cloudCounter);
	var cloudNameVar = ('.cloud');
	callAllAddPointsFunctions(clickValue);
	startUpliftAnimation(cloudSmNameVar);
	cloudCounter = addOneToCounterOrSetToOneWhenMaxIsReached(cloudCounter, 5);
	startIsClickedAnimation(cloudNameVar);
});

$(items[0][0].selector).on('click', function() {
	if (clickCounter >= items[0][counters[0]].price) {
		if (items[0][counters[0]].level <= levelMax) {
			callAllItemOnClickFunctions(0);
		}
	}
});

$(items[1][0].selector).on('click', function() {
	if (clickCounter >= items[1][counters[1]].price) {
		if (items[1][counters[1]].level <= levelMax) {
			callAllItemOnClickFunctions(1);
		}
	}
});

$(items[2][0].selector).on('click', function() {
	if (clickCounter >= items[2][counters[2]].price) {
		if (items[2][counters[2]].level <= levelMax) {
			callAllItemOnClickFunctions(2);
		}
	}
});

/*
 *	-----------FUNCTIONS THAT ARE A COMBINATION OF MULTIPLE FUNCTIONS--------------
 */

//	 functions that call other functions

function setClickValueAccordingToCalculation(num) {
	clickValue = Math.ceil(calculateNewClickValue(num));
}

function setItemValueAccordingToCalculation(num){
	items[num][counters[num]].value = calculateNewItemValue(num);
}

function setItemPriceAccordingToCalculation(num){
	items[num][counters[num]].setPrice( calculateNewItemPrice(num) );
}

function startItemAnimationIfItemHasFirstLevel(num){
	switch (num) {
		case 0:
			if (isCurrentItemLevelEqualToZero(0)) {
				unicornMidAnimation();
			}
			break;
		case 1:
			if (isCurrentItemLevelEqualToZero(1)) {
				cottoncandyMidAnimation();
			}
			break;
		case 2:
			if (isCurrentItemLevelEqualToZero(2)) {
				candycaneMidAnimation();
			}
			break;
	}
}

function setItemsCssClassesToAvailableIfClickCounterHigherOrEqualToCurrentItemPriceAndLastItemLevelLowerOrEqualToItemLevelMax() {
for (var i = 0; i < items.length; i++) {
		if (!isClickCounterLowerThanItemPrice(i) && !isCurrentItemLevelHigherThanItemLevelMax(i)) {
			setItemCssClassToAvailable(i);
		}
	}
}

function setItemsCssClassesToUnavailableIfClickCounterIsLowerThanCurrentItemPriceAndCurrentItemLevelIsHigherThanItemLevelMax() {
for (var i = 0; i < items.length; i++) {
		if (isClickCounterLowerThanItemPrice(i) || isCurrentItemLevelHigherThanItemLevelMax(i)) {
			setItemCssClassToUnavailable(i);
		}
	}
}

function callAllItemOnClickFunctions(num) {
	setItemBackgroundImageAccordingToLevel(num);
	startItemAnimationIfItemHasFirstLevel(num);
	substractItemPriceFromClickCounter(num);
	displayCurrentClickCounterValueOnScreen();
	setItemValueAccordingToCalculation(num);
	setItemLevelPlusOne(num);
	if (isItemCounterHigherThanItemArrayLengthMinusTwo(num)) {
		if (num === 0) {
			setClickValueAccordingToCalculation(num);
		}
	}
	setItemPriceAccordingToCalculation(num);
	setItemCounterPlusOne(num);
	if (isItemCounterHigherThanItemArrayLengthMinusOne(num)) {
		setItemCounterToOne(num);
	}
	setItemBuyTextAccordingToCurrentItemPrice(num);
	setItemsCssClassesToUnavailableIfClickCounterIsLowerThanCurrentItemPriceAndCurrentItemLevelIsHigherThanItemLevelMax();
	if (isCurrentItemLevelHigherThanItemLevelMax(num)) {
		setBuyTextToMax(num);
	}
	if (isLevelOfAllItemsMax()) {
		callAllEndGameFunctions();
	}
}

function callAllClickTextAnimationFunctions(value) {
		var clickPointsTextCssNameVar = ('.click_points_text' + clickTextCounter);
		var cloudWrapperElement = $('.cloudwrapper');
		var clickTextElement = $('.click_text');

		//	create clickText element, run animation and delete element
		var newParagraph = $('<p></p>');
		newParagraph.addClass('click_text click_points_text' + clickTextCounter);
		cloudWrapperElement.append(newParagraph);
		insertValueInClickTextParagraph(value);
		startClickTextAnimationAndDeleteElementAfterwards(clickPointsTextCssNameVar, clickTextElement);

		clickTextCounter = addOneToCounterOrSetToOneWhenMaxIsReached(clickTextCounter, 40);
	}

function callAllAddPointsFunctions (value) {
	addValueToClickCounter(value);
	displayCurrentClickCounterValueOnScreen();
	setItemsCssClassesToAvailableIfClickCounterHigherOrEqualToCurrentItemPriceAndLastItemLevelLowerOrEqualToItemLevelMax();
	callAllClickTextAnimationFunctions(value);
}

function callAllEndGameFunctions() {
	gameActive = false;
	clearAllAnimationTimeouts();
	pauseTimerAndMakeItVisible();
}

function unicornMidAnimation() {
	var unicornMidNameVar = ('.unicorn_middle--' + counters[0]);
	var currentUnicorn = items[0][counters[0]];
	var cloudNameVar = ('.unicorn_middle_cloud--' + counters[0]);
	var currentUnicornCounter = counters[0];

	var callUnicornAnimationFunctions = function() {
		setTimeout(callAllAddPointsFunctions, 2800, currentUnicorn.value);
		setTimeout(startUpliftAnimation, 2800, cloudNameVar);
		switch(currentUnicornCounter) {
			case 1: 
				startUnicornRightAnimation(unicornMidNameVar);
				callbackUnicorn1 = setTimeout(callUnicornAnimationFunctions, 10000);
				break;
			case 2: 
				startUnicornRightAnimation(unicornMidNameVar);
				callbackUnicorn2 = setTimeout(callUnicornAnimationFunctions, 10000);
				break;
			case 3: 
				startUnicornLeftAnimation(unicornMidNameVar);
				callbackUnicorn3 = setTimeout(callUnicornAnimationFunctions, 10000);
				break;
			case 4: 
				startUnicornLeftAnimation(unicornMidNameVar);
				callbackUnicorn4 = setTimeout(callUnicornAnimationFunctions, 10000);
				break;
		}
	}
	callUnicornAnimationFunctions();
}

function cottoncandyMidAnimation() {
	var cottoncandyNameVar = ('.cottoncandy_middle--' + counters[1]);
	var currentCottoncandy = items[1][counters[1]];
	var cloudNameVar = ('.cottoncandy_middle_cloud--' + counters[1]);
	var streamNameVar = ('.cottoncandy_middle_stream--' + counters[1]);

	var cottoncandyAni = function() {
		setTimeout(callAllAddPointsFunctions, 4000, currentCottoncandy.value);
		setTimeout(startUpliftAnimation, 4000, cloudNameVar);
		if (currentCottoncandy === items[1][1]) {
			startCottoncandyLeftAnimation(cottoncandyNameVar, streamNameVar);
			callbackCottoncandy1 = setTimeout(cottoncandyAni, 15000);
		}
		else if (currentCottoncandy === items[1][2]) {
			startCottoncandyRightAnimation(cottoncandyNameVar, streamNameVar);
			callbackCottoncandy2 = setTimeout(cottoncandyAni, 15000);
		}
		
	};
	cottoncandyAni();
}

function candycaneMidAnimation() {
	var candycaneMidNameVar = ('.candycane_middle--' + counters[2]);
	var currentCandycane = items[2][counters[2]];
	var cloudNameVar1 = ('.candycane_middle_cloud--' + 1);
	var cloudNameVar2 = ('.candycane_middle_cloud--' + 2);
	var cloudNameVar3 = ('.candycane_middle_cloud--' + 3);
	var cloudNameVar4 = ('.candycane_middle_cloud--' + 4);
	var cloudNameVar5 = ('.candycane_middle_cloud--' + 5);
	var cloudNameVar6 = ('.candycane_middle_cloud--' + 6);

	var candycaneAni = function() {
		setTimeout(callAllAddPointsFunctions, 3100, currentCandycane.value);
		setTimeout(callAllAddPointsFunctions, 3250, currentCandycane.value);
		setTimeout(callAllAddPointsFunctions, 3400, currentCandycane.value);

		if (currentCandycane === items[2][1]) {
			setTimeout(startUpliftAnimation, 3100, cloudNameVar1);
			setTimeout(startUpliftAnimation, 3250, cloudNameVar2);
			setTimeout(startUpliftAnimation, 3400, cloudNameVar3);

			startCandycaneLeftAnimation(candycaneMidNameVar);
			callbackCandycane1 = setTimeout(candycaneAni, 15000);
		}
		
		else if (currentCandycane === items[2][2]) {
			setTimeout(startUpliftAnimation, 3100, cloudNameVar4);
			setTimeout(startUpliftAnimation, 3250, cloudNameVar5);
			setTimeout(startUpliftAnimation, 3400, cloudNameVar6);

			startCandycaneRightAnimation(candycaneMidNameVar);
			callbackCandycane2 = setTimeout(candycaneAni, 15000);
		}
	};
	candycaneAni();
}

/*
 *	-----------FUNCTIONS THAT DONT INCLUDE OTHER FUNCTIONS--------------
 */

//	functions that consists of conditions and return true or false

function isLevelOfAllItemsMax() {
	return (items[0][4].level === levelMax + 1 && items[1][2].level === levelMax + 1 && items[2][2].level === levelMax + 1)
}

function isClickCounterLowerThanItemPrice(num){
	return clickCounter < items[num][counters[num]].price;
}

function isCurrentItemLevelHigherThanItemLevelMax(num) {
	return items[num][counters[num]].level > levelMax;
}

function isItemCounterHigherThanItemArrayLengthMinusTwo(num) {
	return counters[num] > (items[num].length - 2);
}

function isItemCounterHigherThanItemArrayLengthMinusOne(num) {
	return counters[num] > (items[num].length - 1);
}

function isCurrentItemLevelEqualToZero(num) {
	return (items[num][counters[num]].level === 0);
}

//	do-one-thing functions

function setItemLevelPlusOne (num) {
	items[num][counters[num]].level++;
}

function setItemCounterPlusOne(num) {
	counters[num]++;
}

function setItemCounterToOne(num) {
	counters[num] = 1;
}

function substractItemPriceFromClickCounter(num){
	clickCounter -= items[num][counters[num]].price;
}

function addValueToClickCounter(value) {
	clickCounter = Math.ceil(clickCounter + value);
}

function calculateNewClickValue (num) {
	return (clickValue + items[0][counters[0]].value / 8 );
}

function calculateNewItemValue(num) {
	return (items[num][counters[num]].value + items[num][counters[num]].value * items[num][counters[num]].level);
}

function calculateNewItemPrice(num) {
	return (items[num][counters[num]].price + items[num][counters[num]].price * items[num][counters[num]].level * 1.2);
}

function addOneToCounterOrSetToOneWhenMaxIsReached(counter, countermaximum) {
	if (counter > 0 && counter < countermaximum) {
		counter++;
		return counter;
	}
	else if (counter === countermaximum) {
		counter = 1;
		return counter;
	}
	else if (counter > countermaximum) {
		window.console.log('caution: counter is higher than maximum.');
	}
	else if (counter === 0) {
		window.console.log('caution: counter is 0.');
	}
	else {
		window.console.log('caution: counter is negative.');
	}
}

function clearAllAnimationTimeouts() {
	clearTimeout(callbackUnicorn1);
	clearTimeout(callbackUnicorn2);
	clearTimeout(callbackUnicorn3);
	clearTimeout(callbackUnicorn4);
	clearTimeout(callbackCottoncandy1);
	clearTimeout(callbackCottoncandy2);
	clearTimeout(callbackCandycane1);
	clearTimeout(callbackCandycane2);
}


function pauseTimerAndMakeItVisible() {
	CountActive = false;
	$('#cntdwn').css({
		'visibility': 'visible'
	});
}

/*
 *	-----------INTERFACE FUNCTIONS--------------
 */

//	animation functions

function startIsClickedAnimation(CssNameVar) {
	if (!$(CssNameVar).is(':animated')) {
		$(CssNameVar).animate({
			marginTop: '+=2vmin'
		}, 10);
		$(CssNameVar).animate({
			marginTop: '-=2vmin'
		}, 10);
	}
}

function startClickTextAnimationAndDeleteElementAfterwards(clickPointsTextCssNameVar, clickPointsTextCssClassVar) {
	$(clickPointsTextCssNameVar).animate({
		opacity: '0.9'
	}, 0);
	$(clickPointsTextCssNameVar).animate({
		top: '+=10vmin',
	}, 500, 'linear');
	$(clickPointsTextCssNameVar).animate({
		top: '+=10vmin',
		opacity: 0.3
	}, 500, 'linear');
	$(clickPointsTextCssNameVar).animate({
		top: '-=20vmin',
		opacity: 0
	}, 0, function() {clickPointsTextCssClassVar.remove();
	});
}

function startUpliftAnimation(CssNameVar) {
	$(CssNameVar).animate({
		opacity: '1'
	}, 0);
	$(CssNameVar).animate({
		marginTop: '-=7vmin',
		opacity: '0'
	}, 400);
	$(CssNameVar).animate({
		marginTop: '+=7vmin',
	}, 0);
}

function startUnicornRightAnimation (unicornCssNameVar) {
	$(unicornCssNameVar).animate({
		opacity: '1'
	}, 2000);
	$(unicornCssNameVar).animate({
		marginLeft: '-=5vmin'
	}, 800, 'linear');
	$(unicornCssNameVar).animate({
		marginLeft: '+=5vmin'
	}, 500, 'linear');
}

function startUnicornLeftAnimation (unicornCssNameVar) {
	$(unicornCssNameVar).animate({
		opacity: '1'
	}, 2000);
	$(unicornCssNameVar).animate({
		marginLeft: '+=5vmin'
	}, 800, 'linear');
	$(unicornCssNameVar).animate({
		marginLeft: '-=5vmin'
	}, 500, 'linear');
}

function startCottoncandyLeftAnimation(cottoncandyCssNameVar, cottoncandyStreamCssNameVar) {
	$(cottoncandyCssNameVar).animate({
		'opacity': '1'
	}, 2000);
	$(cottoncandyStreamCssNameVar).animate({
		'opacity': '1'
	}, 3000);
	$(cottoncandyStreamCssNameVar).animate({
		'margin-top': '-=17vmin',
		'margin-left': '-=5vmin'
	}, 1000, 'linear');
	$(cottoncandyStreamCssNameVar).animate({
		'opacity': '0'
	}, 0);
	$(cottoncandyStreamCssNameVar).animate({
		'margin-top': '+=17vmin',
		'margin-left': '+=5vmin'
	}, 1000, 'linear');
}

function startCottoncandyRightAnimation(cottoncandyCssNameVar, cottoncandyStreamCssNameVar) {
	$(cottoncandyCssNameVar).animate({
		'opacity': '1'
	}, 2000);
	$(cottoncandyStreamCssNameVar).animate({
		'opacity': '1'
	}, 3000);
	$(cottoncandyStreamCssNameVar).animate({
		'margin-top': '-=17vmin',
		'margin-left': '+=5vmin'
	}, 1000, 'linear');
	$(cottoncandyStreamCssNameVar).animate({
		'opacity': '0'
	}, 0);
	$(cottoncandyStreamCssNameVar).animate({
		'margin-top': '+=17vmin',
		'margin-left': '-=5vmin'
	}, 1000, 'linear');
}

function startCandycaneLeftAnimation(candycaneCssNameVar) {
	$(candycaneCssNameVar).animate({
		'opacity': '1'
	}, 2000);
	$(candycaneCssNameVar).animate({
		'margin-top': '-=15vmin',
		'margin-left': '+=20vmin'
	}, 1000, 'linear');

	$(candycaneCssNameVar).animate({
		'margin-top': '+=2vmin'
	}, 100, 'linear');
	$(candycaneCssNameVar).animate({
		'margin-top': '-=2vmin'
	}, 50, 'linear');
	$(candycaneCssNameVar).animate({
		'margin-top': '+=2vmin'
	}, 100, 'linear');
	$(candycaneCssNameVar).animate({
		'margin-top': '-=2vmin'
	}, 50, 'linear');
	$(candycaneCssNameVar).animate({
		'margin-top': '+=2vmin'
	}, 100, 'linear');
	$(candycaneCssNameVar).animate({
		'margin-top': '-=2vmin'
	}, 50, 'linear');

	$(candycaneCssNameVar).animate({
		'margin-top': '+=15vmin',
		'margin-left': '-=20vmin'
	}, 1000, 'linear');
}

function startCandycaneRightAnimation(candycaneCssNameVar) {
	$(candycaneCssNameVar).animate({
		'opacity': '1'
	}, 2000);
	$(candycaneCssNameVar).animate({
		'margin-top': '-=15vmin',
		'margin-left': '-=20vmin'
	}, 1000, 'linear');

	$(candycaneCssNameVar).animate({
		'margin-top': '+=2vmin'
	}, 100, 'linear');
	$(candycaneCssNameVar).animate({
		'margin-top': '-=2vmin'
	}, 50, 'linear');
	$(candycaneCssNameVar).animate({
		'margin-top': '+=2vmin'
	}, 100, 'linear');
	$(candycaneCssNameVar).animate({
		'margin-top': '-=2vmin'
	}, 50, 'linear');
	$(candycaneCssNameVar).animate({
		'margin-top': '+=2vmin'
	}, 100, 'linear');
	$(candycaneCssNameVar).animate({
		'margin-top': '-=2vmin'
	}, 50, 'linear');
	
	$(candycaneCssNameVar).animate({
		'margin-top': '+=15vmin',
		'margin-left': '+=20vmin'
	}, 1000, 'linear');
}

function setItemCssClassToAvailable(num) {
	$(items[num][0].selector).toggleClass('item-available', true);
}

function setItemCssClassToUnavailable(num) {
	$(items[num][0].selector).toggleClass('item-available', false);
}

//	other interface functions

function displayCurrentClickCounterValueOnScreen() {
	$('.scorebox-clickpoints').text(clickCounter);
}

function insertValueInClickTextParagraph(value) {
	$('.click_points_text' + clickTextCounter).text("+" + value);
}

function setBuyTextToMax(num){
	$(items[num][0].buyTextSelector).text("max");
}

function setItemBuyTextAccordingToCurrentItemPrice(num) {
	$(items[num][0].buyTextSelector).text(items[num][counters[num]].price);
}

function setItemBackgroundImageAccordingToLevel(num){
	switch (num) {
		case 0:
			if (counters[0] <= 2) {
				$('.unicorn_middle--' + counters[0]).toggleClass('unicorn_middle_right_level' + items[0][counters[0]].level, true);
				$('.unicorn_middle--' + counters[0]).toggleClass('unicorn_middle_right_level' + (items[0][counters[0]].level - 1), false);
			}
			else if (counters[0] > 2) {
				$('.unicorn_middle--' + counters[0]).toggleClass('unicorn_middle_left_level' + items[0][counters[0]].level, true);
				$('.unicorn_middle--' + counters[0]).toggleClass('unicorn_middle_left_level' + (items[0][counters[0]].level - 1), false);
			}
			break;
		case 1:
			$('.cottoncandy_middle--' + counters[1]).toggleClass('cottoncandy_middle_level' + items[1][counters[1]].level, true);
			$('.cottoncandy_middle--' + counters[1]).toggleClass('cottoncandy_middle_level' + (items[1][counters[1]].level - 1), false);
			break;
		case 2:
			$('.candycane_middle--' + counters[2]).toggleClass('candycane_middle_level' + items[2][counters[2]].level, true);
			$('.candycane_middle--' + counters[2]).toggleClass('candycane_middle_level' + (items[2][counters[2]].level - 1), false);
			break;
	}
}