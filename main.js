//chiedo distanza da percorrere
var distanza = prompt('inserire chilometri tratta');
console.log(distanza);
//chiedp età
var eta = prompt('iserisci età')
console.log(eta);

if (eta>18 || eta<65 ) {
    var prezzo = distanza * 0.21
}
else if (eta<18) {
var prezzo = prezzo - 20%
}

else { var prezzo= prezzo - 40%
}
console.log(prezzo_ridotto);
