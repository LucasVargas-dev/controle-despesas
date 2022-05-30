import { Router } from "express";
import UsersController from "./controllers/UsersController";
import LoginController from "./controllers/LoginController";
import TransactionsController from "./controllers/TransactionsController";

const routes = Router();

const usersController = new UsersController();
const loginController = new LoginController();
const transactionsController = new TransactionsController();

routes.post('/create-user', usersController.create);
routes.put('/update-user/:id', usersController.update);
routes.get('/list-all-user', usersController.listAll);
routes.get('/id-user/:id', usersController.findById); 

routes.post('/logging', loginController.create); 

routes.post('/create-transaction', transactionsController.create);
routes.delete('/delete-transaction/:id', transactionsController.delete);
routes.get('/list-my-transactions/:user_id', transactionsController.listMyTransactions);

export { routes };