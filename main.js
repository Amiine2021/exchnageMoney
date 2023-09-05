let euro = document.getElementById('euro');
let dirham = document.getElementById('dirham');

euro.onkeyup = function(){
    dirham.value = euro.value * 10.59 ;
    console.log(euro.value)
}

dirham.onkeyup = function(){
    euro.value = dirham.value / 10.59 ;
}