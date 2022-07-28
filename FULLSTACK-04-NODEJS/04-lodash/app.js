console.log("Uygulamamiz basliyor");

const os = require("os");
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString(os.userInfo()));
console.log(_.isString(1));
console.log(_.isString("deneme"));


var distincts = _.uniq(['test',1,'test',2,'test',3]);
console.log(distincts);


