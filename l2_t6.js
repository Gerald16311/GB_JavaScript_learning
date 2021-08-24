/*    ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
    где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости 
    от переданного значения операции выполнить одну из арифметических операций 
    (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/
function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "addition": return arg1 + arg2
        case "subtraction": return arg1 - arg2
        case "multiplication": return arg1 * arg2
        case "division": return arg1 / arg2
        default: return ("введен не верный операнд")
    }
}
let a = 2, b = 2;
console.log (mathOperation(a, b, "addition"));
console.log (mathOperation(a, b, "subtraction"));
console.log (mathOperation(a, b, "multiplication"));
console.log (mathOperation(a, b, "division"));
