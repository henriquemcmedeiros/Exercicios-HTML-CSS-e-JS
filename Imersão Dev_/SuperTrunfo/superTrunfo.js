var carta1 = {
  nome: "Bulbasauro",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  atributos: {
    Ataque: parseInt(Math.random() * 10),
    Defesa: parseInt(Math.random() * 10),
    Magia: parseInt(Math.random() * 10)
  }
};

var carta2 = {
  nome: "Charmander",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  atributos: {
    Ataque: parseInt(Math.random() * 10),
    Defesa: parseInt(Math.random() * 10),
    Magia: parseInt(Math.random() * 10)
  }
};

var carta3 = {
  nome: "Squirtle",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  atributos: {
    Ataque: parseInt(Math.random() * 10),
    Defesa: parseInt(Math.random() * 10),
    Magia: parseInt(Math.random() * 10)
  }
};

var carta4 = {
  nome: "Caterpie",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
  atributos: {
    Ataque: parseInt(Math.random() * 10),
    Defesa: parseInt(Math.random() * 10),
    Magia: parseInt(Math.random() * 10)
  }
};

var carta5 = {
  nome: "	Weedle",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
  atributos: {
    Ataque: parseInt(Math.random() * 10),
    Defesa: parseInt(Math.random() * 10),
    Magia: parseInt(Math.random() * 10)
  }
};

var carta6 = {
  nome: "	Pidgey",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
 atributos: {
    Ataque: parseInt(Math.random() * 10),
    Defesa: parseInt(Math.random() * 10),
    Magia: parseInt(Math.random() * 10)
  }
};

var carta7 = {
  nome: "Rattata",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
  atributos: {
    Ataque: parseInt(Math.random() * 10),
    Defesa: parseInt(Math.random() * 10),
    Magia: parseInt(Math.random() * 10)
  }
};

var carta8 = {
  nome: "Spearow",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
  atributos: {
    Ataque: parseInt(Math.random() * 10),
    Defesa: parseInt(Math.random() * 10),
    Magia: parseInt(Math.random() * 10)
  }
};

var carta9 = {
  nome: "Ekans",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
  atributos: {
    Ataque: parseInt(Math.random() * 10),
    Defesa: parseInt(Math.random() * 10),
    Magia: parseInt(Math.random() * 10)
  }
};

var carta10 = {
  nome: "Pikachu - SUPERTRUNFO",
  imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
  atributos: {
    Ataque: 10,
    Defesa: 9,
    Magia: 10
  }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
  var indiceMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[indiceMaquina];
  
  var indiceJogador = parseInt(Math.random() * cartas.length);
  while (indiceMaquina == indiceJogador) {
    indiceJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[indiceJogador];
  console.log(cartaJogador);
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirCartaJogador();
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
  var divResultado = document.getElementById("resultado");
  var resultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if (valorCartaJogador > valorCartaMaquina) {
    var HTMLResultado = "<p class='resultado-final'>Você Venceu!</p>"
  } else if (valorCartaJogador < valorCartaMaquina) {
    var HTMLResultado = "<p class='resultado-final'>Você perdeu!</p>"
  } else {
    var HTMLResultado = "<p class='resultado-final'>Empatou!</p>"
  }
  divResultado.innerHTML = HTMLResultado;
  
  document.getElementById('btnJogar').disabled = true;
  exibirCartaMaquina()
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador")
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'checked>"+ atributo + " " + cartaJogador.atributos[atributo] + "<br>"
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina")
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var opcoesTexto = ""
  for (var atributo in cartaMaquina.atributos){
    opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + '</div>'
}