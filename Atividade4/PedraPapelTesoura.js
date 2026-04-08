var teste;
var compteste

escolha = prompt("teste [1]Pedra [2]Papel [3]Tesoura");
compEscolha = Math.random();

if (escolha >= 1 && escolha <= 3)
{
    let teste = parseInt(escolha)
    if (compEscolha <= 0.33)
    {
        alert("O computador escolheu Pedra");
        switch(teste)
        {
            case 1:
                alert("EMPATE!");
                break;
            case 2:
                alert("Vitoria, papel cobre pedra!");
                break;
            case 3:
                alert("Derrota, pedra quebra tesoura!");
                break;
        }
    }
    if (compEscolha > 0.33 && compEscolha <= 0.66)
    {
        alert("O computador escolheu Papel");
        switch(teste)
        {
            case 1:
                alert("Derrota, papel cobre pedra!");
                break;
            case 2:
                alert("EMPATE!");
                break;
            case 3:
                alert("Vitoria, tesoura corta papel!");
                break;
        }
    }
    if (compEscolha > 0.66)
    {
        alert("O computador escolheu tesoura");
        switch(teste)
        {
            case 1:
                alert("Vitoria, pedra quebra tesoura!");
                break;
            case 2:
                alert("Derrota, tesoura corta papel!");
                break;
            case 3:
                alert("Empate!");
                break;
        }
    }
}
else
{
    alert("teste um número válido!");
}