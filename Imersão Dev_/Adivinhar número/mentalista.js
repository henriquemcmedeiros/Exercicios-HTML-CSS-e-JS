var numSecreto = parseInt(Math.random() * 11);
var countchutes = 2;

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(numSecreto);

  if (chute == numSecreto) {
    resultado.innerHTML = "Acertou! O número realmente era " + chute;
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Você deve digitar um número entre 0 e 10";
  } else {
    if (countchutes == 0) {
      resultado.innerHTML = "Acabaram as tentativas, o número era " + numSecreto;
    } else {
      resultado.innerHTML = "Errou, o número não é " + chute + " tente novamente. Você ainda tem " + countchutes + " tentativas";
      countchutes = countchutes - 1;
    }
  }
}