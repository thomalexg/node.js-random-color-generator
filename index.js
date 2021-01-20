const randomColor = require('randomcolor');
const chalk = require('chalk');

const random = () => {
  let renderColor = null;
  let renderAsk = null;
  const color = process.argv[2];
  const luminosity = process.argv[3];
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
  } else return renderAsk;
};

let markup = '';

const hexcode = random();
let count = 0;
if (hexcode !== 'Type in a color') {
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
} else console.log('Type in a color!');

console.log(chalk.hex(hexcode)(markup));
