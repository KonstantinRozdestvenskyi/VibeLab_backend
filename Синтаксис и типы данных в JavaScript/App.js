var age = 20;
console.log("age = " + age);

var pi = 3.14;
console.log('pi = ' + pi);

var is_boy = true;
console.log('I am boy is ' + is_boy);

var name = 'Kostya';
console.log('My name is ' + name);

var car = {color: 'blue', Type: 'car'};
console.log('car = ', car);

var a = 5;
var b = 10;

var c;

c = a + b;
console.log('5 + 10 = ' + c);

c = a - b;
console.log('5 - 10 = ' + c);

c = a * b;
console.log('5 * 10 = ' + c);

c = a / b;
console.log('5/10 = ' + c);

var d  = 3
c = b % d;
console.log('10 % 3 = ' + c);


if (a < b){
    console.log('5 < 10');
}

if (a > d){
    console.log('5 > 3');
}

d = '5';
if (d == a){
    console.log('5 = \'5\'');
}
if (d === a){
    console.log('5 = \'5\'');
}
else{
    console.log('5 != \'5\'')
}