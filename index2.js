let markup = '';

let color = 'green';

for (let row = 0; row < 9; row++) {
  if (row < 3 || row > 5) {
    for (let col = 0; col < 31; col++) {
      markup += '#';
    }
  } else if (row === 3 || row === 5) {
    for (let col = 0; col < 32; col++) {
      if (col < 3 || col > 28) {
        markup += '#';
      } else {
        markup += '+';
      }
    }
  } else {
    for (let col = 0; col < 32; col++) {
      if (col < 3 || col > 28) {
        markup += '#';
      } else if (col < 12 || col > 19) {
        markup += '+';
      } else {
        let str = '#bdb5ff';

        for (let hex = 0; hex < 7; hex++) {
          markup += str[hex];
        }
      }
    }
  }
  markup += '\n';
}

//  for (let i=0; i<9; i++) {
//    for (let x =0; x<32; x++) {
//    if(x < 31) {
//      markup += '#'
//    } else markup += '\n'
//  }
//
//  }

console.log(markup);
