import { coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const argv = require('minimist')(process.argv.slice(2))
const number = (argv.number || 1)
const myFlips = coinFlips(number)

console.log(myFlips)
console.log(countFlips(myFlips))
