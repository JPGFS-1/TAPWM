function funcao1() {
    function calcularValores(a, b, c) {
        const soma = a + b + c;
        const quad1 = a * a;
        const quad2 = b * b;

        return `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quad1} e o quadrado do segundo é: ${quad2}`;
    }

    let entrada = prompt("Digite 3 números (ex: 2 3 4):");
    let numeros = entrada.split(" ").map(n => Number(n.trim()));

    if (numeros.length !== 3 || numeros.some(isNaN)) {
        alert("Entrada inválida!");
        return;
    }

    const resultado = calcularValores.apply(null, numeros);
    alert(resultado);
}


function funcao2() {
    function gerarPalavra(a, b, c, d, e) {
        return a + b + c + d + e;
    }

    let entrada = prompt("Digite 5 letras (ex: A B C D E):");
    let letras = entrada.toUpperCase().split(" ").map(l => l.trim());

    if (letras.length !== 5 || letras.some(l => l.length !== 1)) {
        alert("Entrada inválida! Digite exatamente 5 letras.");
        return;
    }

    let palavras = [];

    function embaralhar(arr) {
        let copia = arr.slice();
        for (let i = copia.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
    }

    while (palavras.length < 10) {
        let novaOrdem = embaralhar(letras);
        let palavra = gerarPalavra.apply(null, novaOrdem);

        if (!palavras.includes(palavra)) {
            palavras.push(palavra);
        }
    }

    alert(palavras.join('\n'));
}