import AppError from '../errors/AppError';
import User from '../entities/User';
import BCryptHashProvider from '../helpers/BCryptHashProvider';
import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
}

export default class LoginService {
  private usersRepository: UsersRepository;

  private hashProvider: BCryptHashProvider;

  constructor() {
    this.hashProvider = new BCryptHashProvider();
    this.usersRepository = new UsersRepository();
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('E-mail e senha não conferem');
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatched) {
      throw new AppError('E-mail e senha não conferem');
    }

    return {
      user
    };
  }
}
