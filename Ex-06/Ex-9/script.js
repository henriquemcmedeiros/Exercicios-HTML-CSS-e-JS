senha1 = parseInt(prompt("Digite uma senha: "));
senha2 = parseInt(prompt("Digite novamente: "));

if (senha1 == senha2) {
    alert("Cadastro realizado" );
}
else {
    alert("As senhas não são compatíveis");
}