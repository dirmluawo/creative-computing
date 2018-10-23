const messageWrapper = document.getElementById('message');

var a = prompt ('Input a number to mutliply');
var b = prompt ('Input another number to mutliply');
var c = prompt ('Input a number to add');
var d = prompt ('Input a number to subtract');

var x = (a * b) + c - d;

let message = x;
    
messageWrapper.innerText = message;