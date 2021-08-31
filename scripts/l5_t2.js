class products {
    constructor(name, price) {
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
let userBasket = [];
/*
function clearBasket() {
    var userBasket = [];
    let userbasketList = document.createElement("selection");
    userbasketList.id = 'list';
    document.getElementById('list').replaceWith(userbasketList)
}*/

// функция добавления предметов в корзину
function addItems() {
    userBasket.push(product1);
    userBasket.push(product1);
    userBasket.push(product2);
    userBasket.push(product3);
    userBasket.push(product4);
    userBasket.push(product5);
    userBasket.push(product6);
    userBasket.push(product7);
    renderBasket();
}

function renderBasket() {
    let userbasketList = document.createElement("selection");
    userbasketList.id = 'list';
    let textItem = document.createElement("div");
    textItem.className = "blockText";
    for (item in userBasket) {
        textItem.innerHTML = userBasket[item]["name"] + "<br>";
        userbasketList.insertAdjacentHTML("beforeend", textItem.outerHTML);
    }
    document.getElementById('list').replaceWith(userbasketList)
}
// функция подсчета стоймости корзины
function countBasketPrice(basket) {
    let userbasketTotal = document.createElement("div");
    userbasketTotal.id = 'result';
    let count = 0;
    for (item in basket) {
        count += basket[item].price;
    }
    let result = "Итого - " + count + " р.";
    userbasketTotal.insertAdjacentHTML('beforeend', result);
    document.getElementById('result').replaceWith(userbasketTotal)
}

addItems();
countBasketPrice(userBasket);