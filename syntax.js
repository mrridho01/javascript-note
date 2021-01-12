var jmlAngkot=100, angkotBeroperasi=88,noAngkot=1;

for(noAngkot;noAngkot<=jmlAngkot;noAngkot++) {
    if(noAngkot<=angkotBeroperasi){
        console.log('Angkot No. '+noAngkot+' beroperasi dengan baik.');
    } else{
        console.log('Angkot No '+noAngkot+' sedang tidak beroperasi.');
    }
}