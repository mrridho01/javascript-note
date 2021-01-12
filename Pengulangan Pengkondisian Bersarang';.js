var b='';
for(var i=10;i>0;i--) {
    for(a=1;a<i;a++) {
        b+=' ';
    } for(var j=0;j<=10-a;j++){
      b+='*';
    } b+='\n';
}console.log(b);