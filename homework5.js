/* Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа */
const usersNumber = +prompt("Task1. Enter your number");
console.log("10% of your number is equal: "+ (0.1 * usersNumber));

console.log("----------------")

/* Написать программу, которая получает два числа и выводит наименьшее */
const usersNumber2 = +prompt("Task2. Enter your 1st number");
const usersNumber3 = +prompt("enter your 2nd number");
console.log("minimal is: " + Math.min(usersNumber2,usersNumber3));

console.log("----------------")

/* Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’ */
const usersNumber4 = +prompt("Task3. Enter your number");
if (usersNumber4>100){
    console.log("Number is biger than 100");
} else if (usersNumber4<100){
    console.log("Number is less than 100");
} else {
    console.log("Number is equal 100");
}

console.log("----------------")

/* Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний. */
const usersName = prompt("Task4. Enter your name");
const usersAge = +prompt("Enter your age");
if (usersAge>=18){
    console.log("Hello, "+usersName);
} else {
    console.log("Hi, "+usersName);
}

console.log("----------------")

/* Дополнительные задания
Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
Задача 1
Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof). */
const array = ["BMW", 45000, "white", {engine: 1.8}, NaN, "Audi", 55000, "blue"]
for (let index = 0; index < array.length; index++) {
    if (Number.isNaN(array[index]) === false){
    console.log("The "+index+ " element in array has " + typeof (array[index])+ " type");
}
    else{
        console.log("The "+ index + " element in array is NaN - "+ Number.isNaN(array[index]));
    }
}

console.log("----------------")

/* Просуммируйте все числа в массиве и выведите результат в консоли. Игнорируйте нечисловые элементы. */
let sum = 0;
for (let index = 0; index < array.length; index++) {
    if (Number.isInteger(array[index])){
        sum = sum + array[index];
    }
}
console.log("Sum of Number-type elements is equal " + sum);