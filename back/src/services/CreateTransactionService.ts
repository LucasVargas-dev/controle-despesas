import Transaction from '../entities/Transaction';
import ITransactionRepository from '../repositories/interfaces/ITransactionsRepository';
import { ICreateTransaction } from '../dtos/ICreateTransaction';

export default class CreateTransactionService {
  // private transactionsRepository: TransactionRepository;

  constructor(private transactionsRepository: ITransactionRepository) {}

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
