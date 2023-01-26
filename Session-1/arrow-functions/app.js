// Regular function
function sayHello () {
    return 'Hello :)';
}

console.log('Regular Function', sayHello());

// Arrow function
const hello = () => 'Hello :)';

console.log('Arrow Function', hello());

//////////////////////////////////////////////////

console.log('this in the Global context', this);

function someRegFn() {
    console.log('this in regular function', this);
}

someRegFn();

const someArrowFn = () => {
    console.log('this in arrow function', this);
}

someArrowFn();

//////////////////////////////////////////////////

const superHero = {
    name: 'Peter Parker',
    aka: 'Spider Man',
    from: 'New York, USA',

    // in regular function this refers to the current object
    someRegFn: function () {
        console.log('this from a regular function inside an object', this);
    },

    // in arrow function this refers to this of the parent, in this case its Window
    someArrowFn: () => {
        console.log('this from an arrow function inside an object', this);
    }
}

superHero.someRegFn();
superHero.someArrowFn();

//////////////////////////////////////////////////

function levelOne() {
    console.log('this inside levelOne function', this);

    function levelTwo() {
        console.log('this inside levelTwo function', this);

        function levelThree() {
            console.log('this inside levelThree function', this);
        }

        levelThree();
    }

    levelTwo();
}

levelOne();

//////////////////////////////////////////////////

const spiderman = {
    name: 'Peter Parker',
    aka: 'Spiderman',
    from: 'New York, USA'
};

const ironman = {
    name: 'Tony Stark',
    aka: 'Ironman',
    from: 'California, USA'
};

function sayHello() {
    return `Hello! This is ${this.name} aka ${this.aka} from ${this.from}`;
}

// How you call the function determines the value of this.

// By default, this is bound to this in the global context - Window object
console.log(sayHello());
// this is bound to this in the global context
console.log(sayHello.call(this));
// this is bound to spiderman object
console.log(sayHello.call(spiderman));
// this is bound to ironman object
console.log(sayHello.call(ironman));

//////////////////////////////////////////////////

const johnWick = {
    name: 'John Wick',

    sayHello: function () {
        console.log(`Hello! I am ${this.name}`);
    }
};

const nobody = {
    name: 'Nobody'
};

johnWick.sayHello();
johnWick.sayHello.call();
johnWick.sayHello.call(nobody);

// Explore more on
// johnWick.sayHello.call
// johnWick.sayHello.apply
// johnWick.sayHello.bind
