const { Router } = require("express");

const UsersController = require("../controllers/UsersControllers");

const usersRoutes = Router();

// criando um middleware para interceptar as requisições e respostas
function myMiddleware(request, response, next) {
    console.log("Você passou pelo Middleware");
    // acessando também o conteúdo
    console.log(request.body);

    // middleware fazendo a verificação de autenticação e dando uma resposta
    if (!request.body.isAdmin) {
        return response.json({ message: "Usuário não autorizado" });
    }

    // passando do middleware para a função de criar
    next();
}

const usersController = new UsersController();

/* aplicando middle para todas as rotas
 usersRoutes.use(myMiddleware); 
 */

/* aplicando o middleware somente para uma rota especifica a de criação
usersRoutes.post("/", myMiddleware, usersController.create);
*/

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

// exportando o arquivo para utilização
module.exports = usersRoutes;