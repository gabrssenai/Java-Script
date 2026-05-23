let produtos = [
  {
    id: 1,
    nome: "Camiseta",
    preco: 59.90,
    imagem: "img/camiseta.jpg"
  },
  {
    id: 2,
    nome: "Tênis",
    preco: 199.90,
    imagem: "img/tenis.jpg"
  },
  {
    id: 3,
    nome: "Mochila",
    preco: 120.00,
    imagem: "img/mochila.jpg"
  }
];

let carrinho = [];
let areaProdutos = document.getElementById("produtos");
let areaCarrinho = document.getElementById("carrinho");
let total = document.getElementById("total");
let botaoLimpar = document.getElementById("limparCarrinho");

function renderProdutos(){
  areaProdutos.innerHTML = '';
  produtos.map(function(produto){ //uso map -> lista.map(function(elemento, indice, listaToda))
    areaProdutos.innerHTML += `
      <div class = "card">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$${produto.preco.toFixed(2)}</p>
        <button onclick = "adicionarCarrinho(${produto.id})">
          Adicionar ao Carrinho
        </button>
      </div>
    `;
  })
}
renderProdutos();

function carregarCarrinho(){
  let dados = localStorage.getItem("carrinho");
  if(dados !== null){
    carrinho = JSON.parse(dados);
  }
}

function renderCarrinho(){
  areaCarrinho.innerHTML = "";
  carregarCarrinho();
  let soma = 0;
  carrinho.map(function(produto, indice){ //uso map -> lista.map(function(elemento, indice, listaToda))
    soma = soma + produto.preco;
    areaCarrinho.innerHTML += `
      <div class="card">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$${produto.preco.toFixed(2)}</p>
        <button onclick = "removerCarrinho(${indice})">
          Remover do Carrinho
        </button>
      </div>
    `;
  })
  total.innerHTML = "Total: R$" + soma.toFixed(2);
}
renderCarrinho();

function adicionarCarrinho(id){
  let produtoEncontrado = produtos.find(function(produto){
    return produto.id === id;
  });
  carrinho.push(produtoEncontrado);
  salvarCarrinho();
  renderCarrinho();
}

function salvarCarrinho(){
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function removerCarrinho(indice){
  carrinho.splice(indice, 1);
  salvarCarrinho();
  renderCarrinho();
}

botaoLimpar.addEventListener("click", limparCarrinho);
function limparCarrinho(){
  carrinho = [];
  localStorage.removeItem("carrinho");
  renderCarrinho();
}

