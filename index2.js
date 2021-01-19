let markup = '';

let color = 'green';
const hexcode = '#bdb5ff';
let count = 0;

for (let row = 0; row < 9; row++) {
  if (row < 3 || row > 5) {
    for (let col = 0; col < 31; col++) {
      markup += '#';
    }
  } else if (row === 3 || row === 5) {
    for (let col = 0; col < 31; col++) {
      if (col < 3 || col > 28) {
        markup += '#';
      } else {
        markup += ' ';
      }
    }
  } else {
    for (let col = 0; col < 31; col++) {
      if (col < 3 || col > 28) {
        markup += '#';
      } else if (col < 12 || col > 18) {
        markup += ' ';
      } else if (col >= 12 && col <= 18) {
        markup += hexcode[count];
        count++;
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
