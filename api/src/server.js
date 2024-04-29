// importando o express do modulo do nodemodules
const express = require('express');

// inicializando express para utilização 
const app = express();

// criando uma porta para escutar requisições e solicitações
const port = 3333;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});
