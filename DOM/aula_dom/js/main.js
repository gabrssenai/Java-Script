// Aula de DOM - SENAI
// Dica: abra o Console do navegador com F12.

// 1. Acesso pelo objeto document
document.getElementById("btn-document").addEventListener("click", function () {
  console.log(document);
  console.log(document.head);
  console.log(document.body);
});

// // 2. document.getElementById()
// document.getElementById("btn-id").addEventListener("click", function () {
//   let div = document.getElementById("app");
//   let paragrafo = document.getElementById("paragrafo1");

//   console.log(div);
//   console.log(paragrafo);
// });

// // 3. document.getElementsByClassName()
// document.getElementById("btn-classe").addEventListener("click", function () {
//   let paises = document.getElementsByClassName("paises");

//   console.log(paises);
//   console.log(paises[0]);
//   console.log(paises[1]);
//   console.log(paises[2]);
// });

// // 4. document.getElementsByTagName()
// document.getElementById("btn-tag").addEventListener("click", function () {
//   let containers = document.getElementsByTagName("div");

//   console.log(containers);
//   console.log(containers[0]);
//   console.log(containers[1]);
//   console.log(containers[2]);
// });

// // 5. document.querySelector()
// document.getElementById("btn-query").addEventListener("click", function () {
//   let container = document.querySelector("#container-query");
//   let paragrafo = document.querySelector(".texto");
//   let p = document.querySelector("#container-query p");
//   let radioChecked = document.querySelector(".radio:checked");

//   console.log(container);
//   console.log(paragrafo);
//   console.log(p);
//   console.log(radioChecked);
// });

// // 6. For...of em HTMLCollection
// document.getElementById("btn-forof").addEventListener("click", function () {
//   let paises = document.getElementsByClassName("paises");
//   let containers = document.getElementsByTagName("div");

//   for (const pais of paises) {
//     console.log(pais);
//   }

//   for (const div of containers) {
//     console.log(div);
//   }
// });

// // 7. innerText
// document.getElementById("btn-innertext").addEventListener("click", function () {
//   let titulo = document.getElementById("titulo-innertext");

//   console.log(titulo.innerText);
//   titulo.innerText = "Olá, Pessoa!";
//   console.log(titulo.innerText);
// });

// // 8. innerHTML
// document.getElementById("btn-innerhtml").addEventListener("click", function () {
//   let container = document.getElementById("container-html");
//   container.innerHTML = "<h3>Olá, Mundo!</h3><p>Lorem ipsum criado com innerHTML.</p>";
// });

// // 9. innerText vs innerHTML
// document.getElementById("btn-comparar").addEventListener("click", function () {
//   let paragrafo = document.getElementById("paragrafo-completo");

//   console.log("innerText:", paragrafo.innerText);
//   console.log("innerHTML:", paragrafo.innerHTML);
// });

// // 10. className
// document.getElementById("btn-classname").addEventListener("click", function () {
//   let container = document.getElementById("container-classe");

//   container.innerHTML = "<h3>Olá, Mundo!</h3><p>Agora este elemento usa a classe row.</p>";
//   container.className = "row";
// });

// // 11. createElement() e append()
// document.getElementById("btn-create").addEventListener("click", function () {
//   let paragrafo = document.createElement("p");
//   paragrafo.innerHTML = "<strong>Hello World criado com JavaScript!</strong>";

//   document.getElementById("area-append").append(paragrafo);
// });

// // 12. remove()
// document.getElementById("btn-remove-paragrafo").addEventListener("click", function () {
//   let paragrafo = document.getElementById("paragrafo-remover");

//   if (paragrafo !== null) {
//     paragrafo.remove();
//   }
// });

// document.getElementById("btn-remove-pais").addEventListener("click", function () {
//   let paises = document.getElementsByClassName("remover-pais");

//   if (paises.length > 0) {
//     paises[0].remove();
//   }
// });

// // 13. Obtendo dados de inputs com .value
// document.getElementById("btn-preencher").addEventListener("click", function () {
//   document.getElementById("nome").value = "Maria";
//   document.getElementById("idade").value = 20;
// });

// document.getElementById("btn-ler-input").addEventListener("click", function () {
//   let entrada = document.getElementById("entrada-valor");
//   console.log(entrada.value);
//   alert("Valor digitado: " + entrada.value);
// });

// // 14. Criando listas a partir de um array
// document.getElementById("btn-array").addEventListener("click", function () {
//   let pai = document.getElementById("pessoas");
//   let pessoas = ["HOMER", "MARGE", "BART", "LISA", "MAGGIE"];

//   pai.innerText = "";

//   for (const pessoa of pessoas) {
//     let li = document.createElement("li");
//     li.innerHTML = pessoa;
//     pai.append(li);
//   }
// });

// // 15. Criando elementos a partir de objetos
// document.getElementById("btn-objetos").addEventListener("click", function () {
//   const produtos = [
//     { id: 1, nome: "Arroz", preco: 20 },
//     { id: 2, nome: "Macarrão", preco: 5 },
//     { id: 3, nome: "Pão", preco: 1 },
//     { id: 4, nome: "Pudim", preco: 10 }
//   ];

//   let areaProdutos = document.getElementById("produtos-container");
//   areaProdutos.innerText = "";

//   for (const produto of produtos) {
//     let container = document.createElement("div");
//     container.className = "produto-card";
//     container.innerHTML = "<h3>ID: " + produto.id + "</h3>" +
//       "<p>Produto: " + produto.nome + "</p>" +
//       "<b>R$ " + produto.preco + "</b>";
//     areaProdutos.append(container);
//   }
// });

// // 16. addEventListener()
// let botao1 = document.getElementById("botao1");
// botao1.addEventListener("click", acaoClique);

// function acaoClique() {
//   alert("Resposta ao evento Opção 1");
// }

// // 17. Propriedade .on do nó
// let botao2 = document.getElementById("botao2");
// botao2.onclick = () => {
//   alert("Resposta ao evento Opção 2");
// };

// // 18. Atributo HTML inline
// function funcaoOpcao3() {
//   alert("Resposta ao evento Opção 3");
// }

// // Para o onclick inline encontrar a função no escopo global
// window.funcaoOpcao3 = funcaoOpcao3;

// // 19. Evento submit com preventDefault()
// let meuFormulario = document.getElementById("formulario");
// meuFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e) {
//   e.preventDefault();

//   let formulario = e.target;
//   let produto = formulario.children[0].value;
//   let quantidade = formulario.children[1].value;

//   console.log(produto);
//   console.log(quantidade);

//   document.getElementById("resultado-formulario").innerText =
//     "Formulário enviado sem recarregar a página: " + produto + " - " + quantidade;
// }

// // 20 e 21. Solução: lista de tarefas
// let tarefas = [];
// let entrada = document.getElementById("entrada");

// let botaoEnviar = document.getElementById("enviar");
// botaoEnviar.addEventListener("click", acaoEnviar);

// function acaoEnviar() {
//   if (entrada.value.trim() !== "") {
//     tarefas.push(entrada.value);
//     entrada.value = "";
//   }
// }

// let botaoVisualizar = document.getElementById("visualizar");
// botaoVisualizar.addEventListener("click", acaoVisualizar);

// function acaoVisualizar() {
//   let resultado = document.getElementById("resultado");
//   resultado.innerText = "";

//   tarefas.forEach(t => {
//     let item = document.createElement("li");
//     item.innerText = t;
//     resultado.append(item);
//   });
// }

// let botaoLimpar = document.getElementById("limpar");
// botaoLimpar.addEventListener("click", acaoLimpar);

// function acaoLimpar() {
//   tarefas = [];
//   acaoVisualizar();
// }

// // 22. Solução: acessando elementos
// document.getElementById("btn-produtos-array").addEventListener("click", function () {
//   let produtos = document.getElementsByClassName("produto");
//   let resultado = [];

//   for (const produto of produtos) {
//     resultado.push(produto.innerText);
//   }

//   console.log(resultado);
//   alert("Veja o array de produtos no console.");
// });



