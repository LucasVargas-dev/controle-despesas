import { useMutation } from 'react-query';

import { Transaction } from '../../models/Transaction';
import { useAuth } from '../../store/Auth';
import api from '../api';

export const useAddTransaction = () => {
  const { user } = useAuth();
  const user_id = user.id;
  
  return useMutation(
    ({
      amount,
      description,
      title,
      type,
    }: Omit<Transaction, 'id' | 'created_at'>) =>
      api
        .post<Transaction>('/create-transaction', {
          amount,
          description,
          title,
          type,
          user_id,
        })
        .then(response => response.data),
    {
      onError: error => window.alert(error.message),
      onSuccess: () => window.alert('Transação adicionada.'),
    },
  );
};
