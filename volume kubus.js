var lagi=true;
while(lagi==true){
var s1 = parseInt(prompt('Masukkan sisi kubus 1 :'));
var s2 = parseInt(prompt('Masukkan sisi kubus 2 :'));

var kubus=function(s1,s2){
         return (s1*s1*s1) +(s2*s2*s2);

}; 
alert('Volume 2 kubus adalah: ' +kubus(s1,s2)); 
lagi = confirm('Apakah anda ingin menghitung lagi?');
} alert('Terima Kasih gan!');