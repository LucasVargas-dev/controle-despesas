import AppError from '../errors/AppError';
import User from '../entities/User';
import BCryptHashProvider from '../helpers/BCryptHashProvider';
import UsersRepository from '../repositories/UsersRepository';

export default class UpdateUserService {
  private usersRepository: UsersRepository;

  private hashProvider: BCryptHashProvider;

  constructor() {
    this.usersRepository = new UsersRepository();
    this.hashProvider = new BCryptHashProvider();
  }

  public async execute({
    email,
    name,
    id,
    cpf,
    password,
  }: User): Promise<void> {
    const userExists = await this.usersRepository.findById(id);

    if (!userExists) {
      throw new AppError('Usuário não encontrado.');
    }

    let hashedPassword = password;

    if (password) {
      hashedPassword = await this.hashProvider.generateHash(password);
    }

    await this.usersRepository.update({
      id,
      userData: {
        email,
        name,
        cpf,
        password: hashedPassword,
      },
    });
  }
}