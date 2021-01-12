var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, burger, softdrink)');

switch (item){
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman sehat');
        break;
    case 'burger' :
    case 'softdrink' :
        alert('makanan / minuman tidak sehat');
        break;
    default :
        alert('salah gan');
        break;
}