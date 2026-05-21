
// Exercício 1

const cores = [];

for (let i = 1; i <= 5; i = i+1){
    let cor = prompt("Digite uma cor: ").toLowerCase();
    cores.push(cor);
}
console.log(cores)

//Exercício 2

let remove = prompt("Escolha uma cor para remover da lista").toLowerCase();
let indice = cores.indexOf(remove);

if (indice !== -1){
    cores.splice(indice,1);
    console.log(`A cor ${remove} foi removida`);
} else{
    console.log("Cor não encontrada");
}

// Exercício 3

for(let i = 0; i < cores.length; i++){
    console.log(`Na posição ${i} temos a cor ${cores[i]}`);
}

// Exercício 4

let novaCor = prompt("Digite uma nova cor: ");
let existe = cores.includes(novaCor);
if(existe){
    console.log("Essa cor já está na lista!");
}else{
    cores.unshift(novaCor);
    console.log("Nova cor adicionada!");
}

console.log(cores);

let entrada = document.getElementById("entrada");

let botaoSalvar = document.getElementById("salvar");

let botaoVisualizar =
    document.getElementById("visualizar");

let botaoLimpar =
    document.getElementById("limpar");

let lista = document.getElementById("lista");


// SALVAR
botaoSalvar.addEventListener("click", salvarItem);

function salvarItem(){

    let item = entrada.value;

    // pega string salva
    let itens =
        localStorage.getItem("listaCompras");

    // se não existir
    if(itens == null){

        itens = item;

    } else {

        itens = itens + "," + item;
    }

    localStorage.setItem(
        "listaCompras",
        itens
    );

    entrada.value = "";
}


// VISUALIZAR
botaoVisualizar.addEventListener(
    "click",
    visualizarItens
);

function visualizarItens(){

    lista.innerHTML = "";

    let itens =
        localStorage.getItem("listaCompras");

    if(itens == null) return;

    // transforma string em array
    itens = itens.split(",");

    for(const item of itens){

        let li =
            document.createElement("li");

        li.innerText = item;

        lista.append(li);
    }
}


// LIMPAR
botaoLimpar.addEventListener(
    "click",
    limparLista
);

function limparLista(){

    localStorage.removeItem(
        "listaCompras"
    );

    lista.innerHTML = "";
}