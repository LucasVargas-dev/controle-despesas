import { Repository } from 'typeorm';

import AppDataSource from '../database/ormconfig';
import { IUpdateUserDTO } from '../dtos/IUpdateUserDTO';
import User from '../entities/User';

export default class UsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(User);
  }

  public async create(userData: Omit<User, 'id'>): Promise<User> {  
    console.log("Opa");
    
    const user = this.ormRepository.create(userData);
    await this.ormRepository.save(user);

    return user;
  }

  public async update({ id, userData }: IUpdateUserDTO): Promise<void> {
    await this.ormRepository.update({ id }, userData);
  }

  public async findById(id: number): Promise<User | null> {
    const user = await this.ormRepository.findOne({
      where: { id },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async findByCpf(cpf: string): Promise<User | null> {
    const user = await this.ormRepository.findOne({
      where: { cpf },
    });

    return user;
  }

  public async listAll(): Promise<User[]> {
    const users = await this.ormRepository.find();

    return users;
  }
}