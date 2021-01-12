// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi+=porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`);
//     },
//     main : function(jam) {
//         this.energi-=jam;
//         console.log(`Halo ${this.nama}, selamat main!`);
//     },
//     tidur : function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);

//     }
// };

function Mahasiswa (nama,energi) {    
        this.nama = nama;
        this.energi = energi;
    };
Mahasiswa.prototype.makan = function(porsi) {
    this.energy +=porsi;
    return `Halo ${this.nama}, selamat makan !`;
};
Mahasiswa.prototype.tidur = function (jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat tidur !`;
};

    let mhs1 = new Mahasiswa("Ridho",10);
    let mhs2 = new Mahasiswa ('Thanos',50);