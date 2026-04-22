function iniciarVerificacao() {

    let a = Number(prompt("Digite o valor de A"));
    let b = Number(prompt("Digite o valor de B"));
    let c = Number(prompt("Digite o valor de C"));

    if (a + b > c && b + c > a && c + a > b) {

        if (a === b && b === c) {
            alert("Este é um triângulo EQUILÁTERO!");
        } 
        else if (a === b || b === c || a === c) {
            alert("Este é um triângulo ISÓSCELES!");
        } 
        else {
            alert("Este é um triângulo ESCALENO!");
        }

    } else {
        alert("Estes dados não formam um triângulo!");
    }
}