function iniciarPesquisa() {

    let totalPessoas = 45;

    let somaIdade = 0;
    let maiorIdade = 0;
    let menorIdade = Infinity;

    let pessimo = 0;
    let otimoBom = 0;

    let masculino = 0;
    let feminino = 0;
    let outros = 0;

    for (let i = 1; i <= totalPessoas; i++) {

        let dados = prompt(
            "Pessoa " + i + "\nDigite: idade, sexo (masculino, feminino, outros) \ne opinião (4=ótimo, 3=bom, 2=regular, 1=péssimo)\n\nEx: 18 masculino 4 "
        );

        let partes = dados.split(" ");

        let idade = parseInt(partes[0]);
        let sexo = partes[1].trim().toLowerCase();
        let opiniao = parseInt(partes[2]);
        
        somaIdade += idade;
        
        if (idade > maiorIdade) maiorIdade = idade;
        if (idade < menorIdade) menorIdade = idade;
        
        if (opiniao === 1) pessimo++;
        if (opiniao === 3 || opiniao === 4) otimoBom++;
        
        if (sexo === "masculino") {
            masculino++;
        } else if (sexo === "feminino") {
            feminino++;
        } else {
            outros++;
        }
    }

    let mediaIdade = somaIdade / totalPessoas;
    let porcentagemOtimoBom = (otimoBom / totalPessoas) * 100;

    let resultado = `
Média da idade das pessoas: ${mediaIdade.toFixed(0)}
Idade da pessoa mais velha: ${maiorIdade}
Idade da pessoa mais nova: ${menorIdade}

Quantidade de péssimo: ${pessimo}
Porcentagem de ótimo/bom: ${porcentagemOtimoBom.toFixed(2)}%

Masculino: ${masculino}
Feminino: ${feminino}
Outros: ${outros}    
    `;

    document.getElementById("resultado").innerText = resultado;
}