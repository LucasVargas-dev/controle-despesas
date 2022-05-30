import Transaction from '../entities/Transaction';

export type ICreateTransactionDTO = Omit<
  Transaction,
  'id' | 'user' | 'created_at' | 'category'
>;
