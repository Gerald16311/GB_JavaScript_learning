/*1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/
let i = 2;

while (i<101){
    isPrime = true;
    let y = 2
    while(y < i){
        if (i%y ===0){
            isPrime = false;
            break;
        }
        y++
    }
    if (isPrime){
        console.log(i)
    }
    i++
}