import { useMutation } from 'react-query';

import api from '../api';

export const useDeleteTransaction = () => {
  return useMutation(
    (id: number) =>
      api.delete(`/delete-transaction/${id}`).then(response => response.data),
    {
      onError: error => window.alert(error.message),
      onSuccess: () => window.alert('Transação excluída!'),
    },
  );
};
