// 31 JS LESSON ------------------------------------------------

// ----------------CLASSWORK

// let userName = prompt ("What is your name?");
// document.write(`Hello, ${userName}! <br>`);

// let footballTeam = prompt ("What is your favorite football team?");
// document.write(`${footballTeam.toUpperCase()} is champion <br>`);

// let cardNumber = prompt ("Enter your card number");
// let cardNumberTrim = cardNumber.trim();
// document.write(`Last four characters of your card number: ${cardNumberTrim.slice(9, 13)} <br>`);

// ----------------HOMEWORK


// first task -------

// let string = prompt ("Enter your string");
// let firstLetterCapital = string.slice(0, 1).toUpperCase() + string.substring(1).toLowerCase();

// document.write(`Hello, ${firstLetterCapital}!`);
// console.log(`Hello, ${firstLetterCapital}!`);



// second task -------

// let total = "$120";
// document.write(total.slice(1));




// third task --------

// let ask = prompt ("Здравствуй, я компьютер, а тебя как зовут?");
// let ask2 = prompt (`Очень приятно, ${ask}. Сколько тебе лет?`);
// let age = prompt (`Ого! Тебе уже ${ask2}!`);




// fourth task --------

// let card = prompt ("Enter your card number");
// alert(`Номер Вашей кредитной карты: ${card.replace(card.slice(0, -4), "************")}`);
// console.log(`Номер Вашей кредитной карты: ${card.replace(card.slice(0, -4), "************")}`);


// switch (5) {
// 		case 5:
// 			console.log("5");
// 		case 6:
// 			console.log("6");
// 			break;

// 		case 7:
// 			console.log("7");
// 		case 8:
// 			console.log("8");
// }

// const foo = ({ password, ...data }) => data
// const user = {
// 	id: 100,
// 	name: 'Howard Moon',
// 	password: 'Password!',
// }
// console.log(foo(user));
// document.write(foo(user));

// const site = "proghub"
// console.log(site());

// [1, 2 , 3].map(num => {
// 	if(typeof num === "number") return;
// 	return num * 2;
// });

// var point = [1, 3],
// segment = [point, [5, 5]];
// triangle = [...segment, [1, 8]];

// console.log(triangle);

// var a = 3;

// switch (a){
// 	default:
// 		a +=4;
// 	case 1:
// 		a +=2;
// 		break;
// 	case 2:
// 		a +=3;
// 		break;
// }

// console.log(a);

// var a = [];
// console.log((a == a) + '' + (a == !a));

// class Something {}
// console.log(typeof Something);
