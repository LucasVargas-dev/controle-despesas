import React, { useCallback, useMemo, useState } from 'react';

import { User } from '../../models/User';
import { useLogin } from '../../services/mutations';
import { AuthContext, SignInCredentials } from './AuthContext';

type AuthProviderProps = {
  children: React.ReactNode;
};

interface AuthState {
  user: User;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@ControleDespesas:user');
    
    if (user) {

      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const loginMutation = useLogin();

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      const { user } = await loginMutation.mutateAsync({ 
        email,
        password,
      });

      localStorage.setItem('@ControleDespesas:user', JSON.stringify(user));

      setData({ user }); 
    },
    [loginMutation],
  );

  const signOut = useCallback(() => {
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
