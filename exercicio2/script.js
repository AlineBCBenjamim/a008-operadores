const numero1 = Number(prompt("Insira um número"));
const numero2 = Number(prompt("Insira outro número"));

const numeroMaior = numero1 > numero2;
console.log("O primeiro número é maior que o segundo?", numeroMaior);

const numeroIgual = numero1 === numero2;
console.log("O primeiro número é igual ao segundo?", numeroIgual);

const numeroDivisivel = (numero1 % numero2) === 0;
console.log("O primeiro número é divisível pelo segundo?", numeroDivisivel);

const numeroDivisivel2 = (numero2 % numero1) === 0;
console.log("O segundo numero é divisível pelo primeiro?", numeroDivisivel2);
