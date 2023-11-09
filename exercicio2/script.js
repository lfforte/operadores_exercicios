let num1 = Number(prompt("1-Digite um número qualquer:"));
let num2 = Number(prompt("2-Digite outro número qualquer:"));

let numDiv1 = num1%num2;
let numDiv2 = num2%num1;

console.log("O primeiro numero é maior que o segundo?",(num1>num2));
console.log("O primeiro numero é igual ao segundo?",(num1===num2));
console.log("O primeiro numero é divisível pelo segundo?",(numDiv1===0));
console.log("O segundo numero é divisível pelo primeiro?",(numDiv2===0));