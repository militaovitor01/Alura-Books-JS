let ordenarPrecoLivros = document.getElementById('btnOrdenarPorPreco')
ordenarPrecoLivros.addEventListener('click', ordenarPreco)

function ordenarPreco () {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}