import FakeUserRepository from '../repositories/fake/FakeUserRepository';
import CreateUserService from './CreateUserService';

let createUser: CreateUserService;
let usersRepository: FakeUserRepository;

describe('CreateUser', () => {
  beforeEach(() => {
    usersRepository = new FakeUserRepository();

    createUser = new CreateUserService(usersRepository);
  });

  it('should be able to create user', async () => {
    const user = await createUser.execute({
      name: 'Lucas',
      email: 'lucas.vargas@universo.univates.br1',
      cpf: '046.688.490.73',
      password: '123'
    });

    expect(user).toHaveProperty('id');
  });
});
