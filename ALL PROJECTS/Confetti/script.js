var exitpop = true;
window.onbeforeunload = function() { 
	if(exitpop) {
		exitpop = false;
		return "Sie haben die milliardste Google Suche getätigt!\n\nMöchten Sie diese Seite wirklich verlassen und auf Ihre Belohnung verzichten?"; 
	}
}

// var title_name = true;
// window.setInterval(function(){
// 	if (title_name){
// 		document.title = "(1) Google";
// 	}else{
// 		document.title = "Google";
// 	}
// 	title_name = !title_name;
// }, 1000);

var current_path = window.location.pathname;
var claimed_prize = false;
$(".prize").click(function(){
	if (claimed_prize) return;
	claimed_prize = true;
	DeactivateConfetti();
	$(".prize_button").css("background-color", "grey");
	$(this).children(".prize_button").css("background-color", "#00c853");
	$(".prize_button.confirm").css("background-color", "#00c853");
	$(".prize_button.submit_certificate").css("background-color", "#00c853");
	$(".prize_button.finish").css("background-color", "#00c853");
	$(this).children(".real_prize").children(".real_prize_image").attr("src", "amazon_card.jpg");
	if ($(this).hasClass("one")){
		$(".prize.two").children(".real_prize").children(".real_prize_image").attr("src", "google_play_card.jpg");
		$(".prize.three").children(".real_prize").children(".real_prize_image").attr("src", "apple_watch.gif");
	}else if ($(this).hasClass("two")){
		$(".prize.one").children(".real_prize").children(".real_prize_image").attr("src", "google_play_card.jpg");
		$(".prize.three").children(".real_prize").children(".real_prize_image").attr("src", "apple_watch.gif");
	}else if ($(this).hasClass("three")){
		$(".prize.two").children(".real_prize").children(".real_prize_image").attr("src", "google_play_card.jpg");
		$(".prize.one").children(".real_prize").children(".real_prize_image").attr("src", "apple_watch.gif");
	}
	$(".prize_image").fadeTo(2000, 0, function(){
		
	});
	$(".real_prize").fadeIn(2000, function(){
		window.setInterval(function(){
			document.body.style.overflow = 'hidden';
			// $("#black_overlay").css({"width": "100%", "height": "100%"});
			$("#black_overlay, #prize_confirmation").show();
		},2000);
	});
});

$(".prize_button.confirm").click(function(){
	$("#prize_confirmation").html('\
		<p>Sie haben die milliardste Google Suche getätigt, dafür möchten wir Ihnen ganz herzlich danken. Ihr 500€ Amazon Gutschein wurde auf unserer Partner-Seite für Sie reserviert.</p>\
		<p>Ein Google Mitarbeiter bereitet gerade Ihre Siegerurkunde vor. Welcher Name soll auf der Urkunde stehen?</p>\
		<div id="certificate_form">\
			<p class="certificate_label">Vorname</p>\
			<input type="text" class="certificate_data"><br>\
			<p class="certificate_label">Nachname</p>\
			<input type="text" class="certificate_data">\
		</div>\
		<div class="prize_button submit_certificate">Weiter</div>\
		');
	$(".prize_button.submit_certificate").click(function(){
		$("#prize_confirmation").html('\
			<p>Unser Preisübergabe-Formular steht für Sie bereit.</p>\
			<p>Wichtig: Da unsere Preise sehr begehrt sind, dürfen wir Ihren Preis für nur maximal 5 Minuten reserviert halten. Sie müssen das Preisübergabe-Formular in dieser Zeit ausfüllen, da Ihr Preis ansonsten verfällt. Dies ist leider per Regulation so festgestellt.</p>\
			<p id="limit_notice">Ihr kostenloser 500€ Amazon Gutschein ist noch für <span id="minutes">5</span>:<span id="seconds">00</span> Minuten für Sie reserviert.</p>\
			<div class="prize_button finish">Zum Preisübergabe-Formular</div>\
			');
		$(".prize_button.finish").click(function(){
			exitpop = false;
			window.location.href = "https://www.zcpqb.com/click.php?lp=1";
		});
		start_minute_timer("minutes", "seconds", 4, 59);
	});
});

$(".prize_button.abort").click(function(){
	window.location.href = "https://www.zcpqb.com/click.php?lp=1";
});



function start_second_timer(){
	var second_timer_seconds = 59;
	var second_timer_micro_seconds = 99;
	var second_timer = setInterval(function(){
		second_timer_micro_seconds -= 1;
		if (second_timer_micro_seconds<=0) {
			if (second_timer_seconds>0) {
				second_timer_micro_seconds = 99;
				second_timer_seconds -= 1;
			}else{
				clearInterval(second_timer);
			};
		};
		if (second_timer_micro_seconds<10) {
			second_timer_micro_seconds = "0"+second_timer_micro_seconds;
		};
		document.getElementById("second_timer_seconds").innerHTML = second_timer_seconds;
		document.getElementById("second_timer_microseconds").innerHTML = second_timer_micro_seconds;
	}, 10)
}

function start_minute_timer(minute_label, seconds_label, m, s){
	var minute_timer = window.setInterval(function(){
		s -= 1;
		if (s<0) {
			if (m>0) {
				s = 59;
				m -= 1;
			}else{
				s = 0;
				window.clearInterval(minute_timer);
			};
		};
		if (s<10) {
			s = "0"+s;
		};
		document.getElementById(minute_label).innerHTML = m;
		document.getElementById(seconds_label).innerHTML = s;
	}, 1000)
}

var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = current_path+'googleg_lodp.ico';
document.getElementsByTagName('head')[0].appendChild(link);
