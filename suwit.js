var tanya =true;

while(tanya) {
        //Menangkap pilihan player
        var p = prompt('Masukkan pilihanmu ! gajah, semut apa orang');

        // menangkap pilihan computer
        var c = Math.random();

        if (c < 0.34) {
            c = "gajah";
        } else if (c >=0.34 && c<0.66){
            c ="orang";
        }else {
            c = "semut";
        }
        alert ('komputer memilih :'+c);

        //generate bilangan random

        //menentukan rules
        var hasil;
        if (p == c) {
            hasil ='SERI';
        } else if (p == 'gajah') {
            if (c == 'orang') {              //atau hasil= (comp == 'orang') ? 'MENANG' : "KALAH";
                hasil ='MENANG';
            } else {
                hasil = 'KALAH';
            }
        } else if (p=='orang'){
            if (c =="gajah") {
                hasil ="KALAH";
            } else {
                hasil ="MENANG";
            }
        } else if( p=='semut'){
            hasil = (c == 'gajah') ? 'MENANG' : 'KALAH';
        } else {
            hasil = 'memasukkan pilihan salah';
        }


        //tampilkan hasilnya
        alert('Kamu memilih : ' +p+ ' dan komputer memilih : ' +c+ ' maka kamu : '+hasil);
        tanya = confirm('lagi?')
}   alert('SELAMAT BERJUMPA DI LAIN WAKTU !!!');     