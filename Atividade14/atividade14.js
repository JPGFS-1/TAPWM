function validar(){

    let form = document.formPrincipal;

    let nome = form.elements["nome"].value;
    let email = form.elements["email"].value;
    let comentario = form.elements["comentario"].value;

    if(nome.length < 10){
        alert("O nome deve possuir no mínimo 10 caracteres.");
        return false;
    }

    if(email == ""){
        alert("Informe um e-mail válido.");
        return false;
    }

    if(comentario.length < 20){
        alert("O comentário deve possuir no mínimo 20 caracteres.");
        return false;
    }

    let pesquisa = document.getElementsByName("pesquisa");
    let respondeu = false;
    let valor = "";

    for(let i = 0; i < pesquisa.length; i++){
        if(pesquisa[i].checked){
            respondeu = true;
            valor = pesquisa[i].value;
        }
    }

    if(!respondeu){
        alert("Responda a pesquisa.");
        return false;
    }

    if(valor == "sim"){
        alert("Que bom que você voltou a visitar esta página!");
    }else{
        alert("Volte sempre a esta página!");
    }

    return true;
}