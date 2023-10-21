const nama = "wyvern abadi";
let usia = 18;

let biodata = document.getElementById('biodata');
console.log(biodata)

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia <= 18) {
        console.log('remaja');
        generasi = "generasi remaja";
    } else if (usia > 18 && usia < 30) {
        console.log('dewasa');
        generasi = "generasi dewasa";
    } else if (usia >= 30) {
        console.log('lansia');
        generasi = 'generasi tua';
    } else if (usia > 2 && usia < 11) {
        console.log('anak anak');
        generasi = "generasi anak anak";
    } else {
        console.log('bayi')
        generasi = "generasi"
    }

return biodata.innerHTML = generasi
}
console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun`);

console.log(nama);
console.log(usia);

generateBiodata();
