import { ChangeEvent, FormEvent, RefObject, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';

import { MainContainer } from '../../components/MainContainer';
//import { TransactionType } from '../../models/Transaction';
import { useAddTransaction } from '../../services/mutations';

const AddTransactionPage = () => {
  const titleInput = useRef(null) as RefObject<HTMLInputElement>;
  const categoryInput = useRef(null) as RefObject<HTMLInputElement>;
  const amountInput = useRef(null) as RefObject<HTMLInputElement>;

  const [transactionType, setTransactionType] = useState(
    TransactionType.ENTRADA,
  );

  const { mutateAsync: addTransaction } = useAddTransaction();
  const navigate = useNavigate();

  const handleChangeTransactionType = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setTransactionType(event.target.value as TransactionType);
  };

  const handleAddTransaction = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const title = titleInput?.current?.value;
    const description = descriptionInput?.current?.value;
    const amount = Number(amountInput?.current?.value);

    if (!title || !description || !amount) {
      return;
    }

    await addTransaction({
      title,
      description,
      amount,
      type: transactionType,
    });

    navigate('/');
  };

  return (
    <MainContainer>
      <Typography variant="h2">Adicionar transação</Typography>
      <Typography variant="subtitle1">
        Adicione uma transação de entrada ou saída
      </Typography>

      <form onSubmit={handleAddTransaction}>
        <TextField
          label="Título"
          sx={{ background: '#fff' }}
          size="small"
          margin="dense"
          inputRef={titleInput}
          required
          fullWidth
        />

        <TextField
          label="Categoria"
          sx={{ background: '#fff' }}
          size="small"
          margin="dense"
          inputRef={descriptionInput}
          required
          fullWidth
        />

        <FormControl>
          <RadioGroup
            row
            value={transactionType}
            onChange={handleChangeTransactionType}
          >
            <FormControlLabel
              value="income"
              control={<Radio />}
              label="Entrada"
            />
            <FormControlLabel
              value="outcome"
              control={<Radio />}
              label="Saída"
            />
          </RadioGroup>
        </FormControl>

        <TextField
          label="Valor"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">R$</InputAdornment>
            ),
          }}
          sx={{ background: '#fff' }}
          size="small"
          margin="dense"
          inputRef={amountInput}
          required
          fullWidth
        />

        <Button sx={{ marginTop: '0.5rem' }} variant="contained" type="submit">
          Adicionar
        </Button>
      </form>
    </MainContainer>
  );
};

export default AddTransactionPage;
