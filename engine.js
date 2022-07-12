const readline = require('readline');

class KeyboardHandler{
  constructor(){



    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
  }



  getKeys(cb){
    process.stdin.on('keypress', cb(str, key));
  }

}


const cb = (str, key) => {

  (str, key) => {                             // pass all of callback fn into get keys
    if (key.ctrl && key.name === 'c') {
      process.exit();
    } else {
      console.clear();
      console.log(`You pressed the "${str}" key`);
      console.log();
      console.log(key);
      console.log();
    }
  }
}
