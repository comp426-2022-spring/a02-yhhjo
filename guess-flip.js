import {coinFlips } from "./modules/coin.mjs";
import { createRequire } from 'module';
import { coinFlip } from "./modules/coin.mjs";
const require = createRequire(import.meta.url);


const argv = require('minimist')(process.argv.slice(2))
const call = (argv.call)

if (call != "heads" && call != "tails") {
    console.log("error: no input.\nUsage: node guess-flip --call=[heads|tails]")
} else {
    const flip = coinFlip()
    const out = {
        call: call,
        flip: flip,
        result: call == flip ? 'win' : 'lose'
    }
    console.log(out)
}