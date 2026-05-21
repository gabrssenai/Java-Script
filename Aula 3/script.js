// criando a caixa 'num', que recebe um número inteiro
// dado pelo usuário 

let num = parseInt(prompt("Digite um número"))

// para uma caixa auxiliar 'i' que começa com o numero dado pelo 
// usuário -1, para quando a caixa 'i' tem um conteúdo que é maior 
// zero, atualize o conteúdo da caixa 'i' com o que tem nela - 1
for (let i = num - 1; i > 0; i = i - 1){
    //mostre na tela o conteúdo da caixa 'i' no momento
    console.log(i);
}