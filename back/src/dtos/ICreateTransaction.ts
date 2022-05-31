import Transaction from '../entities/Transaction';

export type ICreateTransaction = Omit<
  Transaction,
  'id' | 'user' | 'created_at'
>;
