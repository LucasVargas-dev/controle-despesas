import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import LoginService from '../services/LoginService';

export default class LoginController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const { user } = await new LoginService().execute({ //token, 
      email,
      password,
    });

    return response.json({ user: instanceToPlain(user) }); //token 
  } 
}