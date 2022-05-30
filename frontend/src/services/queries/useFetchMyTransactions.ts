import { useQuery } from 'react-query';

import { Transaction } from '../../models/Transaction';
import { useAuth } from '../../store/Auth';
import api from '../api';

export const useFetchMyTransactions = () => {
  const { user } = useAuth();
  const user_id = user.id;
  
  return useQuery('myTransactions', () =>
    api.get<Transaction[]>(`/list-my-transactions/${user_id}`).then(response => response.data),
  );
};
