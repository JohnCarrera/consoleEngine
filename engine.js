const readline = require('readline');

class KeyboardHandler{
  constructor(){



    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
  }

  getKeys(){
    process.stdin.on('keypress', (str, key) => {
      if (key.ctrl && key.name === 'c') {
        process.exit();
      } else {
        console.clear();
        console.log(`You pressed the "${str}" key`);
        console.log();
        console.log(key);
        console.log();
      }
    });
  }


}



let table = {
  hp: 25,
  mp: 50,
}
