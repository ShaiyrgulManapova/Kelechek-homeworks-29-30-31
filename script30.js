// 30 Переменные и константы ----------------------------------------

// 1. Создайте переменную num1 со значением 200 и num2 со значением 2021 выведите значения переменных в document

let num1 = 200;
let num2 = 2021;
let result = num1 + num2;
document.write(result + "<br>"); //2221



// 2. От пользователя необходимо получить следующие данные: имя, фамилия, возраст, город. Выведите полученные данные в document в следующем формате (Вместо данных Ивана должно поставляться данные пользователя):
// Твои данные: Иван Иванов
//  Твой возраст: 45
//  Твой город: New-Bishkek

let userName = prompt ("What is your name?");
document.write("<strong>Name: </strong> " + " " + userName + "<br>");

let userEmail = prompt ("What is your email?");
document.write("<strong>Email: </strong>" + " " + userEmail + "<br>");

let userAge = prompt ("What is your age?");
document.write("<strong>Age: </strong>" + " " + userAge + "<br>");

let userCity = prompt ("What is your city?");
document.write("<strong>City: </strong>" + " " + userCity + "<br>");



// Создайте константу pi со значением 3,14, попробуйте переопределить значение на 3,15

const PI = 3.14;
console.log(PI+0.01);


