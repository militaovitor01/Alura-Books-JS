function aplicarDesconto (livros) {
    const desconto = 0.3

    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // Copia os valores presentes no array e altera apenas o preco
    })

    return livrosComDesconto
}