function funcao1() {

    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));

    let resultado;

    if (n1 < n2) { 
        if (n2 < n3) { alert(`O número ${n3} é o maior`); } 
        else { alert(`O número ${n2} é o maior`); } 
    }
    else if (n1 > n2) { alert(`O número ${n1} é o maior`); }

    else if (n1 === n2 && n2 === n3 ) { alert("Todos os número são iguais"); }
}

function funcao2() {
    let n1 = Number(prompt("Digite o primeiro número:"));
    let n2 = Number(prompt("Digite o segundo número:"));
    let n3 = Number(prompt("Digite o terceiro número:"));

    if (n1 === n2 && n2 === n3) {
        alert("Todos os números são iguais");
    } else {
        let numeros = [n1, n2, n3];
        numeros.sort((a, b) => a - b);

        alert(`A ordem crescente é ${numeros[0]}, ${numeros[1]}, ${numeros[2]}`);
    }
}

function funcao3() {
    let frase = prompt("Digite uma frase, eu direi se ela é um polídromo ou não")
    
    let fraseLimpa = frase.toUpperCase().replace(/\s+/g, '');

    let fraseRevert = fraseLimpa.split('').reverse().join('');

    alert(fraseRevert);

    if (fraseLimpa === fraseRevert) {
        alert("É um palíndromo!");
    } else {
        alert("Não é um palíndromo.");
    }
}

function funcao4() {
    let palavra1 = prompt("Digite a primeira palavra:");
    let palavra2 = prompt("Digite a segunda palavra:");

    if (!palavra1 || !palavra2) {
        alert("Erro");
        return;
    }

    palavra1 = palavra1.toLowerCase();
    palavra2 = palavra2.toLowerCase();

    if (palavra1.includes(palavra2)) {
        alert("É um subconjunto");
    } else {
        alert("Não é um subconjunto");
    }
}

function funcao5() {
    let entrada = prompt("Digite uma data (Ex: DD/MM/YYYY):");

    if (!entrada) {
        alert("Data inválida");
        return;
    }

    let partes = entrada.split("/");

    if (partes.length !== 3) {
        alert("Formato inválido");
        return;
    }

    let dia = Number(partes[0]);
    let mes = Number(partes[1]) - 1;
    let ano = Number(partes[2]);

    let data = new Date(ano, mes, dia);

    let diasSemana = [
        "Domingo", "Segunda-feira", "Terça-feira",
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    let diaSemana = data.getDay();

    alert(`O dia da semana é: ${diasSemana[diaSemana]}`);
}