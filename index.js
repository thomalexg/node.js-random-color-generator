const randomColor = require('randomcolor');
const chalk = require('chalk');
const color = randomColor();

// console.log(chalk.hex('#009360')('Hello World'));

// console.log(
//   randomColor({ hue: `${process.argv[2]}`, luminosity: `${process.argv[3]}` }),
// );

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
    return chalk.hex(renderColor)(renderColor);
  } else return renderAsk;
};

const render = (hex) => {
  let markup = null;
  if (hex === 'Type in a color') {
    markup = 'Type in a color';
  } else {
    markup = hex;
  }
  console.log(markup);
};

render(random());
