// Código JS aqui!
const produtos = [
    { 
        nome: "Labubu Azul", 
        preco: "50,00", 
        descricao: "ursinho que nunca para de sorrir", 
        imagem: "assets/imgs/labubuazul.jpeg" 
    },
    { 
        nome: "Labubu Marrom", 
        preco: "100,00", 
        descricao: "ursinho que nunca para de sorrir", 
        imagem: "assets/imgs/labubumarrom.jpeg" 
    },
    { 
        nome: "Labubu Bonito", 
        preco: "250,00", 
        descricao: "ursinho que nunca para de sorrir", 
        imagem: "assets/imgs/labububonito.jpeg" 
    }
];

let itensNoCarrinho = 0;

function renderizarProdutos() {
    const container = document.getElementById("lista-produtos");
    container.innerHTML = "";

    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.className = "produto-card";

        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-img">
            <h2>${produto.nome}</h2>
            <p class="preco">R$ ${produto.preco}</p>
            <p class="descricao">${produto.descricao}</p>
            <div class="botoes">
                <button class="btn-add" onclick="adicionarItem()">Adicionar</button>
                <button class="btn-remove" onclick="removerItem()">Remover</button>
            </div>
        `;

        container.appendChild(card);
    });
}

function adicionarItem() {
    itensNoCarrinho++; // Aumenta 1 no número
    atualizarCarrinho(); // Chama a função de atualizar a tela
}

function removerItem() {
    if (itensNoCarrinho > 0) { // Só remove se tiver pelo menos 1 item
        itensNoCarrinho--; // Diminui 1 no número
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    document.getElementById("contador-carrinho").innerText = itensNoCarrinho;
}

renderizarProdutos();