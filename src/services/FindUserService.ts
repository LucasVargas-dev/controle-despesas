import User from '../entities/User';
import UsersRepository from '../repositories/UsersRepository';

export default class FindUserService {
  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
  }

  public async execute({ id }: Pick<User, 'id'>): Promise<User | null> {
    const user = await this.usersRepository.findById(id);

    return user;
  }
}