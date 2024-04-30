// importando o express do modulo do nodemodules
const express = require('express');

// inicializando express para utilização 
const app = express();

// mudando o padrão de recebimento dessas informações para json
app.use(express.json());

// post é usado para criar cadastrar algo (pessoas, produtos e etc) utilizando o corpo da requisição
app.post("/users", (request, response) => {
    // pegando as informações do post diretamente do postman
    const { name, email, password } = request.body;

    /* devolvendo as informações usando send
     response.send(`Usuário: ${name}. - E-mail: ${email}. E a senha é: ${password} `); 
     */

    // devolvendo as informações usando json no formato objeto
    response.json({ name, email, password });
});

// criando uma porta para escutar requisições e solicitações
const port = 3333;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});
