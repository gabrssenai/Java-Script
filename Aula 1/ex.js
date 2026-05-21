// 1. Vizinhos de um Número

// Elaborar um programa que leia um número. Calcule e informe os seus vizinhos, 
// ou seja, o número anterior e posterior.

// var umNum = parseInt(prompt("Digite um número: "));
// var anterior = umNum - 1;
// var posterior = umNum + 1;

// alert("O número anterior é: " + anterior + ". E o número posterior é: " + posterior + ".")


// 2. Conta da Pizzaria

// Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la.
// Calcule e informe o valor a ser pago por cliente.

// var valorTotal = parseFloat(prompt("Digite o valor da conta:"));
// var pagantes = parseInt(prompt("Quantos vão pagar?"))
// var valor = valorTotal / pagantes;

// alert("O valor individual é: " + valor);

// 3. Preço do Produto na Loja

// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. 
// Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

// var valor = parseFloat(prompt("Digite o valor da compra: "));
// var desconto = valor * 0.90;
// var parcela = valor / 3;

// console.log("O valor do pagamento à vista com desconto é: R$" + desconto
//     + ". O valor da compra à prazo é: R$" + parcela + " sem juros."
// );

// 4. Média de Notas

// Elaborar um programa que leia 2 notas de um aluno em uma disciplina. Calcule e informe a média das notas.

var notaUm = parseFloat(prompt("Digite a primeira nota: "));
var notaDois = parseFloat(prompt("Digite a segunda nota: "));
var media = (notaUm + notaDois) / 2;

alert("A média é: " + media);
