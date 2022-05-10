import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import FindUserService from '../services/FindUserService';
import ListAllUsersService from '../services/ListAllUsersService';
import UpdateUserService from '../services/UpdateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {  
    const { name, email, cpf, password } = request.body;

    const user = await new CreateUserService().execute({
      name,
      email,
      cpf,
      password,
    });

    return response.json(instanceToPlain(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, password } = request.body;
    const { id } = request.params;

    const idAsNumber = Number(id);

    await new UpdateUserService().execute({
      email,
      name,
      cpf,
      password,
      id: idAsNumber,
    });

    return response.status(204).json();
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const idAsNumber = Number(id);

    const user = await new FindUserService().execute({
      id: idAsNumber,
    });

    return response.json(instanceToPlain(user));
  }

  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const users = await new ListAllUsersService().execute();

    return response.json(instanceToPlain(users));
  }
}