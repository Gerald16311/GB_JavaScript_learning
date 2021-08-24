/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность 
корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

function countBasketPrice(basket){
    let count = 0;
    for (item in basket){
        count += basket[item][1];
    }
    return count
}

var userBasket = [];

userBasket.push(["Картошка", 50]);
userBasket.push(["Огурцы", 20]);
userBasket.push(["Помидоры", 10]);
userBasket.push(["Кабачки", 15]);
userBasket.push(["Баклажаны", 25]);
userBasket.push(["Морковка", 60]);
userBasket.push(["Свекла", 33]);

console.log(countBasketPrice(userBasket))
