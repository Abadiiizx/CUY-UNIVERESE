// const mahasiswa = [
//     {
//         nama: "abadi",
//         alamat: "indonesia",
//         umur: 18,
//         semester: 1,
//     },
//     {
//         nama: "abadiiizx",
//         alamat: "bumi",
//         umur: 20,
//         semester: 3,
//     }
// ]
// let i = 0;
// function getDetailData() {
// // mahasiswa.map(function(result, i) {
// //     console.table(result)
// // })
// // }
// //     console.log(`data yang anda cari adalah ${mahasiswa.nama}`)
// // 

// mahasiswa.forEach(result => {
//     console.table(result)
// });
// }

class Hewan {
    warna
    keahlian
    constructor(nama) {
        this.nama = nama
    }

    set newColor(color) {
        this.warna = color
    }

    set newSkill(skill) {
        this.keahlian = skill
    }

    get detail() {
        return `Hi saya ${this.nama} berwarna ${this.warna} dan my skill ${this.keahlian}`
    }
}

const kucing = new Hewan('koreng')
kucing.newColor = "red"
kucing.newSkill = "fly"

console.log(kucing.detail)
