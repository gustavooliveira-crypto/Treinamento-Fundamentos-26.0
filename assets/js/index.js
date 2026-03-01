// Código JS aqui!
// 1. Nossa "Base de Dados" de Produtos com os seus Labubus!
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

// 2. Variável para contar quantos itens tem no carrinho
let itensNoCarrinho = 0;

// 3. Função que "monta" os produtos na tela (O Componente Replicável!)
function renderizarProdutos() {
    const container = document.getElementById("lista-produtos");
    container.innerHTML = ""; // Limpa a tela antes de desenhar

    // Para cada 'produto' na nossa lista lá de cima, ele cria um cartão HTML
    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.className = "produto-card";

        // Aqui é o HTML de CADA produto sendo gerado pelo JS
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

        // Adiciona o cartão na página
        container.appendChild(card);
    });
}

// 4. Lógica para Adicionar itens no carrinho
function adicionarItem() {
    itensNoCarrinho++; // Aumenta 1 no número
    atualizarCarrinho(); // Chama a função de atualizar a tela
}

// 5. Lógica para Remover itens do carrinho
function removerItem() {
    if (itensNoCarrinho > 0) { // Só remove se tiver pelo menos 1 item
        itensNoCarrinho--; // Diminui 1 no número
        atualizarCarrinho();
    }
}

// 6. Atualiza o número lá no topo do site (na Navbar)
function atualizarCarrinho() {
    document.getElementById("contador-carrinho").innerText = itensNoCarrinho;
}

// 7. Faz a mágica acontecer assim que o arquivo carrega!
renderizarProdutos();