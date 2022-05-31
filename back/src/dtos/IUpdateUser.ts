import User from '../entities/User';

export interface IUpdateUser {
  id: number;
  userData: Omit<User, 'id'>;
}
