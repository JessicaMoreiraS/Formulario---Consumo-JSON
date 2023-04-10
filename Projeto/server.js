//importar o módulo express
const express = require('express');

//Criar a instancia do express
const app = express();

//Definindo a porta do servidor
const port = 3000;

//funcao de uma requisicao feita pelo servidor
app.use(express.static('public'));

//Definir a rota principal e nviando o arquivo index.html para o localholst3000
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html')
})

//Exibir uma mensagem no console para verificar se o servidor esta funcionando
console.log(`A porta que esta conectada é http://localhost:${port}`);

//Iniciando o servidor na porta definida
app.listen(port);