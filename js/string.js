const string = +prompt('Введите трехзначное число', 300)
const fistStep = Math.trunc(string / 10)
console.log(fistStep % 10)
