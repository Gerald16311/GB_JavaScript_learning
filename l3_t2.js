/*2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность 
корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

function countBasketPrice(basket){
    let count = 0;
    for (item in basket){
        count += basket[item].price;
    }
    return count
}

var userBasket = [];

userBasket.push({name: "Картошка", price: 50});
userBasket.push({name: "Огурцы", price: 20});
userBasket.push({name: "Помидоры", price: 10});
userBasket.push({name: "Кабачки", price: 15});
userBasket.push({name: "Баклажаны", price: 25});
userBasket.push({name: "Морковка", price: 60});
userBasket.push({name: "Свекла", price: 33});

console.log(countBasketPrice(userBasket))
