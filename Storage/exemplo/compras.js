let listaCompras = [];
let entradaCompras = document.getElementById("entradaCompras");
let listaAtual = document.getElementById("listaAtual");

function carregarLista(){
    let itensSalvos = localStorage.getItem("listaCompras");
    if(itensSalvos !== null){
        listaCompras = JSON.parse(itensSalvos);
    }
}

function atualizarLocalStorage(){
    localStorage.setItem("listaCompras", JSON.stringify(listaCompras));
}

// ==============
// BOTÃO SALVAR =
// ==============
let botaoSalvar = document.getElementById("salvar");

botaoSalvar.addEventListener("click",acaoSalvar);

function acaoSalvar(){
    let item = entradaCompras.value;
    if(item === ""){
        alert("Digite um item antes");
        return;
    }
    listaCompras.push(item);
    atualizarLocalStorage();
    entradaCompras.value = "";
    acaoVisualizar();
}

// ==================
// BOTÃO VISUALIZAR =
// ==================
let botaoVisualizar = document.getElementById("visualizar");

botaoVisualizar.addEventListener("click", acaoVisualizar);

function acaoVisualizar(){
    listaAtual.innerHTML = '';
    carregarLista();
    if(listaCompras.length === 0){
        listaAtual.innerHTML = "<li>Nenhum item adicionado</li>"
        return
    }
    for(let i = 0; i < listaCompras.length; i++){
        listaAtual.innerHTML = listaAtual.innerHTML + `
            <li> ${listaCompras[i]} 
                <button onclick = "editarItem(${i})">Editar</button>
                <button onclick = "excluirItem(${i})">Excluir</button>
            </li>
        `}
}

function editarItem(indice){
    let novoItem = prompt("Digite um novo item");
    if(novoItem === null || novoItem === ''){
        return
    }
    carregarLista();
    listaCompras[indice] = novoItem;
    atualizarLocalStorage();
    acaoVisualizar();
}

function excluirItem(indice){
    carregarLista();
    listaCompras.splice(indice,1);
    atualizarLocalStorage();
    acaoVisualizar();
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

