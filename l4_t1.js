/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
 мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
 десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, 
    ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение 
    с помощью console.log и вернуть пустой объект. */

class Number{
   constructor(number){
      let number_str = String(number);
         if (number > 999){
            console.log('Введено слишком большое число')
         } else if (0 <= number && number < 10){
            this['единицы'] = parseInt(number_str[0]);
         } else if (10 <= number && number < 100){
            this['единицы'] = parseInt(number_str[1]);
            this['десятки'] = parseInt(number_str[0]);
         } else {
            this['единицы'] = parseInt(number_str[2]);
            this['десятки'] = parseInt(number_str[1]);
            this['сотни'] = parseInt(number_str[0]);
         }
   }
}

const n1 = new Number(1);
const n2 = new Number(22);
const n3 = new Number(333);
const n4 = new Number(4444);

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)


// от себя не много... написал класс который может разложить любое число на состовляющие... вне зависимости от его длины
class Number_2{
   constructor(number){
      let number_str = String(number);
       for(let i = -1; i >= -number_str.length; i--){
           this[10 ** (Math.abs(i)-1)] = parseInt(number_str[number_str.length - Math.abs(i)])
       }
   }
}

const n1_2 = new Number_2(1);
const n2_2 = new Number_2(22);
const n3_2 = new Number_2(333);
const n4_2 = new Number_2(123456789);

console.log(n1_2)
console.log(n2_2)
console.log(n3_2)
console.log(n4_2)