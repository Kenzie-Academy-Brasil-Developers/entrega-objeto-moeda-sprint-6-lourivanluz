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
      let imgResult = '../../img/cara.png'
      let imgAlt = 'Heads'

      if(this.state === 1){
        imgResult = '../../img/coroa.png'
        imgAlt = 'Tails'
      }

      image.src = 
      image.alt = imgAlt
      return image;
    },
  };