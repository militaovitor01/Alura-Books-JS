const botoes = document.querySelectorAll('.btn')

botoes.forEach(botao =>{
    botao.addEventListener('click', filtrarLivros)
})

function filtrarLivros () {
    const botaoPressionado = document.getElementById(this.id)
    const categoriaBotao = botaoPressionado.value

    let livrosFiltrados = categoriaBotao == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoriaBotao)  
    console.table(livrosFiltrados)
    exibirLivrosNaTela(livrosFiltrados)

    if (categoriaBotao =='disponivel') {
        const valorTotal = calcularTotaldeLivrosDisponiveis(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotalLivrosDisponíveis(valorTotal)
    }
}

function filtrarPorCategoria(categoriaBotao) {
    return livros.filter(livro => livro.categoria == categoriaBotao)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalLivrosDisponíveis(valorTotal) {
    totalLivrosDisponíveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}