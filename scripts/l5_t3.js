class products {
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
}
let catalog = []

function greateItems() {
    let product1 = new products("Картошка", 50, 10);
    let product2 = new products("Огурцы", 20, 100);
    let product3 = new products("Помидоры", 10, 55);
    let product4 = new products("Кабачки", 43, 68);
    let product5 = new products("Баклажаны", 32, 78);
    let product6 = new products("Морковка", 60, 96);
    let product7 = new products("Свекла", 35, 44);
    catalog.push(product1, product2, product3, product4, product5, product6, product7)
    console.log(catalog)
    renderCatalog();
}

function renderCatalog() {
    let catalogList = document.createElement("div");
    catalogList.id = 'catalog';
    let result = '<h1>Каталог</h1><table border="1"><th>Наименование</th><th>Остаток</th><th>Цена</th>'
    for (let i = 0; i < catalog.length; i++) {
        result += '<tr><td>' + catalog[i].name + '</td><td>' + catalog[i].count + '</td><td>' + catalog[i].price + '</td></tr>'
    }
    result += '</table>';
    catalogList.innerHTML = result;
    document.getElementById('catalog').replaceWith(catalogList)
}

greateItems()