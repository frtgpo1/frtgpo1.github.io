// Object Dot Notation :
var phonebookEntry = {};
phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};
phonebookEntry.phone();


// Object Dot Notation
var me = new Object();
me.name = 'Olaf';
me.age = 27;
me['ageTwo'] = 47;

// Object Literal Notation
const myObject = {
    age: 42,
    name: "hans",
    greet: () => {
        console.log($`hello, I am ${name}`);
    }
}


// Setter and Getter and Methods
var myOwnObject = {
    name: 'Sam',
    context: 'huge',
    illnesses: ['this', 'that', 'this, too', 'that again', 'and so on'],
    print: function(context) {
        console.log( this.name + ', ' + context + '.' );
    },
    setContext: function(context) {
        this.context = context;
    },
    getContext: function() {
        return this.context;
    }
    
};

myOwnObject.setContext('hallo');
myOwnObject.print(myOwnObject.getContext());

