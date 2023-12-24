// Video URL = https://youtu.be/PkZNo7MFNFg?si=282TMW3L5mRw4ogg

var number = 5; // in-line comment

/* this is a 
sweet
multi-line comment */

number = 9;

/* Data types and variables
undefined -hasn't been defined
null - means nothing
booean - true or false
"string" - any text
symbol - unique value
number - a number
object - key>value pairs
*/

/* 
var - used thorughout whole program
let - only within scope of where it's declared
const - should never change
*/

var myName = "Jordan"

let ourName = "freeCodeCamp"

const pi = 3.14

// Storing values with assignment operator

// declare
var a;
// order matters
console.log(a)
// declare and assigne
var b = 2;
//assign (don't need to declare since it already was)
a = 7;

console.log(a);

// Initializing Variables w/ Assignment Operator (aka, "=")
var a = 9;

// Uninitialized Variables
var a;
var b;
var c;
// Now initliazed
var a = 5;
var b = 6;
var c = "I am a string"

// Case sensitivity in variables
var studyCapVar is not the same thing are studyCAPVAR
// camelCase is commonPractice


// Adding/Subtracting/Multiplying/Dividing numbers
// Adding
var sum1 = 10 + 5;
console.log(sum1) // prints 15

// Subtracting
var sum2 = 10 - 5;
console.log(sum2) // prints 5

// Multiplying
var sum3 = 10 * 5;
console.log(sum3) // prints 50

// Dividing
var sum4 = 10 / 5;
console.log(sum5) // prints 2


// Incrementing/Decrementing numbers
// Incrementing
var num = 10; 
num = num +1; // prints 11
// OR
num++; // prints 11

// Decrementing
var num1 = 10;
num = num - 1; // prints 9
// OR
num--; // prints 9


// Decimal numbers
var decimal = 5.7
var newDecimal = 0.999

//Remainder (or Modulus)
var remainder;
remainder = 11 % 3; // prints 2 (3,6,9, not 12)
// this is often used to determine is a number is even or odd


// Compound Assignment with Augmented Addition, Subtraction, Multiplication, Division
var a = 1;
var b = 2;
var c = 3;
var d = 4;

// Addition
a = a + 2; // prints 3
// OR
a += 2; // prints 3

//Subtraction
b -= 2; // prints 0

//Multiplication
c *= 3; // prints 9

// Division
d /= 2; // prints 2

= // Equals
!= // does not equal


// Declare String Variables ("" called string literals)
var firstName = "Jordan";
var lastName = "Marcellino";


// Escaping Literal Quotes in Strings (use of \")
var myStr = "I am a "double quoted" string inside "double quotes""
// Do this instead
var myStr = "I am a \"double quoted\" string inside \"double quotes\""


//Quoting Strings with Single Quotes ('')
var myStr = 'I am a single-quoted "string" with "double quotes"'
// Can also you use back-ticks (``)


/* Escape Sequences in Strings
CODE    OUTPUT
\'      single quote
\"      double quote
\\      backslash
\n      newline
\r      carriage return
\t      tab
\b      backspace
\f      form feed
*/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"


// Concatenating Strings with Plus Operator (+)
var myStr "I come first. " + "I come second.";

// Concatenating Strings with Plus Equals Operator (+=)
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log (ourStr); // prints "I come first. I come second."


// Constructing Strings with Variables
var myName = "Jordan";
var myStr = "Hello, my name is " + myName + ", how are you?"; 
console.log(myStr); // prints "Hello my name is Jordan, how are you?"


// Appending Variables to Strings
var anAdjective = "awesome!"
var myStr = "freedCodeCamp is ";
myStr += anAdjective; 
console.log(myStr); // prints "freeCodeCamp is awesome!"


// Length of a String
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength) // prints 3


// Bracket Notation to Find First Character in String
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

console.log(firstLetterOfFirstName) // prints "A"


// Understand String Immutability (cannot be altered)
var myStr = "Jello World";
myStr[0] = "H"; 
console.log(myStr) // prints error

myStr = "Hello World"
console.log(myStr) // prints "Hello World"


// Find the Nth Character in String with Bracket Notation
var firstName = "Jordan"
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName) // prints "o"

// Find the Last Character in String with Bracket Notation
var firstName = "Jordan"
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName) // prints "n"

// Find the Nth-to-Last Character in String with Bracket Notation
var firstName = "Jordan"
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
console.log(thirdToLastLetterOfFirstName) // prints "d"


// Word Blanks
function wordBlanks(myNoun, myAdj, myVerb, myAdv) {
    var result = "";
    result += "The " + myAdj + " " + myNoun + " " + myVerb + " on the windowsill " + myAdv "."
    return result
}
console.log(wordBlanks("dog", "big", "ran", "quickly")); // prints "The big dog ran to the store quickly."
console.log(wordBlanks("cat", "tiny", "slept", "quietly")); // prints "The tiny cat slept on the windowsill quietly."


// Arrays (Storing Multiple Values)
var myArray = ["Jordan", 33, "Male"];
console.log() // prints


// Nested Arrays
var myStr = [["the universe", 42], ["everything", 101010]];
console.log() // prints


// Access Array Data with Indexes
var myArray = [50, 60, 70];
var myData = myArray[0]
console.log(myData) // prints 50


// Modify Array Data with Indexes
var myArray [18, 84, 99];
myArray[1] = 45;
console.log(myArray); // prints [18, 45, 99]


// Access Multi-Dimensional Arrays with Indexes
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
vat myData = myArray[1][2];
var yourData2 = myArray[2][1];
console.log(myData); // prints 6
console.log(yourData); // prints 8


// Manipulating Arrays
// push() Adding items
var myArray = ["Juke", "Box", "cat"];
myArray.push(["stars", "eyes"]) // myArray now equals [["Juke", "Box", "cat"], ["stars", "eyes"]]; note it now has multi-dim
console.log(myArray) // prints [["Juke", "Box", "cat"], ["stars", "eyes"]]

// pop() Removes the last element
var myArray = [1, 2, 3];
var removedFromMyArry = myArray.pop(); // myArray now equals [1, 2]

// shift() Removes the first element
var myArray = ["Juke", "Box", ["cat"]];
var shiftFromMyArray = myArray.shift() // myArray now equals ["Box", ["cat"]

// unshift() Adds element to the beginning of array
var myArray = ["Juke", "Box", ["cat"]];
myArray.shift() // myArray now equals ["Box", ["cat"]]
myArray.unshift("Happy"); // myArray now equals ["Happy", "Box", ["cat"]]

// Shopping List (nested arrays)
var myList = [["cereal", 3], ["milk", 2], ["bananas", 6], ["juice, 2"], ["eggs", 12]];


// Write Reusable with Functions
function reusableFunction() {
    console.log("Heya, World!")
}

reusableFunction(); // prints "Heya, World!"

// Arguments, Passing Values (parameters) to Functions
function functionWithArgs(a, b) {
    console.log(a - b);
}

functionWithArgs(10, 5); // outputs 5

// Global Scope and Functions
// Scope refers to the visibility of variables
var myGlobal = 10; // this variable can be seen anywhere else in the code

function fun1() {
    oopsGlobal = 5; // because there isn't a var declared, oopsGlobal becomes global
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if  (typeof oopsGlobal != "undefined") {
        output = += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1() // prints nothing?
fun2() // prints my myGlobal: 10
       //        oopsGlobal: 5

// Local Scope and functions
function localScope() {
    var myVar = 5; // this variable is only visible within this fucnction
    console.log(myVar)
}
localScope(); // prints 5

console.log(myVar) // prints ReferenceError: myVar is not defined


// Global vs Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit() [
    return outerWear; // draws on global variable
]
console.log(myOutfit()) // prints "T-Shirt"

function yourOutfit() [
    var outerWear = "Sweater" // the local variable will take precedent
    return outerWear;
]
console.log(yourOutfit()) // prints "Sweater"
console.log(outerWear); // prints "T-Shirt"


// Return a Value from a Function
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10)) // prints 3


// Undefined Value returned from a function
var sum = 0;
function addThree() {
    sum = sum + 3;
}
console.log() // prints undefined
var changed = 0;

function change(num) {
    return 
}

// Assignment with a Returned Value
var changed = 0 ;

function change(num) {
    return (num + 5) / 3; // now changed = 5 ((10 + 5) / 3)
}

changed = change(10);


// Stand in Line (queue, an abstract data structure where items are kept in order)
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
// JSON.stringify() is a way to change an array to string that can be easily printed out to the screen
console.log("Before: " + JSON.stringify(testArr)); // prints Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // prints 1
console.log("After: " + JSON.stringify); // prints After: [2,3,4,5,6]


// Boolean Values (true or false)
function welcomeToBooleans() {
    return false;
}
welcomeToBooleans() // prints false


// If Statements Conditionals
function trueOrFalse(isItTrue) {
    if (isItTrue) { // always parentheses after "if"
        return "Yes, it's true";
    }
    return "No, it's false"
}
console.log(trueOrFalse(true)) // prints true
console.log(trueOrFalse(false)) // prints false


// Equality Operators (==) Comparisons; single equal (=) is an assignment operator
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10)); // prints "Not Equal"

// Strict Equality (===) Operators; == coverts strings into numbers
3 === 3 // evaluates to true
3 === "3" // false

3 == 3 // true
3 == "3" // true

function testEqual(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual("7")); // prints "Not Equal"

// Inequality Operator (!=), does type conversion
function testEqual(val) {
    if (val != 99) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10)); // prints "Not Equal"
console.log(testEqual("99")); // prints "Equal"

// Strict Inequality Operator (!==), does not do type conversion
function testEqual(val) {
    if (val !== 17) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual("17")); // prints "Not Equal"
console.log(testEqual(17)); // prints "Equal"

// Greater Than / Less Than Operator (>, >=, <, <=)
function testGreaterOrLessThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val >= 75) {
        return "75 or Over";
    }
    if (val <= 50) {
        return "50 or Under";
    }
}

console.log(testGreaterOrLessThan(102)) // prints "Over 100"
console.log(testGreaterOrLessThan(75)) // prints "75 or Over"
console.log(testGreaterOrLessThan(49)) // prints "50 or Under"

// And (&&) / Or (||) Operators
function testLogicalAnd(val) {
    if (val <= 50) {
        if (val >= 25) { // this is a nested if statement; the and statement is below
            return "Yes";
        }
    }
    return "No";
}
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes"
    }
    return "No";
}
console.log(testLogicalOr(27)) // prints "Yes"

function testLogicalAnd(val) {
    if (val < 10 || > 20) {
        return "Outside"
    }
    return "Inside"
}
console.log(testLogicalOr(56)) // prints "Outside"
console.log(testLogicalOr(18)) // prints "Outside"


// Else Statements
function testElse(val) {
    var result = "";

    if (val > 5) {
        result "Bigger than 5";
    } else {
        result = "5 or smaller"
    }
    return result;
}
console.log(testElse(5)) // prints "5 or smaller"

// Else If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7)) // prints "Between 5 and 10"

// Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    } else if (val < 5) {
        return "Less than 5"
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(7)) // prints "Less than 10"
console.log(orderMyLogic(3)) // prints "Less than 10" // Not what we want, not specific enough; need to switch the 5 and 10:
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10"
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(7)) // prints "Less than 10"
console.log(orderMyLogic(3)) // prints "Less than 5"

// Chaining If Else Statements
// Example 1:
function testSize(num) {
    if (val < 5) {
        return "Tiny";
    } else if (val < 10) {
        return "Small";
    } else if (val < 15){
        return "Medium";
    } else if (val < 20) {
        return "Large";
    } else {
        return "Huge";
    }
}
console.log(testSize(7)); // prints "Small"
console.log(testSize(20)); // prints "Huge"


// Example 2: Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Triple Bogey"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    } else {
        return "Invalid Score"
    }
}
console.log(golfScore(5,4)); // prints "Birdie"


// Switch Statements
function caseInSwtich(val) {
    var answer = "";
    switch(val) {
        case 1: // if val = 1
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer
}
console.log(caseInSwtich(1)); // prints "alpha"

// Default Option in Switch Statements
function switchOfStuff(val) {
    var answer = "";
    switch(val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff"
            break;
    }
    return answer
}
console.log(switchOfStuff(2)); // prints "stuff" // returns to empty string "" if default isn't set

// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1: 
        case 2:
        case 3: 
            answer = "Low";
            break;
        case 4: 
        case 5:
        case 6: 
            answer = "Mid";
            break;
        case 7: 
        case 8:
        case 9: 
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(1)); // prints "Low"
console.log(sequentialSizes(4)); // prints "Mid"
console.log(sequentialSizes(8)); // prints "High"


// Replacing If Else Chains with Switch
function chainToSwtich(val) {
    var answer = ""
    if (val === "Bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === "Highlander") {
        answer = "There can be only one!";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }
    return answer;
    // Switch Statement Instead: // A lot cleaner and faster to write
    switch(val) {
        case "Bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case "Highlander":
            answer = "There can be only one!";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
        }
        return answer;
}


// Returning Boolean Values from Functions
function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false;
    }
    // use this instead:
    return a < b; // this will return true or false
}
console.log(isLess(10, 15)) // prints true
console.log(isLess(20, 15)) // prints false


// Return Early Pattern for Functions
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2)) // prints 8
console.log(abTest(-2,2)) // prints undefined


// Counting Cards
var count = 0;
var holdBet = "Hold";
if (count > 0) {
    holdBet = "Bet"
};
function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        // nothing changes for 7, 8, or 9
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    return count + " " + holdBet;
};
cc(2); cc(3); cc(7); cc("K"); cc("A"); 
console.log(cc(4)) // prints "Bet"
cc(2); cc("K"); cc(10); cc("K"); cc("A"); 
console.log(cc(4)) // prints "Hold"


/// Build Objects
var theDog = {
    // Property: Value,
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

//Accessing Object Properties
// with Dot Notation
var theDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
var nameValue = theDog.name; // equates "Camper"
var tailsValue = theDog.tails; // equates 1

// with Bracket Notation, required for any property that has a space (" ") in it
var testObj = {
    "an entree": "hamburger",
    "my side": "fries",
    "the drink": "water"
};
var entreeValue = testObj["an entree"]; // equates "hamburger"
var drinkValue = testObj['the drink']; // equates "water"
console.log() // prints

// with Variables (with bracket notation)
var testObj = {
    4: "Favre",
    10: "Love",
    12: "Rodgers"
};
var playerNum = 12;
var player = testObj[playerNum]; // equates "Rodgers"

// Updating Object Properties
var theDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
theDog.name = "Happy Camper";
console.log(theDog.name); // prints "Happy Camper"

// Add New Properties to Object
var theDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
theDog.bark = "woof"; // adds "bark" property with assigned "woof" value

// Delete Properties from Object
var theDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
delete theDog.tails; // removes "tail property"

// Using Objects for Lookups
function phoenticLookup(val) {
    var result = "";
    switch(val) { // we can use a switch statement, however an key-value notation is simpler
        case "alpha":
            result = "A-A-Ron"
            break;
        case "bravo":
            result = "Boston"
            break;
        case "charlie":
            result = "Chicago"
            break;
        case "delta":
            result = "Denver"
            break;
        case "echo":
            result = "Eau Claire"
            break;
        case "foxtrot":
            result = "Frank"
            break;
    };
}
//
function phoenticLookup(val) {
    var result = "";
    var lookup = { // these are the key-value pairs
        "alpha": "A-A-Ron",
        "bravo": "Boston",
        "charlie": "Chicago", 
        "delta": "Denver",
        "echo": "Eau Claire",
        "foxtrot": "Frank"
    };
    result lookup[val]
}
console.log(phoenticLookup("charlie")); // prints "Chicago"

// Testing Objects for Properties, Checking if an object has it's own property
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) { // comes back true or false
        return myObj[checkProp];
    } else {
        return "Not found"
    }; 
}
console.log(checkObj("gift")) // prints pony
console.log(checkObj("hello")) // prints "Not FOund"

// Manipulating Complex Objects
var myMusic = [ // array
    { // objects in array
        artist: "Billy Joel", // key in JS doesn't need to be in "", however it does in JSON, so it's good practice to include them(?)
        title: "Piano Man",
        release_year: 1973,
        formats: [
            "CD",
            "8 Track"
            "LP"
        ],
        gold: true
    }, // make sure to include comma to separate multiple arrays
    // add second record
    {
        artist: "Jordan Marcellino",
        title: "Running Dude",
        release_year: 2023,
        formats: [
            "MP3",
            "YouTube"
            "Streaming"
        ],
        gold: false
    }
];

// Nested Objects
var myMusic = [
    {
        "artist":{
            "first": "Jordan Marcellino",
            "featured artist": "Juke Box Hero"
        },
        "title": "Running Dude",
        "release_year": 2023,
        "formats": [
            "MP3",
            "YouTube"
            "Streaming"
        ],
        "gold": false
    }
];
var myMusicContent = myMusic.artist["featured artist"]; // because there is a space in the object, it requires bracket notation
console.log(myMusicContent) // prints "Juke Box Hero"

// Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree); // prints "pine"

/// Iterate with Loop
// While Loops
var myArray = []
var i = 0; // this sets the starting value of i
while(i < 5) { // iterates until i equals less than 5 (e.g. 4)
    myArray.push(i);
    i++;
}
console.log(myArray) // prints [0, 1, 2, 3, 4]


// For Loops // most common loop in JS
var myArray = []
    for (var i = 0; i < 5; i++) { // 3 items: 
                                    // var i = 0    initialization, starting point
                                    // i < 5        condition, how long it will loop
                                    // i++          final expression, what will happen at the end of each iteration 
        myArray.push(i);
    }
console.log(myArray); // prints [0, 1, 2, 3, 4]

// Multiple Numbers With a For Loop
var myArray = [];
for (var i = 0; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray) // prints [0, 2, 4, 6, 8]


// Count Backwards With a For Loop
var myArray = [];
for (var i = 10; i > 0; i -= 2) { // starting at 10, decrease by 2 after each iteration until i > 0
    myArray.push(i);
}
console.log(myArray) // prints [10, 8, 6, 4, 2]

// Iterate Through an Array with a For Loop
var myArray = [9,10,11,12];
var myTotal = 0;
for (var i = 0; i < myArray.length; i++) {
    myTotal += myArray[i]; // add up the total of the array: 9+10=19+11=30+12=42
}
console.log(myTotal); // prints 42

// Nesting For Loops
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) { // arr.length will start at 2 because the first array has a length of 2 
        for (var j = 0; j < arr[i].length; j++) { // arr[i].length allows access to the nested arrays
            product *= arr[i][j]; // [i] represents the outer array; [j] represents the inner array
        }
        return product;
    }  
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product) // prints 5040 (1*2*3*4*5*6*7)

// Do...While Loops; while loops only run if the conditions are met; a do...while loop will run at least once
var myArray = [];
var i = 10;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(i, myArray); // prints (10, [])
do {
    myArray.push(i);
    i++;
} while (i < 5)
console.log(i, myArray); // prints (11, [10]); added one to 10, added it to the array, then cut the loop because it met it's while condition

// For Loop Challenge: Profile Lookup
var contacts = [
    {
        "name": "Jordan",
        "number": 1,
        "favoriteFoods": ["pizza", "pasta", "wings"]
    }
    {
        "name": "Olivia",
        "number": 2,
        "favoriteFoods": ["chocolate", "cheese", "beef burgers"]
    }
    {
        "name": "Leonardo",
        "number": 3,
        "favoriteFoods": ["cheese", "rice", "meat"]
    }
]
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].name === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact"
}
var data = lookUpProfile("Olivia", "favoriteFoods");
console.log(data); // prints ["chocolate", "cheese", "beef burgers"]


// Generate Random Fractions // Math.random()
function randomFraction() {
    return Math.random(); //
}
console.log(randomFraction); // prints any decimal number between 0 and 1

// Generate Whole Numbers // Math.floor()
var randomNumberBetween0And19 = Math.floor(Math.random() * 20); // random decimal * 20, then rounded down to nearest whole number
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum()); // prints number between 0 and 9
// ...Within a Range
function (randomRange(min, max)) {
    return Math.floor(Math.random() * max - min + 1) + min
}
console.log(randomRange(1,9)); // prints random number between 1 and 9


// parseInt Function, takes a string and returns an integer
function convertToInt(str) {
    return parseInt(str)
};
console.log(convertToInt("56")); // prints 56
// use with a Radix, specifies the base of the number in the string
function convertToInt(str) {
    return parseInt(str, 2); // changes from default base 10 to base 2 (e.g. 0's and 1's)
}
console.log(convertToInt("10011")); // prints 2?

/// Use the Conditional
// Ternary Operator
function checkEqual(a,b) {
    if (a === b) {
        return true;
    } else {
        return false
    }
}
// changed to a one line if-else statement
// condition ? statement-if-true : statement-if-false;
function checkEqual(a,b) {
    return a === b ? true : false
    // note this will do the same thing for the above:
    // return a === b;
}
console.log(checkEqual(1,2)) // prints false

// Multiple Ternary Operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(10)) // prints "positive"

/// Keywords: var, let, and const (ES6 introduced let and const)
// var is function-scoped; let is block-scoped
function catTalk() {
    var catName = "Juke" // function-scoped
    {
        let catSound = "meow" // block-scoped
    }
    console.log(catName); // Juke
    console.log(catSound); // ReferenceError: catSound is not defined
}
// var will not create an error for duplicate declarations, let will
var catName = "Quincy"
var catName = "Juke"
console.log(catName) // nothing

let catName = "Quincy"
let catName = "Juke"
console.log(catName) // TypeError: Duplicate declaration "catName"

let catName = "Quincy"
catName = "Juke" // not using "let" will allow change
console.log(catName) // prints "Juke"

function catTalk() {
    "use strict"; // enables strict mode; catches common coding mistakes and unsafe actions (e.g. create a variable but don't declare it with var, let, or const)
    catName = "Juke";
    quote = catName + " says Meow!";
}

// const (a read-only variable, cannot be reassigned)
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str +" is cool!"; // it's common practice to use ALL CAPS for const
    sentence = str + " is amazing!";
    for (let i = 0; i < str.length; i += 2) { // from now on, use let, unless it's needed to use var
        console.log(SENTENCE);
    }
}
console.log(printManyTimes("freeCC")) // prints SyntaxError: "sentence" is read-only

// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    // s = [2, 5, 7]; // this will not work
    s[0] = 2; // assign manually each of the indexes
    s[1] = 5;
    s[2] = 7;
}
console.log(editInPlace()) // prints [2, 5, 7]


// Prevent Object Mutation (object.freeze)
function freeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS) // this will prevent the change

    try { // will talk about later, but for now: it will try the below
        MATH_CONSTANTS.PI = 99; // change from 3.14 to 99
    } catch ( ex ) { /// ... then it will catch it and log it out
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freeObj(); // will create TypError: Cannot assign to read only property "PI"...

/// Creating Anonymous Functions
const magic = function() {
    return new Date();
};
// ... with Arrow Functions; we don't need "function" "{}" or "return"
const magic = () => new Date();

// Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2); //concat will concatenate the two arrays
console.log(myConcat([1, 2], [3, 4, 5])) // prints [1, 2, 3, 4, 5]

// Write Higher Order Arrow Functions
const realNumArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => { // edit this so it filters the array to only give the square of the positive integers
    const squaredIntegers = arr;
    return squaredIntegers;
};
//rewrite using filter and map functions
const squareList = (arr) => { 
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    // .filter() will filter 4, 42, 6
    // .map(x => x) for every element in the array (x) this (=>) is what we are going to do to it (x * x)
    return squaredIntegers; 
};

const squaredIntegers = squareList(realNumArray);
console.log(squaredIntegers) // prints [16, 1764, 36]


// Default Parameters
const increment = (function() {
    return function increment(num, val = 1) { // setting val = 1 sets the default if a val isn't given
        return num + val;
    };
})();
console.log(increment(5, 2)) // prints 7
console.log(increment(5)) // prints 6


// Rest Operator (...)
const sum (function() {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // prints 6
// using the operator:
const sum (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // prints 6
console.log(sum(1, 2, 3, 4)); // prints 10


// Spread Operator (to evaluate arrays in-place)
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"]; // will spread the individual items from the array
let arr2;
(function() {
    arr2 = [...arr1]; // makes arr2 equal all of the contents of arr1, essentially makes a separate copy of arr1
    arr1[0] = "potato" // change only made to arr1
})(;)
console.log(arr2) // prints ["JAN", "FEB", "MAR", "APR", "MAY"];


/// Destructuring Assignment (to assign variables from objects)
// allows to nearly assign values taken from an object to a variable
let voxel = {x: 3.6, 7: 7.4, z: 6.54};
//below is the old way of doing it:
let x = voxel.x; // x = 3.6
let y = voxel.y; // y = 7.4
let x = voxel.z; // z = 6.54

// destructuring syntax
const x{ x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54

//Another Example
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTomorrow(avgTemperatures) {
    "use strict"
    const { tomorrow : tempOfTomorrow } = avgTemperatures;
    return tempOfTomorrow;
}
console.log(getTempOfTomorrow(AVG_TEMPERATURES)); // prints 79

// Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow { min: 73.3, max: 84.6 }
};
function getMaxOfTomorrow(forecast) {
    "use strict";
    const { tomorrow : { max : maxOfTomorrow }} = forecast; // two sets of braces b/c today and tomorrow are nested 
    return maxOfTomorrow;
}
console.log(getMaxOfTomorrow(LOCAL_FORECAST)); // prints 84.6

// Use Destructuring Assignment to Assign Variables from Arrays
const [z, x] = [1, 2, 3, 4, 5, 6]
console.log(z, x); // prints 1,2

const [z, x, , y] = [1, 2, 3, 4, 5, 6]
console.log(z, x, y); // prints 1,2,4

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a] // switches the places of a and b
})();
console.log(a); // prints 6
console.log(b); // prints 8

// Use Destructuring Assignment with the Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10]
function removeFirstTwo(list) {
    const [ , , ...arr] = list; // ... is the rest operator and the 2 commas skips the first two in the array
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // prints [3,4,5,6,7,8,9,10]]
console.log(source); // prints [1,2,3,4,5,6,7,8,9,10]

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
/// commonly used with API recalls
const stats = {
    max: 56.5,
    mid: 34.5,
    min: 0.5
};
const half = (function() {
    return function half({ max, min }) { // instead of using half(stats) this allows you to only call for the items you want
        return (max + min) / 2.0;
    }
})();
console.log(stats); // prints 56
console.log(half(stats)); // prints 

// Template Literals (``, next to 1 key), makes complex strings easier
const person = {
    name: "Jordan the Man",
    age: 490
};
// template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old.`;
console.log(greeting) // prints Hello, my name is Jordan the Man! I am 490 years old.

// Another Example
const result = {
    success: ["yay", "nice", "cool, bro"],
    failure: ["dang", "ugh", "nope"],
    skipped: ["see ya!", "nah"]
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure)
console.log((resultDisplayArray) // prints ["<li class="text-warning">dang</li>", ...]

// Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Jordan", 490, "male")); // prints {name: "Jordan", age; 490, gender: "male"}
// written concisely:
const createPerson = (name, age, gender) => ( { name, age, gender });
console.log(createPerson("Jordan", 490, "male")); // prints{name: "Jordan", age; 490, gender: "male"}

// Write Concise Declarative Functions
const bicycle = { // this is the long way
    gear: 2,
    setGear: function(newGear) { // delete function to be concise
        "use strict";
        this.gear = newGear;
    }
};
// concise:
const bicycle = { // this is the long way
    gear: 2,
    setGear(newGear) { // delete function to be concise
        "use strict";
        this.gear = newGear;
    }
};
// concise
bicycle.setGear(3);
console.log(bicycle.gear) // prints 3


// class Syntax (to define a constructor function)
let SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
//using class syntax:
class SpaceShuttle {
    constructor (targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
let zeus = new SpaceShuttle("Jupiter"); // this is the "old" way
console.log(zeus.targetPlanet) // prints Jupiter


// getters and setters (to control access to an object)
/// obtain values from an object; set a value of a property within an object
class Book {
    constructor(author) {
        this._author = author;
    }
    // getter; return or "get" the value of object's private variable w/o accessing the private variable
    get writer() {
        return this._author; // using "this." ensures that the following varible is only accessible within that class
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor // using underscore (_) signifies the use of a private variable w/in a class
    }
}
// Another Example: // enter Fahrenheit, but use getter and setter to return Celsius
function makeClass() {
    class Thermostat {
        constructor(tempF) {
            this._tempF = 5/9 * (tempF - 32) // formula for F to C
        }
        get temperature() {
            return this._tempF;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass(); // returns the entire makeClass object
const thermos = new Thermostat(76); // what's the "new"?
let temp = thermos.temperature; // is using the getter
thermos.temperature = 26; // is using the setter
temp = thermos.temperature;
console.log(temp); prints 26


/// import and export, between different files
// import
// file: string_function.js file
export const capitalizeString = str => str.toUpperCase()

// file: index.js
import { capitalizeString } from  "./string_function.js"
const cap = capitalizeString("hello!");

console.log(cap); // prints HELLO!

// export
const capitalizeString = (string) => {
    return string.chatAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString }; // you can export functions...
export const foo = "bar"; // ...and variables
export const bar = "foo";

// Use * to import everything from a file
import * as capitalizeStrings from "./index.js"; // "capitalizedStrings" is a created object that everything exported from the other file is stored within

// Create an export fallback with export default; export default is often used if you only want to export one thing from a file
export default function subtract(x,y) {return x - y;}

// Import a default import
import subtract from "math_functions"; // note you don't use braces like a normal import

subtract(7,4);