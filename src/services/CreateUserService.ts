import AppError from '../errors/AppError';
import User from '../entities/User';
import UsersRepository from '../repositories/UsersRepository';
import BCryptHashProvider from '../helpers/BCryptHashProvider';

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

export default class CreateUserService {
  private usersRepository: UsersRepository;

  private hashProvider: BCryptHashProvider;

  constructor() {
    this.usersRepository = new UsersRepository();
    this.hashProvider = new BCryptHashProvider();
  }

  public async execute({
    name,
    email,
    cpf,
    password,
  }: IRequest): Promise<Omit<User, 'password'>> {
    const userAlreadyExistsWithEmail = await this.usersRepository.findByEmail(
      email,
    );

    if (userAlreadyExistsWithEmail) {
      throw new AppError('O e-mail informado já se encontra em uso.');
    }

    const userAlreadyExistsWithCpf = await this.usersRepository.findByCpf(cpf);

    if (userAlreadyExistsWithCpf) {
      throw new AppError('O CPF informado já se encontra em uso.');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      cpf,
      password: hashedPassword,
    });

    return user;
  }
}