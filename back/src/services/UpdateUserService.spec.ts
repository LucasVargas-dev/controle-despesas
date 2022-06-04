import FakeUserRepository from '../repositories/fake/FakeUserRepository';
import UpdateUserService from './UpdateUserService';
import IUpdateUser from '../dtos/IUpdateUser';

let updateUser: UpdateUserService;
let usersRepository: FakeUserRepository;

describe('UpdateUser', () => {
  beforeEach(() => {
    usersRepository = new FakeUserRepository();

    updateUser = new UpdateUserService(usersRepository);
  });

  it('should be able to update user', async () => {
    const user = await updateUser.execute({
        IUpdateUser
    });

    expect(user).toHaveProperty('id');
  });
});
