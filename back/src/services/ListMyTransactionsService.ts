import Transaction from '../entities/Transaction';
import TransactionRepository from '../repositories/TransactionRepository';

type IRequest = {
  user_id: number;
};

// @injectable()
export default class ListMyTransactionsService {
  private transactionsRepository: TransactionRepository;

  constructor(
    // @inject('TransactionsRepository')
    // private transactionsRepository: TransactionRepository,
  ) {
    this.transactionsRepository = new TransactionRepository();
  }

  public async execute({ user_id }: IRequest): Promise<Transaction[]> {
    return this.transactionsRepository.listByUserId(user_id);
  }
}
