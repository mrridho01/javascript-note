var penumpang =[];
var turunPenumpang = function(namaPenumpang,penumpang) {
    if (penumpang.length == 0) {
        console.log("Kosong gan lah siapa yang mau turun dah eh buset bzzz");
        return penumpang;
    } else {
        for (i=0;i<penumpang.length;i++) {
        if (penumpang[i] === namaPenumpang) {
            penumpang[i] = undefined;
            return penumpang;
        } else { 
            console.log("Lah "+namaPenumpang+" itu siapa dah kagak ada orangnya noh");
            return penumpang;
        }
    }  
}

};

//"Ridho","Thanos","Captain America","Iron Man","Kiano Tiger"
