const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    const { name, email, password } = request.body;

    response.json({ name, email, password });
});

// exportando o arquivo para utilização
module.exports = usersRoutes;