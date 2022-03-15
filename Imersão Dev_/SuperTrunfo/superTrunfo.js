var carta1 = {
  nome: "Bulbasauro",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
    Ataque: 7,
    Defesa: 8,
    Magia: 6
  }
};

var carta2 = {
  nome: "Charmander",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  atributos: {
    Ataque: 9,
    Defesa: 6,
    Magia: 2
  }
};

var carta3 = {
  nome: "Squirtle",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  atributos: {
    Ataque: 4,
    Defesa: 9,
    Magia: 7
  }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina = 0
var cartaJogador = 0

function sortearCarta() {
  var indiceMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[indiceMaquina];
  
  var indiceJogador = parseInt(Math.random() * 3);
  while (indiceMaquina == indiceJogador) {
    indiceJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[indiceJogador];
  console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  var imagem = document.getElementById("imagem");
  var imagemTexto = "<img src=" + cartaJogador.imagem + ">";
  imagem.innerHTML = imagemTexto;
 
  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes")
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "' checked>"+ atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributo () {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributo ();
  var resultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if (valorCartaJogador > valorCartaMaquina) {
    resultado.innerHTML = "Você venceu!"
  } else if (valorCartaJogador < valorCartaMaquina) {
    resultado.innerHTML = "Você perdeu!"
  } else {
    resultado.innerHTML = "Empatou!"
  }
  console.log(cartaMaquina)
}