var cpf = document.getElementById("cpf");
var atual = document.getElementById("atual");

var email = document.getElementById("email");
var senha = document.getElementById("senha");

cpf.oninput = function(event) {
  atual.innerHTML = cpf.value;
}

function teste(){
    alert("Email: " + email + "Senha: " + senha);
}

teste();

alert("teste");
