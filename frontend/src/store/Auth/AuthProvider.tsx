import React, { useCallback, useMemo, useState } from 'react';

import { User } from '../../models/User';
// import api from '../../services/api';
import { useLogin } from '../../services/mutations';
import { AuthContext, SignInCredentials } from './AuthContext';

type AuthProviderProps = {
  children: React.ReactNode;
};

interface AuthState {
  // token: string;
  user: User;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    // const token = localStorage.getItem('@MoneySolutions:token');
    const user = localStorage.getItem('@ControleDespesas:user');
    
    if (user) { //token && user
      // api.defaults.headers.common.Authorization = `Bearer ${token}`;

      return { user: JSON.parse(user) }; //token, 
    }

    return {} as AuthState;
  });

  const loginMutation = useLogin();

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const { user } = await loginMutation.mutateAsync({ //token, 
        email,
        password,
      });

      // localStorage.setItem('@MoneySolutions:token', token);
      localStorage.setItem('@ControleDespesas:user', JSON.stringify(user));

      // api.defaults.headers.common.Authorization = `Bearer ${token}`;

      setData({ user }); //token,
    },
    [loginMutation],
  );

  const signOut = useCallback(() => {
    // localStorage.removeItem('@MoneySolutions:token');
    localStorage.removeItem('user');

    setData({} as AuthState);
  }, []);

  const value = useMemo(
    () => ({
      user: data.user,
      signIn,
      signOut,
    }),
    [data.user, signIn, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
