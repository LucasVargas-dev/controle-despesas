import { Repository } from 'typeorm';

import AppDataSource from '../database/ormconfig';
import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';
// import ITransactionsRepository from '@modules/transactions/repositories/ITransactionsRepository';
import Transaction from '../entities/Transaction';

export default class TransactionsRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Transaction);
  }

  public async create(transactionData: ICreateTransactionDTO): Promise<Transaction> {
    const transaction = this.ormRepository.create(transactionData);
    await this.ormRepository.save(transaction);

    return transaction;
  }

  public async delete(id: number): Promise<void> {
    this.ormRepository.delete({ id });
  }

  public async findById(id: number): Promise<Transaction | null> {
    return this.ormRepository.findOne({
      where: {
        id,
      },
    });
  }

  public async listByUserId(user_id: number): Promise<Transaction[]> {
    return this.ormRepository.find({
      where: {
        user_id,
      },
    });
  }
}
