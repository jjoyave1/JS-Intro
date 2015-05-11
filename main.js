var givenName;
// Q: What does `givenName` equal right now?
// A: Undefined

givenName = "Tim";
// Q: What is `givenName` set to right now?
console.log('givenName =', givenName)
// A: Tim

givenName = "JD";
// Q: What is `givenName` set to right now?
console.log('givenName =', givenName)
// A: JD


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
console.log('The greeting is:', greeting)
// A: the greeting is, 'Hello, how are you?'


var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
console.log('math is set to:', math)
// A: math is set to 40


math = high - "5";
// Q: What is `math` set to?
console.log('math is set to:', math)
// A: math is set to 45


// Create a variable to calculate Tim's age
// The answer should read "Tim is 31 years old"
var born = 1983;
var today = 2015;
var timsAge = today - born - "1";
console.log('Tim is', timsAge, 'years old')
// To get 31, you need to subtract another year


// Store some information following in variables.
var yourName;
var instructorName;

yourName = 'Joe';
instructorName = 'JD';

var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
console.log(statement)
//console logs were done just so I could see my answers spit out
