import Transaction from '../entities/Transaction';
import TransactionRepository from '../repositories/TransactionRepository';
import { ICreateTransaction } from '../dtos/ICreateTransaction';

export default class CreateTransactionService {
  private transactionsRepository: TransactionRepository;

  constructor() {
      this.transactionsRepository = new TransactionRepository();
    }

  public async execute({
    title,
    description,
    amount,
    type,
    user_id,
  }: ICreateTransaction): Promise<Transaction> {
    return this.transactionsRepository.create({
        title,
        description,
        amount,
        type,
        user_id
    });
  }
}
