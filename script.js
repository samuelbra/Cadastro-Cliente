function abrir() {
    document.querySelector(".menu").classList.add("menu-aberto")
}

function fechar() {
    document.querySelector(".menu").classList.remove("menu-aberto")
}

function salvar() {
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value

    // Exibir um alerta caso o nome esteja vazio (nome == "")
    if(nome == "") {
        alert("O nome é obrigatório")
    }
    
    if(email == "") {
        alert("O email é obrigatório")
    }

    
}