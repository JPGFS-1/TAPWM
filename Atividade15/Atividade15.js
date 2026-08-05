function abrirCurso(){

    let curso = document.getElementById("curso").value;

    if(curso == ""){
        return;
    }

    let confirma = confirm("Deseja abrir a página do curso selecionado?");

    if(!confirma){
        document.getElementById("curso").selectedIndex = 0;
        return;
    }

    let janela = window.open("", "", "width=600,height=300");

    let titulo = "";
    let descricao = "";

    switch(curso){

        case "ads":
            titulo = "Análise e Desenvolvimento de Sistemas";
            descricao = "Curso voltado ao desenvolvimento de softwares, programação, banco de dados e desenvolvimento web.";
            break;

        case "ea":
            titulo = "Eletrônica Automotiva";
            descricao = "Curso focado em sistemas eletrônicos aplicados aos veículos.";
            break;

        case "fm":
            titulo = "Fabricação Mecânica";
            descricao = "Curso voltado aos processos de fabricação industrial e usinagem.";
            break;

        case "gq":
            titulo = "Gestão da Qualidade";
            descricao = "Curso voltado ao controle e melhoria da qualidade nas empresas.";
            break;

        case "log":
            titulo = "Logística";
            descricao = "Curso voltado ao transporte, armazenamento e distribuição de produtos.";
            break;

        case "manufatura":
            titulo = "Manufatura Avançada";
            descricao = "Curso focado em automação industrial e tecnologias modernas de produção.";
            break;

        case "polimeros":
            titulo = "Polímeros";
            descricao = "Curso voltado aos materiais poliméricos, plásticos e borrachas.";
            break;
    }

    janela.document.write(`
        <html>
        <head>
            <title>${titulo}</title>
            <style>
                body{
                    font-family:Arial;
                    padding:20px;
                    text-align:center;
                }
            </style>
        </head>
        <body>
            <h2>${titulo}</h2>
            <p>${descricao}</p>
        </body>
        </html>
    `);

    janela.document.close();
}