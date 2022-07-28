console.log("app has started.");

var kareAl = (x) => x * x;

var topla = (x, y) => x + y;

console.log(kareAl(3));
console.log(topla(3, 5));

var ogrenci = {
    isim: 'ugurcan',
    notDondur: () => {
        console.log(75);
    },
    kendiniTanit: () => {
        console.log('Merhaba Ugurcan');
        console.log(`Merhaba  ${this.isim} - this. calismiyor`);
    },
    selamVer() {
        console.log(`Merhaba  ${this.isim} - this. boyle calisiyor`);
    }
}

ogrenci.notDondur();
ogrenci.kendiniTanit();
ogrenci.selamVer();