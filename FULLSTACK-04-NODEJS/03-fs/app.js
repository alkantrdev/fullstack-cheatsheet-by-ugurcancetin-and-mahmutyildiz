console.log("Uygulamamiz basliyor");

const fs = require("fs");
const os = require("os");
const notes = require("./notes");

// fs.appendFile('text.txt', 'Bu bir test yazisidir.', function(err) {
//     if(err) throw err;
//     console.log('The data to append was appended to file.');
// });

// var user = os.userInfo();

// console.log(user.username);
// fs.appendFileSync('test.txt', `Sistem kullanicisi: ${user.username} dedi ki: Merhaba\n`);

var donenDeger = notes.testFonksiyonu();
console.log(donenDeger);


var donenDeger2 = notes.test2Fonksiyonu();
console.log(donenDeger2);

