// *? Напиши функцію конструктор User для
// *? створення користувача з такими властивостями:
// *? a. userName - ім'я, рядок
// *? b. age - вік, число
// *? c. numbersOfPost - кількість постів, число
// *? d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

// *? Додай метод getInfo(), який повертає рядок:
// *? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`

function User(userInfo) {
	const { userName, age, numbersOfPost } = userInfo;
	this.userName = userName;
	this.age = age;
	this.numbersOfPost = numbersOfPost;

	this.getInfo = function () {
		const { userName, age, numbersOfPost } = this;
		console.log(
			`Користувачеві ${userName} ${age} років і в нього ${numbersOfPost} публікацій.`
		);
	};
}

const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
console.log(polly);

polly.getInfo();
