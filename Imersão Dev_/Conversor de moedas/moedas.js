function ConverterDol() {
    var valorDol = document.getElementById("valorDol").value;
    var valorEmDol = parseFloat(valorDol);
  
    // Convertendo valor em dolar em real
    var valorEmReal = valorEmDol * 5;
  
    var valorConvertido = document.getElementById("valorConvertidoDol");
    var txtValorConvertido = "O resultado em real é R$ " + valorEmReal;
    valorConvertido.innerHTML = txtValorConvertido;
}
  
function ConverterEuro() {
    var valorEuro = document.getElementById("valorEuro").value;
    var valorEmEuro = parseFloat(valorEuro);
  
    // Convertendo valor em Euro em real
    var valorEmReal = valorEmEuro * 6;
  
    var valorConvertido = document.getElementById("valorConvertidoEuro");
    var txtValorConvertido = "O resultado em real é R$ " + valorEmReal;
    valorConvertido.innerHTML = txtValorConvertido;
}
  
function ConverterBit() {
    var valorBit = document.getElementById("valorBit").value;
    var valorEmBit = parseFloat(valorBit);
  
    // Convertendo valor em Bitcoin em real
    var valorEmReal = valorEmBit * 196250;
  
    var valorConvertido = document.getElementById("valorConvertidoBit");
    var txtValorConvertido = "O resultado em real é R$ " + valorEmReal;
    valorConvertido.innerHTML = txtValorConvertido;
}