console.log('Burasi notes.js dosyasidir');


module.exports.testFonksiyonu = function() {
    console.log('test fonksiyonu çağırıldı');
    return 'Guzel oldu';
}

// ES6 - this keyword burada kullanilamiyor
module.exports.test2Fonksiyonu = () => {
    console.log('test 2  fonksiyonu cagirildi.');
    return 'ES6 tipi';
}