// 1. Object Literal
    // let mahasiswa = {
    //     nama : "Ridho",
    //     energi : 20,
    //     makan : function (porsi) {
    //         this.energi+=porsi;
    //         return this.energi;
    //     }
    // };

// 2. Function Declaration
    // function Mahasiswa (nama,energi) {
    //     let mahasiswa = {};
    //     mahasiswa.nama =nama;
    //     mahasiswa.energi = energi;
    //     mahasiswa.makan = function(porsi) {
    //         this.energi+=porsi;
    //         console.log(`Halo ${this.nama}, selamat makan !`);
    //     }
    //     mahasiswa.main = function(jam) {
    //         this.energi-=jam;
    //         console.log(`Hal ${this.nama}, selamat main!`);
    //     }
    //     return mahasiswa;
    // };

    // let mhs1 = Mahasiswa("Ridho",10);
    // let mhs2 = Mahasiswa ('Thanos',50);

//3. Constructor Function
    function Mahasiswa (nama,energi) {
        this.nama =nama;
        this.energi = energi;
        this.makan = function(porsi) {
            this.energi+=porsi;
            console.log(`Halo ${this.nama}, selamat makan !`);
        }
        this.main = function(jam) {
            this.energi-=jam;
            console.log(`Hal ${this.nama}, selamat main!`);
        }

    };

    let mhs1 = new Mahasiswa("Ridho",10);
    let mhs2 = new Mahasiswa ('Thanos',50);
