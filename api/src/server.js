// importação do novo pacote instalado express async errors
require("express-async-errors");

// importando a classe AppError
const AppError = require("./utils/AppError");

const express = require('express');

const routes = require('./routes');

// importando o banco de dados
const database = require("./database/sqlite")


const app = express();
app.use(express.json());

app.use(routes);

database();

// captura de erros, requisições, as respostas e o prosseguir
// só os parâmetros error e response estão em uso, pois next não vai avançar quando tiver o erro
app.use((error, request, response, next) => {
    // tratando os erros cliente e servidor

    // erro do lado do cliente
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error);

    // erro do lado do servidor
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
});


const port = 3333;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});
