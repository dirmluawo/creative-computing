const messageWrapper = document.getElementById('message');

const a = parseInt(prompt ('Input a number to mutliply'));
if (a == null || a == "") {
    a = 0;
const b = parseInt(prompt ('Input another number to mutliply'));
const c = parseInt(prompt ('Input a number to add'));
const d = parseInt(prompt ('Input a number to subtract'));

const x = (a * b) + c - d;

let message = '(' + a + ' * ' + b + ') + ' + c + ' - ' + d + ' = ' + x;


messageWrapper.innerText = message;