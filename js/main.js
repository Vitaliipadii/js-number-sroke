

// home work
1
// const name1 = prompt('Введите свое имя', 'Вася');
// console.log('Привет,' + name1);
2
// const years = +prompt('Ваш год рождения', 1990);
// const yearsNow = (2019);
// console.log(yearsNow - years);
3
// const height = +prompt('Введите длину стороны квадрата', 10);
// console.log('Периметр квадрата =' + ' ' + height * 4);
4
// const R = +prompt('Введите радиус окружности', 10);
// const Pr = (3.14);
// console.log((R * R) * Pr);
5
// const distance = +prompt('Введите расстояние в км между двумя городами', 100);
// const hours = +prompt('За сколько часов вы хотите добраться?', 10);
// console.log('скорость, с которой необходимо двигаться, чтобы успеть вовремя' + (distance / hours) + 'km/h');
6
// const dollars = +prompt('Введите сумму в долларах', 100);
// const euro = 0.91;
// console.log((dollars * euro) + ' ' + 'будет в Евро');
7
// const flash = +prompt('Введите объем флешки в Гб', 8);
// const gB = (flash * 1000);
// const program = 820;
// console.log(Math.trunc(gB / program));
8
const money = +prompt('Вводите сумму денег в кошельке', 120);
const chokolate = +prompt('Вводите цену одной шоколадки', 20);
const chokolateLeft = Math.trunc(money / chokolate);
const moneyLeft = (money / chokolate) - (Math.trunc(money / chokolate));
console.log(chokolateLeft + ' ' + 'Шоколадок можно купить');
console.log(moneyLeft + ' сдачи останеться');
9
// let number = +prompt('Введите трехзначное число', 123);
// let digit1 = Math.trunc(number / 100);
// let digit2 = Math.trunc(number / 10) % 10;
// let digit3 = number % 10;
// let resultat = digit3 + '' + digit2 + '' + digit1;
// console.log(resultat);
10
// const string = +prompt('Вводит сумму вклада в банк на 2 месяца', 300);
// const month = 5 / 12;
// const monthTwo = Math.trunc(string * (month * 2)) / 100;
// console.log(monthTwo + ' ' + 'сумму начисленных процентов за 2 месяца');

