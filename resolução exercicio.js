/**
 * 
 * RESOLUÇÃO DOS EXERCÍCIOS
 */

/** QUESTÃO 01 
 * Faça um código para somar dois números e multiplicar o resultado pelo primeiro número
*/
var num1, num2, soma, resultado;

num1 = +prompt("Digite o primeiro número");
num2 = +prompt("Digite o segundo número");

soma = num1 + num2;
resultado = soma * num1;

/**
 * QUESTÃO 02
 * Escreva um código para ler um valor (do teclado) e escrever (na tela) o seu antecessor
 */

var valor;
valor = +prompt("Digite um número");
alert(valor - 1);

/**
 * QUESTÃO 03
 * Faça um código que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias
 */

var anoNasc, mesNasc, diaNasc, anoAtual, mesAtual, diaAtual;

anoAtual = 2022;
mesAtual = 12;
diaAtual = 31;

anoNasc = +prompt("Digite o ano que você nasceu");
mesNasc = +prompt("Digite o mês que você nasceu");
diaNasc = +prompt("Digite o dia que você nasceu");

alert(((anoAtual - anoNasc) * 365) + ((mesAtual - mesNasc) * 30) + ((diaAtual - diaNasc)));

/**
 * QUESTÃO 04
 * Faça um código que leia o ano de nascimento e altura de uma pessoa. Diga se ela é maior de idade e tem mais de 1.60 de altura
 */
var idade, altura;

idade = +prompt("Sua idade");
altura = +prompt("Sua altura");

if(idade >= 18 && altura >= 1.60){
    alert("Você é maior de idade e tem mais de 1.60 de altura");
}

/**
 * QUESTÃO O5
 * Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE
 */

var golsTime1, golsTime2, nomeTime1, nomeTime2;

nomeTime1 = prompt("Digite o nome do time 1");
golsTime1  = +prompt("Gols marcador pelo time 1");
nomeTime2 = prompt("Digite o nome do time 2");
golsTime2  = +prompt("Gols marcador pelo time 2");

if(golsTime1 == golsTime2){
    alert("EMPATE");
} else if(golsTime1 > golsTime2){
    alert("O time" + nomeTime1 + "ganhou");
} else {
    alert("O time" + nomeTime2 + "ganhou");
}

// QUESTÃO 06
// Ler dois valores e imprimir uma das três mensagens a seguir: 
// "Números iguais", caso os números sejam iguais 
// "Primeiro é maior", caso o primeiro seja maior que o segundo; 
// "Segundo maior", caso o segundo seja maior que o primeiro.

var num1, num2;

num1  = +prompt("Digite o primeiro número");
num2  = +prompt("Digite o segundo número");

if(num1 == num2){
    alert("Números iguais");
} else if(num1 > num2){
    alert("Primeiro é maior");
} else {
    alert("Segundo maior");
}

// QUESTÃO 07
// Faça um algoritmo que receba um número e escreva na tela seus antecessores maiores que zero

var num = +prompt("Digite um número");

for(num; num>0; num--){
    console.log(num);
}

// QUESTÃO 08
// Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!

var num;

num = +prompt("Digite um número");

if(num > 10){
    alert("É MAIOR QUE 10!");
} else {
    alert("NÃO É MAIOR QUE 10!");
}

// QUESTÃO 09
// Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).
var num;

num = +prompt("Digite um número");

if(num >= 0){
    alert("POSITIVO");
} else {
    alert("NEGATIVO");
}

// QUESTÃO 10
// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
var num1, num2;

num1 = +prompt("Digite o primeiro número");
num2 = +prompt("Digite o segundo número");

if(num1 > num2){
    alert("O primeiro é maior");
} else {
    alert("O segundo é maior");
}