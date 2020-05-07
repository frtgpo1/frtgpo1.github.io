// THINGS

    "Olaf".length               //  4
    "Why am I here?".length     //  14

    "bex".toUpperCase() === "BEX"    // true

    console.log(typeof anObj);    // print "object"
    console.log(typeof aNumber);  // print "number"
    console.log(typeof aString);  // print "string"

    //confirm and prompt
        confirm('This is a message. Can click abort or OK.');
        prompt('This is a message, too. Can enter some Text.');

    //  Logical operators
        //  and (&&)
            true && true;    // => true
            true && false;   // => false
            false && true;   // => false
            false && false;  // => false

        //  or || 
            true || true;     // => true
            true || false;    // => true
            false || true;    // => true
            false || false;   // => false

        //  not !
            !true;   // => false
            !false;  // => true

    //  Math
        Math.random();
        Math.floor();
        Math.round();

        Math.random() * 5;              //  0.0000001 - 4.9999999
        Math.floor(Math.random() * 3);  //  0 - 4

    //  isNaN
        isNaN('berry');     // => true
        isNaN(NaN);         // => true
        isNaN(undefined);   // => true
        isNaN(42);          // => false

    //  Booleans
        console.log("Xiao Hui".length < 122);
        console.log("Goody Donaldson".length > 8);
        console.log(8*2 === 16);
        console.log(121 === 11*11);

    //  Modulo
        console.log(14%3)   //  2
        console.log(99%8)   //  3
        console.log(9%3)    //  0

    //  Substring
        "Batman".substring(0, 3);           //  Bat
        "laptop".substring(3, 6);           //  top
        "wonderful day".substring(3, 7);    //  derf

//  If statements
    var x = 5;
    if ( x < 3 ) {
        console.log("The condition is true");
    }
    else {
        console.log("The condition is false");
    }

//  Variables
    var cow, x;

    var myAge = 30;
    console.log(myAge); //  30

//  SWITCH
    switch ((myName.length)) {
        case 4: "Yes";
        break;
        case 3: "No";
        break;
        default: "Maybe";
    }

//  FUNCTIONS
    //  return
        var timesTwo = function(number) {
            return number * 2;
        };
        var newNumber = timesTwo(77);   //  154

    //  private variables
    function Person(first,last,age) {
        this.firstname = first;
        this.lastname = last;
        this.age = age;
        var bankBalance = 7500;
        
        this.askTeller = function(pass) {
            if (pass == 1234) return bankBalance;
            else return "Wrong password.";
        };
    }

//  ARRAYS
    var family = new Array();
    family[0] = 'Hans';

    var family = ['hans', 'Günther', 'Heinz'];

    console.log(mix);
    console.log(mix[1]);
    console.log(mix.length);

    //  heterogeneous arrays
        var myArray = [
            'hellou', 
            47, 
            true, 
            myObject,
            ['Katapult', 'Schleuder', 'Gartenschlauch']
        ];

    //  homogeneous arrays
        var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

    //  arrays of arrays
        var newArray = [
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9]
        ];

    //  jagged arrays
        var jagged = [
            ['Heinz', 'Hitler', 'Gerald', 'Guenther'], 
            ['Erika', 'Barbara', 'Homer']
        ];
        for ( i = 0; i < jagged.length; i++ ) {
            console.log( jagged[i] );
        }


//  FOR LOOP
    for ( i = 0; i < 100; i += 5 ) {
        console.log(i);
    }

    //  for in
        var nyc = {
            fullName: "New York City",
            mayor: "Bill de Blasio",
            population: 8000000,
            boroughs: 5
        };

        for ( var property in nyc ) {
            console.log(nyc[property]); // print New York City, Bill de Blasio, 8000000, 5
        }


//  WHILE
    var number = 0;
    while( number < 3 ){
        console.log( "I'm looping!" );
        number++;
    };

    //  do while
        var x = 20;
        do {
            console.log("hellooo");
            var x = 1;
        } while (x > 10);       //Print once

// WHILE LOOP OR FOR LOOP WITH ARRAY
    var list = ["test", "hallo", "Dies", "Sind", "Ein", "Paar", "Worte"];
    var j = 0;
    while ( list[j] !== "Worte" ) {
        console.log( list[j] );
        j++;
    };
    for ( i = 0; list[i] !== "Worte"; i++ ) {  
        console.log( list[i] );
    };

//  FOR/WHILE SCOPE
    var kaKa = 100;
    for ( kaKa = 100; kaKa > 10; kaKa -= 5 ) {
        console.log( kaKa * 500 );
    }
    console.log( "After the foor loop, your number is " + kaKa + ".");

    while ( kaKa < 50 ) {
        console.log( "Your number is " + kaKa + "." );                                  //  10
        kaKa +=  10;
    }
    console.log( "After the while loop, your number is " + kaKa + "." );                //  50

    do {
        console.log( "While doing the do-while loop, your number is " + kaKa + "." );   //  50
    } while ( kaKa > 50 );

//  OBJECTS
    var object1 = {
        name: 'Hans',
        age: 47,
        print: function() {
            console.log( this.name + ', ' + this.age + '.' );
        }
    };

    var object2 = {};
    object2.name = 'Guenther';
    object2.age = 48;
    object2.print = function() {
        console.log( this.name + ', ' + this.age + '.' );
    };

    var object3 = new Object();
    object3['name'] = 'Hainer Frikande';
    object3['age'] = '53';
    object3['print'] = function() {
        console.log( this.name + ', ' + this.age + '.' );
    };

    var name1 = object1.name;
    var name3 = object3['name'];

    object3.hasOwnProperty('age');      //  true
    object3.hasOwnProperty('nickname'); //  false

        //  methods
        object2.setAge = function (newAge) {
            this.age = newAge;              
        };
        object2.getName = function () {
            return this.name;
        };

        object2.setAge(40);
        object2.setAge(20);
        object2.getAge();

        //  this
        //  'this' refers to whichever OBJECT called that method
        var setAge = function (newAge) {
            this.age = newAge;
        };
        
        object2.setAge = setAge;
        object1.setAge = setAge;

        //  custom constructors
        function Person(name, race, height, weight, length, thisandthat) {
            this.name = name;
            this.race = race;
            this.height = height;
            this.weight = weight;
            this.length1 = length;
            this.thisandthat = thisandthat;
        };
        var hans = new Person('human',1.68, 85, 45, true);

        //  prototypes
        function Animal(name, numLegs) {
            this.name = name;
            this.numLegs = numLegs;
            this.isAlive = true;
        }
        function Penguin(name) {
            this.name = name;
            this.numLegs = 2;
        }
        function Emperor(name) {
            this.name = name;
            this.saying = "Waddle waddle";
        }

        Penguin.prototype = new Animal();
        Emperor.prototype = new Penguin();

        var myEmperor = new Emperor("Jules");

        console.log( myEmperor.saying );    // print "Waddle waddle"
        console.log( myEmperor.numLegs );   // print 2
        console.log( myEmperor.isAlive );   // print true


//  ARRAYS OF OBJECTS
    function Person (name, age) {
        this.name = name;
        this.age = age;
    }
    var family = new Array();
    family[0] = new Person("alice", 40);
    family[1] = new Person("bob", 42);
    family[2] = new Person("michelle", 8);
    family[3] = new Person("timmy", 6);