var apple = "green";
typeof apple;
console.log('Переменная apple: ' + apple);
console.log('Тип переменной apple: ' + typeof apple);


var a = 5;
var b = 7;
console.log('а = b ?: ' + (a == b));

var c = 5;
console.log('a = c ?: ' + (a == c));

console.log('b >  a ? : ' + (b > a));

var b_1 = "7";

// проверка без учета типа
console.log('Проверка без типа: ' + (b == b_1));

// проверка с учетом типа
console.log('Проверка с типом:' + (b === b_1));

var i = 5;
if (i > 5){
  console.log('Переменная ' + i + ' больше 5');
  i++;
}




