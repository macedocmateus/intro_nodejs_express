// * Para padronizar o tipo de mensagem em relação a uma exceção
class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;