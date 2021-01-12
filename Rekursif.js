var tampilAngka = function(n) {
    console.log(n);
    return tampilAngka
}

tampilAngka(10); // Tidak akan berakhir



// Base Case supaya fungsi berhenti.

function cetakAngka(n) {
    if (n === 0) {
        return;
    }
        console.log(n);
        cetakAngka(n-1);
} cetakAngka(10);