const coin = {
    state: 0,
  
    flip: function () {
      this.state = Math.round(Math.random())
    },
  
    toString: function () {
      return this.state === 0 ? 'Heads' : 'Tails'
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      let imgResult = 'cara.png'
      let imgAlt = 'Heads'

      if(this.state === 1){
        imgResult = 'coroa.png'
        imgAlt = 'Tails'
      }
      image.src = `./src/img/${imgResult}`
      image.alt = imgAlt
      image.classList.add('moeda')
      return image;
    },
  };