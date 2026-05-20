function pessoa1() {
    var pessoa1 = new Object();
    pessoa1.nome = "Rogério";
    pessoa1.idade = "42";
    pessoa1.hobby = "Artesanato";
    
    alert("Pessoa 1: \n Nome = " + pessoa1.nome + "\n Idade = " + pessoa1.idade + 
        "\n Hobby = " + pessoa1.hobby);
}

function pessoa2() {
    var pessoa2 = { nome: "Eduardo", idade: "23", hobby: "Jogar bola" }

    alert(`Pessoa 2: \n Nome = ${pessoa2.nome} \n Idade = ${pessoa2.idade} \n Hobby = ${pessoa2.hobby}`);
}

function pessoa3() {
    function pessoa3(nome, idade, hobby) {
        this.nome = nome;
        this.idade = idade;
        this.hobby = hobby;
    }

    var pessoa3 = new pessoa3("Guilherme", "35", "Viajar");

    alert(`Pessoa 2: \n Nome = ${pessoa3.nome} \n Idade = ${pessoa3.idade} \n Hobby = ${pessoa3.hobby}`);
}

function pessoa4() {
    var pessoa4 = {
        nome: "Renan",
        idade: "13",
        hobby: "Correr"
    }

    alert(`Pessoa 2: \n Nome = ${pessoa4.nome} \n Idade = ${pessoa4.idade} \n Hobby = ${pessoa4.hobby}`);
}

function pessoa5() {
    var pessoa5 = {}
    pessoa5.nome = "José";
    pessoa5.idade = "20";
    pessoa5.hobby = "Observar pássaros";

    alert(`Pessoa 2: \n Nome = ${pessoa5.nome} \n Idade = ${pessoa5.idade} \n Hobby = ${pessoa5.hobby}`);
}