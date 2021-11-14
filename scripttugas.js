function hasil(){
    var bil1 = document.getElementById('bil1').value;
    var bil2 = document.getElementById('bil2').value;

    var hasil = bil1*bil2

    document.getElementById('hasil').innerHTML = hasil;
}