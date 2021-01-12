var tambah = function(){
    var hasil = 0;
    for (i=0;i<arguments.length;i++) {
        hasil+=arguments[i];
    }
    return hasil;
}
var total = tambah(1,2,3,4,5);
alert('Nilai adalah :' +total);