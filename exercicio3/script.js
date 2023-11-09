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

const inss = Number(0.05);

let salarioFixo = Number(2000);
let auxCreche = Number(2 * 45.5);

console.log("Salário fixo + Aux. Creche: R$", (salarioFixo + auxCreche));
console.log("Comissão em Janeiro: R$",(vendasJan*0.10));
console.log("O valor descontato de INSS em Janeiro é: R$",(vendasJan*0.10)*0.05);
console.log("Salário fixo é de R$",salarioFixo,", o aux. creche é de R$",auxCreche," e o INSS a descontar é de 0.5%","\n",
    "Salário Total Janeiro foi R$",((salarioFixo+auxCreche+(vendasJan * 0.10)-((salarioFixo+auxCreche+(vendasJan * 0.10))*inss))),", sendo R$",(vendasJan * 0.10),"de comissão","e desconto do inss foi de R$",((salarioFixo+auxCreche+(vendasJan * 0.10))*inss),"\n",
    "Salário Total Fevereir foi R$",((salarioFixo+auxCreche+(vendasFev * 0.10)-((salarioFixo+auxCreche+(vendasFev * 0.10))*inss))),", sendo R$",(vendasFev * 0.10),"de comissão","e desconto do inss foi de R$",((salarioFixo+auxCreche+(vendasFev * 0.10))*inss),"\n",
    "Salário Total Março foi R$",((salarioFixo+auxCreche+(vendasMar * 0.10)-((salarioFixo+auxCreche+(vendasMar * 0.10))*inss))),", sendo R$",(vendasMar * 0.10),"de comissão","e desconto do inss foi de R$",((salarioFixo+auxCreche+(vendasMar * 0.10))*inss),"\n",
    "Salário Total Abril foi R$",((salarioFixo+auxCreche+(vendasAbr * 0.10)-((salarioFixo+auxCreche+(vendasAbr * 0.10))*inss))),", sendo R$",(vendasAbr * 0.10),"de comissão","e desconto do inss foi de R$",((salarioFixo+auxCreche+(vendasAbr * 0.10))*inss),"\n",
    "Salário Total Maio foi R$",((salarioFixo+auxCreche+(vendasMai * 0.10)-((salarioFixo+auxCreche+(vendasMai * 0.10))*inss))),", sendo R$",(vendasMai * 0.10),"de comissão","e desconto do inss foi de R$",((salarioFixo+auxCreche+(vendasMai * 0.10))*inss),"\n",
    "Salário Total Junho foi R$",((salarioFixo+auxCreche+(vendasJun * 0.10)-((salarioFixo+auxCreche+(vendasJun * 0.10))*inss))),", sendo R$",(vendasJun * 0.10),"de comissão","e desconto do inss foi de R$",((salarioFixo+auxCreche+(vendasJun * 0.10))*inss),"\n",
    );

//console.log("Média salárial e R$",((salarioFixo+auxCreche*6));