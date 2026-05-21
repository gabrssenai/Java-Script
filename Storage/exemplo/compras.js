let listaCompras = [];

let entradaCompras = document.getElementById("entradaCompras");
let botaoSalvar = document.getElementById("salvar");
let botaoVisualizar = document.getElementById("visualizar");
let botaoLimpar = document.getElementById("limpar");
let resultado = document.getElementById("resultado");

function carregarLista() {
    let itensSalvos = localStorage.getItem("listaCompras");

    if (itensSalvos !== null) {
        listaCompras = JSON.parse(itensSalvos);
    }
}

function atualizarLocalStorage() {
    localStorage.setItem("listaCompras", JSON.stringify(listaCompras));
}

function salvarItem() {
    let item = entradaCompras.value;

    if (item === "") {
        alert("Digite um item");
        return;
    }

    carregarLista();

    listaCompras.push(item);

    atualizarLocalStorage();

    entradaCompras.value = "";

    visualizarItens();
}

function visualizarItens() {
    resultado.innerHTML = "";

    carregarLista();

    if (listaCompras.length === 0) {
        resultado.innerHTML = "<li>Nenhum item salvo</li>";
        return;
    }

    for (let i = 0; i < listaCompras.length; i++) {
        resultado.innerHTML += `
            <li>
                ${listaCompras[i]}
                <button onclick="editarItem(${i})">Editar</button>
                <button onclick="excluirItem(${i})">Excluir</button>
            </li>
        `;
    }
}

function editarItem(indice) {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem === null || novoItem === "") {
        return;
    }

    carregarLista();

    listaCompras[indice] = novoItem;

    atualizarLocalStorage();

    visualizarItens();
}

function excluirItem(indice) {
    carregarLista();

    listaCompras.splice(indice, 1);

    atualizarLocalStorage();

    visualizarItens();
}

function limparLista() {
    localStorage.removeItem("listaCompras");

    listaCompras = [];

    resultado.innerHTML = "";
}

botaoSalvar.addEventListener("click", salvarItem);
botaoVisualizar.addEventListener("click", visualizarItens);
botaoLimpar.addEventListener("click", limparLista);