//This
//console.log(this);  //this adalah window

//1. Function declaration
    // function halo () {
    //     console.log(this);
    //     console.log ('halo');
    // }
    // this.halo(); // this mengembalikan object global


//2. Object Literal
//     var obj ={a : 10, nama : 'Muhammad Ridho Tiger'};
//     obj.halo = function () {
//         console.log(this);
//         console.log('halo');
//     }
// console.log(obj.nama);       //This pada object literal mengembalikan object yang bersangkutan

//3. Constructor
function halo() {
    console.log(this);
    console.log('halo');
}
new halo();     //Mengembalikan object yang baru dibuat.. yakni halo {}
