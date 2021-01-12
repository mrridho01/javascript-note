function Angkot (sopir,trayek,penumpang,kas) {
    this.Sopir = sopir;
    this.Trayek = trayek;
    this.Penumpang = penumpang;
    this.Kas = kas;
    this.penumpangNaik = function(namaPenumpang) {
    if (this.Penumpang.length === 0) {
        this.Penumpang.push(namaPenumpang);
        return this.Penumpang;
    } else {
        for (i=0; i<this.Penumpang.length; i++) {
            if (this.Penumpang[i] == undefined) {
                this.Penumpang[i] = namaPenumpang;
                return this.Penumpang;
            }      
        }
        this.Penumpang.push(namaPenumpang);
        return this.Penumpang;
    }
    }

    this.penumpangTurun = function(namaPenumpang,bayar) {
        if (this.Penumpang.length === 0) {
            alert('Angkot kosong gan');
            return this.Penumpang;
        } else {
            for (i=0;i<this.Penumpang.length;i++) {
                if (this.Penumpang[i] === namaPenumpang) {
                    this.Penumpang[i] = undefined;
                    this.Kas += bayar;
                    return this.Penumpang;
                }
            }
        }
    }
}

var angkot1 = new Angkot ('Muhammad Ridho',['BNR','BTM'],[],0);
var angkot2 = new Angkot ('Thanos',['Stasiun','Botani'],[],0);






// var penumpang =[];
// var turunPenumpang = function(namaPenumpang,penumpang) {
//     if (penumpang.length == 0) {
//         console.log("Kosong gan lah siapa yang mau turun dah eh buset bzzz");
//         return penumpang;
//     } else {
//         for (i=0;i<penumpang.length;i++) {
//         if (penumpang[i] === namaPenumpang) {
//             penumpang[i] = undefined;
//             return penumpang;
//         } else { 
//             console.log("Lah "+namaPenumpang+" itu siapa dah kagak ada orangnya noh");
//             return penumpang;
//         }
//     }  
// }

// };

//"Ridho","Thanos","Captain America","Iron Man","Kiano Tiger"