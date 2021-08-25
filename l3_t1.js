/*1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/
for (let i = 2;i<=100;i++){
    isPrime = true
    for(let y = 2; y<i; y++){
        if (i%y ===0){
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        console.log(i)
    }
}