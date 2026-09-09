let app = require('./app/config/server');

let rotaHome = require('./app/routes/home');
rotaHome(app);

let rotaContato = require('./app/routes/contato');
rotaContato(app);

let rotaProgramacao = require('./app/routes/programacao');
rotaProgramacao(app);

let rotaSobre = require('./app/routes/sobre');
rotaSobre(app);

let rotaInscricao = require('./app/routes/inscricao');
rotaInscricao(app);

app.listen(3000, function(){
    console.log("servidor iniciado");
});