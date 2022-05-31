import User from '../../entities/User';

export default interface IUsersRepository {
  create(userData: User): Promise<User>;
  delete(id: number): Promise<void>;
  findByEmail(id: string): Promise<User>;
  findByCpf(id: string): Promise<User>;
}
