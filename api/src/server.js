// importando o express do modulo do nodemodules
const express = require('express');

// inicializando express para utilização 
const app = express();

// requisição de leitura com get 
app.get("/message/:id/:user", (request, response) => {
    const { id, user } = request.params; // desestruturando o request.params.id e request.params.user

    response.send(`
    id da mensagem: ${id}, 
    para o usuário: ${user}
    `);
});

// criando uma porta para escutar requisições e solicitações
const port = 3333;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});
