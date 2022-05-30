import Transaction, { TransactionType } from '../entities/Transaction';
import TransactionRepository from '../repositories/TransactionRepository';
import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';

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
  }: ICreateTransactionDTO): Promise<Transaction> {
    return this.transactionsRepository.create({
        title,
        description,
        amount,
        type,
        user_id
    });
  }
}
