//Kembali ke Function Declaration :
// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energi+=porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`);
//     },
//     main : function(jam) {
//         this.energi-=jam;
//         console.log(`Hal ${this.nama}, selamat main!`);
//     }
// };

// function Mahasiswa (nama,energi) {
//         let mahasiswa = {};
//         mahasiswa.nama =nama;
//         mahasiswa.energi = energi;
//         mahasiswa.makan = methodMahasiswa.makan;        //Jadi untuk mengehemat memori, bikin object baru diluar , lalu mahasiswa.makan ini mengacu ke object di luar tadi
//         mahasiswa.main = methodMahasiswa.main;
        
//         return mahasiswa;
//     };

//     let mhs1 = Mahasiswa("Ridho",10);
//     let mhs2 = Mahasiswa ('Thanos',50);


    //Misalkan ingin menambah method baru, misal tidur, maka pada const methodMahasiswa harus membuat method baru lagi, dan daftarkan pada function Mahasiswa.. Jadi kita mengolah 2 object yang berbeda. Solusi : pakai Object.create()

    //Menjadi :

const methodMahasiswa = {
    makan : function(porsi) {
        this.energi+=porsi;
        console.log(`Halo ${this.nama}, selamat makan !`);
    },
    main : function(jam) {
        this.energi-=jam;
        console.log(`Hal ${this.nama}, selamat main!`);
    },
    tidur : function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur!`);

    }
};

function Mahasiswa (nama,energi) {
        let mahasiswa =Object.create(methodMahasiswa);     //sama kayak let mahasiswa ={}, bedanya adalah kita bisa nyimpen parameter didalamnya. Parameternya itu mengacu ke parent object.. yakni bikin object baru sambil membawa method dari object lain
        mahasiswa.nama = nama;
        mahasiswa.energi = energi;

        return mahasiswa;
    };

    let mhs1 = Mahasiswa("Ridho",10);
    let mhs2 = Mahasiswa ('Thanos',50);

    // Sebenarnya kita hanya butuh Mahasiswa.. tidak butuh methodMahasiswa.. ini hanya object baru.. ada caranya supaya gak bikin object lain (methodMahasiswa), yakni PROTOTYPE

