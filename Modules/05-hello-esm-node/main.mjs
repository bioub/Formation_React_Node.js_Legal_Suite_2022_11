// import { hello } from './hello.js';
import hello from './hello.mjs';

const names = ['Romain', 'Jean', 'Eric'];

for (const n of names) {
  console.log(hello(n));
}
