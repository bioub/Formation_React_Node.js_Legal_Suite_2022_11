// function (exports, require, module, __filename, __dirname) {
const { hello } = require('./hello')

const names = ['Romain', 'Jean', 'Eric'];

for (const n of names) {
  console.log(hello(n));
}
// }
