ES6 Sachen (von Mosh) :
https://programmingwithmosh.com/javascript/essential-modern-javascript-features/

TEMPLATE LITERALS
var name = "Olaf";
alert("Hello" + "name"); 	// buuuuuh
alert(`Hello ${name}`); 	// yeaaaah

-Multiple Lines
var empfänger = "Jasmin";
var nachricht = `
Moin ${empfänger},

heute bin ich dabei!

Lieben Gruß,
Olaf
`;


VAR
/* Wenn auf Top-Leven-Ebene benutzt, erzeugt es eine Property bei window.<property> */
var x = 1;
console.log(window.x);

LET AND CONST
/* Besserer Scope als var, nicht außerhalb des umgebenden Blocks verfügbar. Scope immer innerhalb {}-Klammern. */
/* Meistens const nutzen, sonst let */
const name = "Olaf Egbers";
let adresse = "Johannistorwall 15, 49074 Osnabrück";



ARROW FUNCTIONS

Alt
const square = function(number) { 
   return number * number; 
}

Neu
const square = (number) => { 
   return number * number; 
} 


Callback-Functions!

Alt
var activeJobs = jobs.filter(function(job) { 
    return job.isActive; 
});

Neu
var activeJobs = jobs.filter(job => job.isActive);


This-Keyword wird von Arrow-Functions nicht überschrieben, wie von normalen Funktionen sonst:

Alt
function onSubmit() { 
    var that = this; 
    orderService.store(order, function(result) { 
       that.result = result; 
    });
} 

Neu
function onSubmit() { 
    orderService.store(order, result => { 
       this.result = result; 
    });
} 




DESTRUCTURING

Objects /* sucht Werte Anhand der Property-Namen */
var obj = {
    name: "Hans",
    address: "Johannistorwall 15, 49074 Osnabrück",
    city: "Osnabrück"
}
const {name} = obj;
let {address, city} = obj;

const person = { 
   name: 'Mosh', 
   address: {
      billing: { 
         street: '123 Flinders st',
         city: 'Melbourne',
         state: 'Victoria'
      }
   }
};
const { street, city, state } = person.address.billing; 

Arrays 	/* sucht Werte anhand der Reihenfolge */
const array = [1,2,3,4,5];
const [dies, das, dieses, jenes] = array;	  /* Reihenfolge */
const [eins, ,drei];	                      /* überspringe einen Wert */
const [eins, ...rest]; 	                    /* rest ist ein Array der Zahlen außer eins */
const [eins, , , , , sechs = 6]             /* Default Wert, falls der Wert nicht existiert .Sonst wäre er undefined. */


Object-Properties
const name = 'john snow';
const obj = {
  [name] = 'hello',
  [3 + 5 + 7] = 'hihi'
}
// obj -> {'john snow': 'hello', 15: 'hihi'}


Funktionen
const greet = (name='', age=30) => {
  return `Hello ${name}, you are now ${age+10}, muahaha`;
}
greet();          // Hello , you are now 40, muahaha
greet('Hans', 55) // Hello Hans, you are now 65, muahaha



Symbole
/* Symbole sind unique, werden meist für Objekt-Properties verwendet, wenn überhaupt */
let sym1 = Symbol('foo');
let sym2 = Symbol('foo');
sym1 === sym2   // false


Funktionsparameter
const person = {  
  name: 'Luke',
  age: '24',
  facts: {
    hobby: 'Photo',
    work: 'Software Developer'
  }
}
const toString = ({name, age}) => {  
  return `${name} is ${age} years old`;
}
toString(person); // Luke is 24 years old  