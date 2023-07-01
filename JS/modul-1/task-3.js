//  *? За допомогою циклу for складіть усі парні числа від min до max

const max = 50;
const min = 0;
let title=0; 
for (let i = min; i <= max; i += 1){
    if (i % 2 === 0) {
         title +=i;
       
    }     
}
console.log(title)