function calcularIMC() {
    let altura = Number(prompt("Altura (ex: 1.70):"));
    let peso = Number(prompt("Peso:"));

    if (!altura || !peso) {
        alert("Valores inválidos");
        return;
    }

    let imc = peso / (altura * altura);
    let msg = "";

    if (imc < 18.5) msg = "Magreza (sem obesidade)";
    else if (imc < 25) msg = "Normal (sem obesidade)";
    else if (imc < 30) msg = "Sobrepeso (obesidade grau 1)";
    else if (imc < 40) msg = "Obesidade (obesidade grau 2)";
    else msg = "Obesidade grave (obesidade grau 3)";

    alert(`IMC: ${imc.toFixed(2)} - ${msg}`);
}