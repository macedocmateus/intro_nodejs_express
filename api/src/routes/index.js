const { Router } = require('express');

const usersRouter = require("./users.routes.js");

const routes = Router();

routes.use("/users", usersRouter);

// exportando o const routes acima
module.exports = routes