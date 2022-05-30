import { useMutation } from 'react-query';

import { Transaction } from '../../models/Transaction';
import api from '../api';

export const useAddTransaction = () => {
  return useMutation(
    ({
      amount,
      category,
      title,
      type,
    }: Omit<Transaction, 'id' | 'created_at'>) =>
      api
        .post<Transaction>('/transactions/create', {
          amount,
          category,
          title,
          type,
        })
        .then(response => response.data),
    {
      onError: error => window.alert(error.message),
      onSuccess: () => window.alert('Transação adicionada.'),
    },
  );
};
