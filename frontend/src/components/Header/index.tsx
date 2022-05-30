import { Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../store/Auth';

import * as S from './styles';

export const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  return (
    <S.Header>
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <img
            src="src/assets/images/dinheiro.png"
            alt="Money Solutions logo"
            width="48px"
            height="48px"
          />
          <Typography variant="h1" fontSize="1.5rem">
            Success Control of Expenses
          </Typography>
        </Stack>

        {user && (
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </Stack>
        )}
      </Container>
    </S.Header>
  );
};
