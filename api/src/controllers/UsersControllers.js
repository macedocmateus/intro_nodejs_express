// importando a função AppError 
const AppError = require("../utils/AppError");

class UsersController {
    create(request, response) {
        const { name, email, password } = request.body;

        // verificar se o usuário não digitou o nome
        if (!name) {
            throw new AppError("O nome é obrigatório");
        }

        // status 201 = criado com sucesso
        response.status(201).json({ name, email, password });
    }
}

module.exports = UsersController;