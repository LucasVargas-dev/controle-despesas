import User from '../../entities/User';
import IUserRepository from '../interfaces/IUsersRepository';

class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  private id = 1;

  public async create(
      userData: Omit<User, 'id'>
  ): Promise<User> {
    const user = new User();
    Object.assign(user, { id: this.id }, userData);

    this.id = this.id + 1;
    this.users.push(user);

    return user;
  }

  public async delete(id: number): Promise<void> {
    const indexToRemove = this.users.findIndex(item => item.id === id);

    this.users.splice(indexToRemove, 1);
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.users.find(item => item.email === email) || null;
  }

  public async findByCpf(cpf: string): Promise<User | null> {
    return this.users.find(item => item.cpf === cpf) || null;
  }
}

export default FakeUserRepository;
