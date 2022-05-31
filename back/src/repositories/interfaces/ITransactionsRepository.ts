import { ICreateTransaction } from '../../dtos/ICreateTransaction';
import Transaction from '../../entities/Transaction';

export default interface ITransactionsRepository {
  create(transactionData: ICreateTransaction): Promise<Transaction>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Transaction | null>;
  listByUserId(user_id: number): Promise<Transaction[]>;
}
