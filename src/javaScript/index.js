function display20Flips() {
    const results = [];
    for(let count = 0; count <20; count ++){

        coin.flip()
        const result = coin.state
        results.push(result)
    }
    return results
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  
  function display20Images() {
    const results = [];
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.

    for(let count = 0; count <20; count++){
        coin.flip()
        const result = coin.state
        results.push(result)
        document.body.appendChild(coin.toHTML())
    }
    return results

  }

// console.log(display20Flips())