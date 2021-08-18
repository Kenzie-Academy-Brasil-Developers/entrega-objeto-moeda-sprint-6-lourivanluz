function display20Flips() {
    const results = [];
    const telaResult = document.createElement('p')
    telaResult.innerHTML = 'Resultado:</br>'

    for(let count = 0; count <20; count ++){
        coin.flip()
        const result = coin.state
        results.push(result)
        telaResult.innerHTML += ` ${coin.toString()}`
    }
    document.body.appendChild(telaResult)

    return results
  }
  
  function display20Images() {
    const results = [];
    const telaResult = document.createElement('div')
    telaResult.classList.add('result')

    for(let count = 0; count <20; count++){
        coin.flip()
        const result = coin.state
        results.push(result)
        telaResult.appendChild(coin.toHTML())
    }

    document.body.appendChild(telaResult)
    return results

  }

  display20Images()
  display20Flips()