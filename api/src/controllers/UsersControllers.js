class UsersController {
    create(request, response) {
        const { name, email, password } = request.body;

        // status 201 = criado com sucesso
        response.status(201).json({ name, email, password });
    }
}

module.exports = UsersController;