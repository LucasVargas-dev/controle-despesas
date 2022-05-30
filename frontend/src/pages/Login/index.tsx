import { FormEvent, RefObject, useRef } from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

import { useAuth } from '../../store/Auth';

import { InputEmail } from '../../components/InputEmail';
import { InputPassword } from '../../components/InputPassword';
import { AuthContainer } from '../../components/AuthContainer';

const LoginPage = () => {
  const emailInput = useRef(null) as RefObject<HTMLInputElement>;
  const passwordInput = useRef(null) as RefObject<HTMLInputElement>;

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = emailInput?.current?.value;
    const password = passwordInput?.current?.value;

    if (!email || !password) {
      return;
    }

    await signIn({ email, password });
    navigate('/home');
  };

  return (
    <AuthContainer>
      <S.Form onSubmit={handleLogin}>
        <Typography variant="h1" sx={{ marginBottom: '2rem' }}>
          Fazer login
        </Typography>

        <InputEmail
          inputRef={emailInput}
          size="medium"
          margin="dense"
          required
        />

        <InputPassword
          size="medium"
          margin="dense"
          inputRef={passwordInput}
          required
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ marginTop: '1rem' }}
        >
          Entrar
        </Button>
      </S.Form>
    </AuthContainer>
  );
};

export default LoginPage;
