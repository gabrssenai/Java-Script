let listaCompras = [];
let entradaCompras = document.getElementById("entradaCompras");
let listaAtual = document.getElementById("listaAtual");

// ==============
// BOTÃO SALVAR =
// ==============
let botaoSalvar = document.getElementById("salvar");

botaoSalvar.addEventListener("click",acaoSalvar);

function acaoSalvar(){
    let item = entradaCompras.value;
    if(item === ""){
        alert("Digite um item antes");
        return
    }
    let itensSalvos = localStorage.getItem("listaCompras");
    if(itensSalvos !== null){
        listaCompras = itensSalvos.split(",");
    }
    listaCompras.push(item);
    localStorage.setItem("listaCompras", listaCompras);
    entradaCompras.value = '';
}

// ==================
// BOTÃO VISUALIZAR =
// ==================
let botaoVisualizar = document.getElementById("visualizar");

botaoVisualizar.addEventListener("click", acaoVisualizar);

function acaoVisualizar(){
    listaAtual.innerHTML = '';
    let itensSalvos = localStorage.getItem("listaCompras");
    if(itensSalvos === null || itensSalvos === ""){
        listaAtual.innerHTML = "<li>Nenhum item salvo</li>";
        return
    }
    listaCompras = itensSalvos.split(",");
    for(let item of listaCompras){
        listaAtual.innerHTML = listaAtual.innerHTML + `<li>${item}</li>`;
    }
}

// ==============
// BOTÃO LIMPAR =
// ==============
let botaoLimpar = document.getElementById("limpar");

botaoLimpar.addEventListener("click", acaoLimpar);

function acaoLimpar(){
    localStorage.removeItem("listaCompras");
    listaCompras = [];
    listaAtual.innerHTML = '';
}
