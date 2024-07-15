const { validateHeaderName } = require('http');

console.log("Hello, World!");

const prompt = require('prompt-sync')();

var fname = prompt("What is your first name? ");
var lname = prompt("What is your last name? ");

console.log("Hello, " + fname + " " + lname + "!");