var noAngkot=1,jmlAngkot=10,angkotBeroperasi=6;

for(noAngkot;noAngkot<=jmlAngkot;noAngkot++) {
    if(noAngkot<=angkotBeroperasi && noAngkot!=5){
        console.log('Angkot No. '+noAngkot+' beroperasi normal');
    } else if(noAngkot== 8 || noAngkot==10 || noAngkot==5){
        console.log('Angkot No. '+noAngkot+' harus lembur');
    }  else{
        console.log('Angkot No. '+noAngkot+' sedang di bengkel');
    }
}