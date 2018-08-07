for (i=0; i<3; i++){
  console.log('Новое значение: ');
  console.log(i);
}


var names = ["Маша", "Аня", "Таня"];

console.log('Весь массив: ');
console.log(names);
console.log('----');


console.log('Первый элемент: ');
console.log(names[0]);
console.log('----');


console.log('Второй элемент: ');
console.log(names[1]);
console.log('----');


console.log('Третий элемент: ');
console.log(names[2]);
console.log('----');


// Функция без параметров
function myFunction(){
  // тело функции
  console.log(1);
}


myFunction();


// Функция с параметром
function myFunctionWithParametr(a){
  console.log(a);
}

myFunctionWithParametr(5);
myFunctionWithParametr(7);
myFunctionWithParametr(10);
myFunctionWithParametr("May");



// Функция с несколькими параметрами
function myFunctionWithSeveralParametrs(a, b){
  console.log(a + b);
}

myFunctionWithSeveralParametrs(5, 3);
myFunctionWithSeveralParametrs(1, 4);



// Области видимости переменных


// глобальная переменная = переменная за пределами функции
var city = "Moscow";


function myCity(){
  // локальная переменная = переменная внутри функции
  var city = "Spb";
  console.log(city);
}

myCity();

console.log(city);



// var myObject = {
//   ключ1 : значение1,
//   ключ2 : значение2,
//   ключ3 : значение3,
// }



var student = {
  name: 'Алексей',
  surname: 'Васильев',
  age: 18,
  isGoodStudent: true,
}

console.log('Студент:');
console.log(student);


console.log('Возраст:');
// Обращение к полю age
console.log(student.age);

console.log('Фамилия:');
// Обращение к полю surname
console.log(student.surname);

console.log('Имя:');
// Обращение к полю name
console.log(student.name);

console.log('Качество студента:');
// Обращение к полю name
console.log(student.isGoodStudent);




function checkNameValue(event){
  event.preventDefault(); // чтобы страница не обновлялась при нажатии на кнопку
  var name = document.getElementById("name");
  var nameValue = name.value;

  if (nameValue === ''){
    name.style.border = '1px solid red';
  } else {
    name.style.border = '1px solid black';
  }

}

var button = document.getElementById("send");
button.addEventListener("click", checkNameValue);






