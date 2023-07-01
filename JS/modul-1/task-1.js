//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10

// const minutes = prompt("Введіть число в хвилинах")
// const numberMinuts=Number(minutes)
const time=prompt("Введіть число в хвилинах").trim();

const hours=String(Math.floor(time / 60));
const modifiedHours=hours.padStart(2,"0");

const minutes=String(time % 60);
const modifiedMin=minutes.padStart(2,"0");

const totalTime=`${modifiedHours}:${modifiedMin}`


console.log(totalTime)
