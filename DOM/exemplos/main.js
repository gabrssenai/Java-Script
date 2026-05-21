console.log("Arquivo main.js conectado!");

// console.log(document);
// console.log(document.head);
// console.log(document.body);

// =====================
// getElementById
// =====================

// let div = document.getElementById("app");
// console.log(div);

// let paragrafo = document.getElementById("paragrafo1");
// console.log(paragrafo);

// =====================
// getElementByClassName
// =====================

// let paises = document.getElementsByClassName("paises");
// console.log(paises[0]);
// console.log(paises[1]);
// console.log(paises[2]);

// =====================
// getElementByTagName
// =====================

// let container = document.getElementsByTagName("h2");
// console.log(container[0]);
// console.log(container[1]);
// console.log(container[2]);

// ======================
// document.querySelector
// ======================

// let container = document.querySelector("#container");
// console.log(container);

// let paragrafoTexto = document.querySelector(".texto");
// console.log(paragrafoTexto);

// let p = document.querySelector("#container p");
// console.log(p);

// let radioChecked = document.querySelector(".radio:checked");
// console.log(radioChecked);

// ======================
// for ... of em HTML
// ======================

// let paises = document.getElementsByClassName("paises");
// let containers = document.getElementsByTagName("div");

// for(let pais of paises){
//     console.log(pais);
// }

// for(let div of containers){
//     console.log(div);
// }

// ======================
// innerText
// ======================

// let titulo = document.getElementById("titulo");
// console.log(titulo.innerText);

// titulo.innerText = "Olá, pessoas!";
// console.log(titulo.innerText);

// ======================
// innerHTML
// ======================

// let container = document.getElementById("container");
// container.innerHTML = "<h2> Segundou </h2> <p> Segundas-feiras possibilitam novos inícios!!! </p>";

// ======================
// innerHTML vs innerText
// ======================

// let paragrafo = document.getElementById("paragrafo");
// console.log(paragrafo.innerHTML);
// console.log(paragrafo.innerText);

// ======================
// className
// ======================

// let container = document.getElementById("container");
// container.innerHTML = "<h2> Olás, alunos!</h2>";
// container.className = "row";
// console.log(container.innerHTML);

// ======================
// createElement()
// ======================

// let paragrafoNovo = document.createElement("p");
// paragrafoNovo.innerHTML = "<h2> Hello World! </h2>";
// document.body.append(paragrafoNovo);

// ======================
// remove()
// ======================

// let paragrafo = document.getElementById("paragrafo");
// let paises = document.getElementsByClassName("paises");
// paises[1].remove();
// paises[1].remove();
// paises[0].remove();

// ======================
// Dados de input (.value)
// ======================

// document.getElementById("nome").value = "Maria";
// document.getElementById("idade").value = "29";

// let entrada = document.getElementById("entrada");
// entrada.value = "Texto inserido pelo JS";
// console.log(entrada.value);

// ======================
// Criando listas 
// ======================

// let pai = document.getElementById("simpsons");
// let simpsons = ["HOMER", "MARGE", "BART", "LISA", "MAGGIE", "CACHORRO", "GATO"];

// for(let simpson of simpsons){
//     let li = document.createElement("li");
//     li.innerHTML = simpson;
//     pai.append(li);
// }

// =====================================
// Criando Elementos a Partir de Objetos 
// =====================================

// let produtos = [
//     { id: 1, nome: "Arroz", preco: 20 },
//     { id: 2, nome: "Macarrão", preco: 5 },
//     { id: 3, nome: "Pão", preco: 1 },
//     { id: 4, nome: "Pudim", preco: 10 }
// ];
// for(let produto of produtos){
//     let container = document.createElement("div");
//     container.className = "card-product";
//     container.innerHTML = "<h3> ID: " + produto.id +" </h3>"+
//         "<p> Produto: " + produto.nome + "</p>" +
//         "<b> R$ " + produto.preco + "</b>";
//     document.body.append(container);
// }

// =====================================
// addEventListener()
// =====================================

// function acaoClique(){
//     alert("Resposta ao evento ouvido na Opção 1")
// }

// let botao1 = document.getElementById("botao1");
// botao1.addEventListener("click", acaoClique);

// =====================================
// Propriedade .on do nó
// =====================================

// let botao2 = document.getElementById("botao2");
// botao2.onclick = () => {
//     alert("Resposta ao evento ouvido na Opção 2");
// }

// =====================================
// Atributo HTML inline
// =====================================

// function funcaoOpcao3(){
//     alert("Resposta ao evento ouvido na Opção 3")
// }

// =====================================
// Evento Submit com preventDefault()
// =====================================

let meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit",validarFormulario);
function validarFormulario(e){
    e.preventDefault();
    let formulario = e.target;
    console.log(formulario.children[0].value);
    console.log(formulario.children[1].value);
    formulario.children[0].value = "";
    formulario.children[1].value = "";
}

// =====================================
// Lista de Tarefas
// =====================================

let tarefas = [];
let entradaTarefa = document.getElementById("entradaTarefa");
let botaoEnviar = document.getElementById("enviar");
let botaoLimpar = document.getElementById("limpar");
let resultado = document.getElementById("resultado");
let botaoVisualizar = document.getElementById("visualizar");

botaoEnviar.addEventListener("click", acaoEnviar);

function acaoEnviar(){
    tarefas.push(entradaTarefa.value);
    entradaTarefa.value = "";
}

botaoVisualizar.addEventListener("click", acaoVisualizar);

function acaoVisualizar(){
    resultado.innerHTML = "";
    tarefas.forEach(tarefa => {
        let item = document.createElement("li");
        item.innerText = tarefa;
        resultado.append(item);
        console.log(tarefa);
    });
}

botaoLimpar.addEventListener("click", acaoLimpar);

function acaoLimpar (){
    tarefas = [];
    acaoVisualizar();
}


//localStorage.setItem("chave", "valor");

localStorage.setItem("nome", "Gabriel");
localStorage.setItem("idade", "29");
localStorage.setItem("nome1", "Eduardo");
localStorage.setItem("idade1", "43");
localStorage.setItem("nome2", "Diego");
localStorage.setItem("idade2", "33");

// localStorage.setItem("carrinho", {
//     produto: candida,
//     ref: 1234,
//     qte: 2
// })


// getItem

let idade = localStorage.getItem("idade");
console.log(idade);

sessionStorage.setItem("nome", "Gabriel");

let nome = sessionStorage.getItem('nome');
console.log(nome);

for (let i = 0; i < localStorage.length; i++) {
  let chave = localStorage.key(i);
  console.log("Chave: " + chave + " Valor: " + localStorage.getItem(chave));
}

localStorage.removeItem("nome");
localStorage.removeItem("idade");

