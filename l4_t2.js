/*Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их 
элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.

 Код из предидущего задания*/

class products{
    constructor(name, price, count){
        this.name = name;
        this.price = price;
    }
}

let product1 = new products("Картошка", 50);
let product2 = new products("Огурцы", 20);
let product3 = new products("Помидоры", 10);
let product4 = new products("Кабачки", 43);
let product5 = new products("Баклажаны", 32);
let product6 = new products("Морковка", 60);
let product7 = new products("Свекла", 35);


function countBasketPrice(basket){
    let count = 0;
    for (item in basket){
        count += basket[item].price;
    }
    return count
}

var userBasket = [];

userBasket.push(product1);
userBasket.push(product1);
userBasket.push(product2);
userBasket.push(product3);
userBasket.push(product4);
userBasket.push(product5);
userBasket.push(product6);
userBasket.push(product7);

console.log(countBasketPrice(userBasket))

console.log(userBasket)