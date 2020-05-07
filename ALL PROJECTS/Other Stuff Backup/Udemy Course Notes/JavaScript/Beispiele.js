/* Search For Characters In A String */

var text = "Hello my name is Olaf Egbers and I'm 27 years old. My \
            Hobbies are skateboarding and chilling and doing stuff \
            with my girlfriend and Olaf so on yeah I am a cool person as \
            you can see.";
var myName = "Olaf";
var hits = [];
for ( i = 0; i < text.length; i++ ) {
    if ( text[i] === myName[0] ) {
        for ( j = i, k = 0; k < myName.length; j++, k++ ) {
            if ( text[j] === myName[k] ) {
                hits.push( text[j] + " was found in charakter number " + j );
            };
        };
    };
}
if ( hits.length === 0 ) {
    console.log( "Your name wasn't found." );   
}
else {
console.log(hits);
}




/* Function in function */

var makeCounter = function () {
    var f, k;
    k = 0;
    f = function (x) {
        k = k + x;
        return k;
    };
    return f;
};
var counter = makeCounter();
console.log(counter(4));






/* ELEMENT VERSCHIEBEN AUF MOUSEOVER */
var cookieBanner = document.getElementById("eu-cookie-bar-notification");

cookieBanner.addEventListener("mousemove", function () {
	var marginTop = Math.floor((Math.random() * 45) + 1);
	cookieBanner.style.cssText = 'bottom: auto !important; top: 0 !important; margin-top: ' + marginTop + '%;';
});






/* CSS PER SCROLL VERÄNDERN */
/* 2 WEGE FÜR SCROLL, 2 WEGE FÜR CSS ÄNDERN */
window.onscroll = function () {
	if (window.scrollY > 700) {
	  document.getElementById("myElement").setAttribute('style', 'top: auto !important');
	  document.getElementById("myElement").setAttribute('style', 'bottom: 0 !important');
	}
};

window.addEventListener('scroll', function () {
	if (window.scrollY > 700) {
	  document.getElementById("myElement").style.cssText = 'bottom: auto !important; top: 0 !important;';
	}
});









/* NULL COALESCING OPERATOR */
var str1 = null;
var str2 = null;
var str3 = null;
var str4 = "str4";
var final = "";
final = str1 ?? str2 ?? str3 ?? str4;
Console.Writeline(final); 										// str4



/* SHORT-CIRCUIT EVALUATION */
var hans = 5 || "Giraffe" || null;								// 5
var horst = null && "Giraffe" || 5								// null
var günther = null || false || "Nick Fury" || "not reached";	// Nick Fury



/* GIF ABSPIELEN / CSS ATTRIBUTE SETZEN */
var logos= document.getElementsByClassName('logo');
var logo = logos[0].firstChild.firstChild;
logo.id = 'lmis-logo';
var lmisLogo = document.getElementById('lmis-logo');
 
lmisLogo.addEventListener('mouseover', function() {
  lmisLogo.setAttribute("src", "https://www.lmis.de/medien/img/lmis-" + 
  "ag-softwareentwicklung-it-unternehmen-osnabrueck-logo-lets-" + 
  "make-it-smarter.gif");
});


/* CSS KLASSE ERSTELLEN HELPER */
/* https://stackoverflow.com/questions/1720320/how-to-dynamically-create-css-class-in-javascript-and-apply/22566039#answer-22697964 */
const createClass = (name,rules) => {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule) 
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
}
createClass('.removed',"display: none;");


/* ANIMATION JS VANILLA */
// https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
// https://www.bunkerbox-os.de/home.html
const logo = document.getElementsByClassName("ce_image block")[0].firstElementChild.firstElementChild;
const keyframes = [{transform: "rotateZ(150deg)"}, {transform: "rotateZ(300deg)"}, {transform: "rotateZ(450deg)"}, {transform: "rotateZ(600deg)"}];
const options = { duration: 2000, iterations: Infinity };
logo.animate(keyframes, options);



/* ISEEPASS */
(function(){var c,b,a;c=document.getElementsByTagName("input");for(b=0;b<c.length;b+=1)a=c[b],a.getAttribute("data-iseepass")?(a.setAttribute("type","password"),a.removeAttribute("data-iseepass")):"password"===a.getAttribute("type")&&(a.setAttribute("type","text"),a.setAttribute("autocomplete","off"),a.setAttribute("data-iseepass","true"))})();


/* FOREACH ES5 und ES6 */
const array = [1,2,3,4,5,6,7,8,9,10];
// ES5
array.forEach(function(i) {
    console.log(i);
});
// ES6
array.forEach((i) => console.log(i));
// noch geiler
array.forEach((i, j) => console.log(`Element: ${i} und Index: ${j}`));


/* LINK AUS CODE KLICKEN */
document.GetElementById("link").InvokeMember("click");
// oder
document.GetElementById("element").click();




/* COMPOSING - COMPOSE & PIPE */
// Die Ausgabe der ersten Funktion wir als Parameter fü die nächste Funktion verwendet. 
// Oder leichter gesagt: es ist wie string.trim().toUpper().split(","), wo einfach eine Funktion nach der Anderen aufgerufen wird,
// allerdings ja immer auf das Ergebnis der vorherigen und nicht auf den Ursprungsstring.