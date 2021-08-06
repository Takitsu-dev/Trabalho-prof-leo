var quantidade ;
var valorDeUsuario = [];
var nomeDeUsuario = [];
function salvarUser() {

    let nomeUsuario = document.getElementById("nomeUser").value;
    let valorUsuario = document.getElementById("valorUser").value;

    if (nomeUsuario && valorUsuario) {
        nomeDeUsuario.push(nomeUsuario);
        valorDeUsuario.push(valorUsuario);
        criaLista();
        document.getElementById("nomeUser").value = "";
    } else {
        alert("Usuário favor preencher o campo nome");
    }
}


function criaLista() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Produto</th><th>Valores</th><th>Actions</th></tr>";
    for (quantidade = 0; quantidade <= (nomeDeUsuario.length - 1); quantidade++) {
        tabela += "<tr><td>" + nomeDeUsuario[quantidade] + "</td><td>" + valorDeUsuario[quantidade] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}


function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if (!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.open("MeuSiteDeMercados.html")
    }
}

function excluir(quantidade) {
    nomeDeUsuario.splice((quantidade - 1), 1);
    valorDeUsuario.splice((quantidade - 1), 1);
    document.getElementById("tabela").deleteRow(quantidade);
}
function editar(quantidade) {
    document.getElementById("nomeUser").value = nomeDeUsuario[(quantidade - 1)];
    document.getElementById("valorUser").value = valorDeUsuario[(quantidade - 1)];
    nomeDeUsuario.splice(nomeDeUsuario[(quantidade - 1)], 1);
    valorDeUsuario.splice(valorDeUsuario[(quantidade - 1)], 1);
}
