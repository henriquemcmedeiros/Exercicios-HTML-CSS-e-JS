function ConverterC() {
  var tempC = document.getElementById("temperaturaC").value;
  var tempEmC = parseFloat(tempC);
  
  // Convertendo as temperaturas
  var tempEmK = tempEmC + 273.15;
  var tempEmF = (tempEmC * 9 / 5) + 32;

  var tempConvertidaK = document.getElementById("valorConvertidoK");
  var txttempConvertidoK = "A temperatura em Kelvin é de " + tempEmK;
  tempConvertidaK.innerHTML = txttempConvertidoK;
  
  var tempConvertidaF = document.getElementById("valorConvertidoF");
  var txttempConvertidoF = "A temperatura em Farenheit é de " + tempEmF;
  tempConvertidaF.innerHTML = txttempConvertidoF;
}

function ConverterK() {
  var tempK = document.getElementById("temperaturaK").value;
  var tempEmK = parseFloat(tempK);
  
  // Convertendo as temperaturas
  var tempEmC = tempEmK - 273.15;
  var tempEmF = (tempEmC * 9 / 5) + 32;

  var tempConvertidaC = document.getElementById("valorConvertidoC");
  var txttempConvertidoC = "A temperatura em Celcius é de " + tempEmC;
  tempConvertidaC.innerHTML = txttempConvertidoC;
  
  var tempConvertidaF = document.getElementById("valorConvertidoF1");
  var txttempConvertidoF = "A temperatura em Farenheit é de " + tempEmF;
  tempConvertidaF.innerHTML = txttempConvertidoF;
}

function ConverterF() {
  var tempF = document.getElementById("temperaturaF").value;
  var tempEmF = parseFloat(tempF);
  
  // Convertendo as temperaturas
  var tempEmC = (tempEmF - 32) * 5/9
  var tempEmK = (tempEmF - 32) * 5/9 + 273.15

  var tempConvertidaC = document.getElementById("valorConvertidoC1");
  var txttempConvertidoC = "A temperatura em Celcius é de " + tempEmC;
  tempConvertidaC.innerHTML = txttempConvertidoC;
  
  var tempConvertidaK = document.getElementById("valorConvertidoK1");
  var txttempConvertidoK = "A temperatura em Kelvin é de " + tempEmK;
  tempConvertidaK.innerHTML = txttempConvertidoK;
}