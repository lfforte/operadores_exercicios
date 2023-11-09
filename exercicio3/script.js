//############# Parte 1
op1 = (5>20)&&(5<2);
op2 = (5===5)&&(5==="5");
op3 = !(20>50);
op4 = !((20>50)||(50>60));

console.log(op1);
console.log(op2);
console.log(op3);
console.log(op4);

//############ Parte 2
let vendasJan = 5784.50;
let vendasFev = 3418.41;
let vendasMar = 4124.10;
let vendasAbr = 1874;
let vendasMai = 7000;
let vendasJun = 9450;

const inss = 0.05;
const salario = 2000;

let salarioFixo = (Number((salario)-(salario*inss)));
let auxCreche = Number(2 * 45.5);

console.log("Salário fixo + Aux. Creche: R$", (salarioFixo + auxCreche));
console.log("Comissão em Janeiro: R$",(vendasJan*0.10));
console.log("O valor descontato de INSS em Janeiro é: R$",(vendasJan*0.10)*0.05);
console.log("Salario fixo é de R$",salarioFixo,", o aux. creche é de R$",auxCreche," e o INSS descontado foi R$",(salario*inss),"\n",
    "a comissão em Janeiro foi de R$",(vendasJan * 0.10),"\n",
    "a comissão em Fevereiro foi de R$",(vendasFev * 0.10),"\n",
    "a comissão em Março foi de R$",(vendasMar * 0.10),"\n",
    "a comissão em Abril foi de R$",(vendasAbr * 0.10),"\n",
    "a comissão em Maio foi de R$",(vendasMai * 0.10),"\n",
    "a comissão em Junho foi de R$",(vendasJun * 0.10),"\n",
    );