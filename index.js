const randomColor = require('randomcolor');
const chalk = require('chalk');

const random = (_) => {
  let renderColor = null;
  let renerAsk = null;
  let color = process.argv[2];
  let luminosity = process.argv[3];
  if (color === 'ask') {
    renderAsk = 'Type in a color';
  } else {
    renderColor = randomColor({
      hue: `${color}`,
      luminosity: `${luminosity}`,
    });
  }
  if (renderColor !== null) {
    return renderColor;
    // return chalk.hex(renderColor)(renderColor);
  } else return renderAsk;
};

let markup = '';

let color = 'green';
const hexcode = random();
let count = 0;

for (let row = 0; row < 9; row++) {
  if (row < 3 || row > 5) {
    for (let col = 0; col < 31; col++) {
      markup += '#';
    }
  } else if (row === 3 || row === 5) {
    for (let col = 0; col < 31; col++) {
      if (col < 3 || col > 27) {
        markup += '#';
      } else {
        markup += ' ';
      }
    }
  } else {
    for (let col = 0; col < 31; col++) {
      if (col < 3 || col > 27) {
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

console.log(chalk.hex(hexcode)(markup));
