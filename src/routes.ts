import { Router } from "express";
import UsersController from "./controllers/UsersController";

const routes = Router();

const usersController = new UsersController();

routes.post('/create-user', usersController.create);
routes.put('/update-user/:id', usersController.update);
routes.get('/list-all-user', usersController.listAll);
routes.get('/id-user/:id', usersController.findById);

export { routes };