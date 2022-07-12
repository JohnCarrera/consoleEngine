const ScreenElement = require('./screenElement.js');

class ScreenHandler {
  constructor(ScreenElements = []){
    this.ScreenElements = ScreenElements; //screenElements is an array of console fn that will be run in sequence from
  }                                       // 0 at the top to the end of the array. this will allow the update fn to
                                          //to dynamically update the screen and all variables referenced in the functions

  update(){                               // clear the screen and print or re-print all elements
    console.clear();
    for(let idx = 0; idx < this.screenElements.length; idx) {
      this.screenElements[idx].printFunction();
    }
  }

  addElementsTop(...elements){
    for(let el of elements)
    this.screenElements.unshift(element);
  }

  addElementsBottom(elements){
    for(let el of elements)
    this.screenElements.push(element);
  }
}


module.exports = ScreenHandler;
