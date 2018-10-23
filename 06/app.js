const messageWrapper = document.getElementById('message');

const a = prompt ('Input a number to mutliply');
const b = prompt ('Input another number to mutliply');
const c = prompt ('Input a number to add');
const d = prompt ('Input a number to subtract');

const x = (a * b) + c - d;

let message = '(' + a + ' * ' + b + ') + ' + c + ' - ' + d + ' = ' + x;
    
messageWrapper.innerText = message;