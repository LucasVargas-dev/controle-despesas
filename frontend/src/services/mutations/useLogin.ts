import { useMutation } from 'react-query';

import { SignInCredentials } from '../../store/Auth/AuthContext';
import { User } from '../../models/User';
import api from '../api';

type SessionValues = {
  // token: string;
  user: User;
};

export const useLogin = () => {
  return useMutation(({ email, password }: SignInCredentials) =>
    api
      .post<SessionValues>('/logging', { email, password })
      .then(response => response.data),
  );
};
