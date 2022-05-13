cons= parseInt(prompt("Digite o consumo: "));

if (cons < 150) {
    valor = cons * 0.20;
}
else if (cons < 500) {
    valor = cons * 0.25;
}
else {
    valor = cons * 0.30;
}

if (valor < 11.90) {
    valor = 11.90;
}

alert("O calor da conta de luz é de:" + valor);