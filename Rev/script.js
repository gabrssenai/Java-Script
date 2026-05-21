// let preco = parseFloat(prompt("Digite o valor do produto"));

// let vista = preco*0.1;

// let parcela = preco/3;

// alert(`Preço do produto R$${preco.toFixed(2)}. 
// Valor a vista R$${vista.toFixed(2)}, ou 3x de R$${parcela.toFixed(2)}.`)


// let num = parseInt(prompt("Digite um número"))

// if(num%2 === 0){
//     alert(`O número ${num} é par.`)
// }else{
//     alert(`O número ${num} é impar.`)
// }

// let num = parseInt(prompt("Digite um número: "))
// let fruta = prompt("Digite o nome da fruta: ")

// for(let i = 1;i <= num; i = i + 1){
//     console.log(`Você escolheu a ${fruta}`)
// }

// let chin = parseInt(prompt("Digite o número de chinchilas"))
// let anos = 0
// console.log(`${chin} chinchilas no 1° ano`)
// if(chin >= 2){
//     anos = parseInt(prompt("Há quantos anos as chinchilas estão na fazenda?"))
//     for(let i=2; i <= anos; i++){
//         chin = chin*3
//         console.log(`${chin} chinchilas no ${i}° ano`)
//     }
// }else{
//     alert("Precisamos de no mínimo um casal")
// }

alert("Área restrita para jornalistas")
let num = parseInt(prompt("Digite quantas notícias deseja cadastrar: "));
let noticias = [];
for(let i = 0; i < num; i++){
    noticia = prompt(`Cadastro da ${i+1}° notícia`)
    noticias.push(noticia)
    alert("Notícias cadastradas: "+ noticias.length)
}
noticias.reverse
for(let i = 0; i<noticias.length; i++){
    console.log(`Notícia ${i+1}: ${noticias[i]}`)
}

