/**
 * :.: REVISÃO - PROGRAMAÇÃO WEB :.:
 * :.: JAVASCRIPT
 * 1 - DECLARAÇÃO DE VARIÁVEIS
 * 2 - DOM
 * 3 - FUNÇÕES
 * 4 - OPERADORES DE COMPARAÇÃO (COMPARAÇÃO BOOLEANA)
 * 5 - OPERADOR CONDICINAL IF...ELSE
 * 6 - ARRAY (LISTA)
 *  6.1 - POP e PUSH
 *  6.2 - SELECIONAR UM ELEMENTO DA LISTA
 * 
 **/

/***
Declarações
Tipos de declaração
    * const, var e let
 Variáveis e constantes 
    * o que é, e não é permitido

Condicional IF
 * operadores de comparação
     >, <, !=, ==

Operadores lógicos
 E (&&), OU (||)
* valores booleanos

Array (Lista)
- Manipular elementos de uma lista
- Métodos: pop e push

Função
- Chamada da função 

IMPORTANTE:
* saber criar uma função
* saber declarar uma variável
* saber pedir informação
* saber os operadores matemáticos básicos
* saber selecionar um elemento com DOM
*/


/* função */
function cliqueMe(){
    alert("Você clicou no botão");
}

/* tipos de dados */
var idade = 19;
var nome = "Carla";
var ano = "2022"; 
var verdadeiro = true;


/* DOM */
var btn = document.querySelector("button");

btn.addEventListener("click", cliqueMe);

/* var btn é a declaração de uma variável

*/

/* Selecinar o botão com id c */
function umaFuncao(){
    alert("Você clicou no botão C")
}

document.querySelector("#c").addEventListener("click", umaFuncao);


/* Arrays */
var vogais = ['a', 'e'];

vogais[1]; // acessar um elemento da lista

vogais.push('i');
vogais.pop();

// insert e remove

/* ex: laço */
var M = 20;
var N = 40;

/* repetir 4 vezes */
for(var i = 1; i<=4; i++){
    M = M - 2;
    N = N - 2;
}

/* comparações lógicas */
(2*5) == 10; /* 10 == 10 VERDADE*/ 
(1 < 3) && (2 == 2); /* V && V = VERDADE */
((1 != 2) && (5 < 2)) || 4 > 3; 

/* if .. else | comparadores lógicos  */
var num1 = 10, num2 = 5;

if(num1 > num2){
    alert("O primeiro número é maior");
} 

/* comparação booleana */
var v1 = 3;
var v2, v3;

v2 = +prompt("Digite o número 3:")
v3 = false;

console.log(v1 == v2 ); // true
console.log(v2 == v3); // false
console.log(v1); // 3
 
