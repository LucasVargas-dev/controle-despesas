import Transaction from '../../entities/Transaction';
import ITransactionsRepository from '../interfaces/ITransactionsRepository';
import { ICreateTransaction } from '../../dtos/ICreateTransaction';

class FakeTransactionsRepository implements ITransactionsRepository {
  private transactions: Transaction[] = [];

  private id = 1;

  public async create(
    transactionData: ICreateTransaction,
  ): Promise<Transaction> {
    const transaction = new Transaction();
    Object.assign(transaction, { id: this.id }, transactionData);

    this.id = this.id + 1;
    this.transactions.push(transaction);

    return transaction;
  }

  public async delete(id: number): Promise<void> {
    const indexToRemove = this.transactions.findIndex(item => item.id === id);

    this.transactions.splice(indexToRemove, 1);
  }

  public async findById(id: number): Promise<Transaction | null> {
    return this.transactions.find(item => item.id === id) || null;
  }

  public async listByUserId(user_id: number): Promise<Transaction[]> {
    return this.transactions.filter(item => item.user_id === user_id);
  }
}

export default FakeTransactionsRepository;
