import AppError from '../errors/AppError';
import TransactionRepository from '../repositories/TransactionRepository';

// @injectable()
export default class DeleteTransactionService {
    private deleteTransactionRepository: TransactionRepository;

  constructor(
    // @inject('TransactionsRepository')
    //private transactionsRepository: ITransactionsRepository,
  ) {
    this.deleteTransactionRepository = new TransactionRepository();
  }

  public async execute(id: string): Promise<void> {
    const idAsNumber = Number(id);

    if (!Number.isInteger(idAsNumber)) {
      throw new AppError('Inserção de valor não permitida');
    }

    const foundTransaction = await this.deleteTransactionRepository.findById(
      idAsNumber,
    );

    if (!foundTransaction) {
      throw new AppError('Transação não encontrada.');
    }

    await this.deleteTransactionRepository.delete(idAsNumber);
  }
}
