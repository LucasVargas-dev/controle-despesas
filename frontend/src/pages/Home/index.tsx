import { Button, Card, IconButton, Stack, Typography } from '@mui/material';
import { DeleteOutline as DeleteOutlineIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { MainContainer } from '../../components/MainContainer';
import { useFetchMyTransactions } from '../../services/queries';
import { useDeleteTransaction } from '../../services/mutations';
import { TransactionType } from '../../models/Transaction';

const HomePage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useFetchMyTransactions();
  const { mutateAsync: deleteTransaction } = useDeleteTransaction();

  const handleAddTransaction = () => {
    navigate('/add-transaction');
  };

  const handleDeleteTransaction = async (id: number) => {
    await deleteTransaction(id);
  };

  return (
    <MainContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack>
          <Typography variant="h2">Minhas despesas</Typography>
          <Typography sx={{ marginBottom: '1rem' }} variant="subtitle1">
            Estas são as suas despesas cadastradas
          </Typography>
        </Stack>

        <Button
          variant="contained"
          onClick={handleAddTransaction}
          sx={{ height: '2.5rem' }}
        >
          Adicionar
        </Button>
      </Stack>

      {isLoading ? (
        <Typography>Carregando...</Typography>
      ) : (
        data?.map(transaction => (
          <Card
            key={transaction.id}
            sx={{ padding: '0.5rem', marginBottom: '0.5rem' }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Stack>
                <Typography variant="h3" 
                            color= {transaction.type == TransactionType.ENTRADA 
                              ? 'green'
                              : 'red'}>
                                {transaction.title}</Typography>
                <Typography variant="subtitle1">
                  {transaction.type.toUpperCase()}: {transaction.description} - {transaction.amount}
                </Typography>
              </Stack>

              <IconButton
                onClick={() => handleDeleteTransaction(transaction.id)}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </Stack>
          </Card>
        ))
      )}
      {
        <Card sx={{ padding: '0.5rem', marginBottom: '0.5rem' }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography variant="h2"> 
                  Total: 
              </Typography> 
            </Stack>
            <Typography variant="h2"> 
                {}
            </Typography> 
          </Stack>
        </Card>
      }
    </MainContainer>
  );
};

export default HomePage;
