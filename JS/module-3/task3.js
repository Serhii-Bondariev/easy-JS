/**
 *? Напиши функцію конструктор Storage який створює об'єкти
 *? Для управління складом товарів.
 *? При виклику отримуватиме один агрумент - початковий масив товарів,
 *? і записувати їх у властивість items.
 *? Додай методи класу:
 *? getItems() - повертайте масив товарів
 *? addItems(item) - отримує новий товар та додає його до поточних
 *? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
 */

const Storage = function (products) {
	this.items = products;

	this.getItems = function () {
		return this.items;
	};
	this.addItems = function (item) {
		this.items.push(item);
    };
    this.removeItem = function (item) {
        const idx = this.items.indexOf(item);
        if (idx !== -1) {
            this.items.splice(idx, 1);
        }
        return this.items
    }
};

const storage = new Storage(["apple", "banana", "mango"]);
console.log(storage);
console.log(storage.getItems());
console.log(storage.addItems("tomato"));
console.log(storage.removeItem("apple"));


// function accum(s) {
    
// }
// accum('Swfsw') 
// accum('ers') 
// S-Ww-Fff-Ssss-Wwwww
// E-Rr-Sss