console.log("Uygulamamiz basliyor");

const os = require("os");
const yargs = require('yargs');

const  argv = yargs.argv;

console.log(process.argv);
console.log(argv);


console.log(`Yazar : ${argv.yazar}`);