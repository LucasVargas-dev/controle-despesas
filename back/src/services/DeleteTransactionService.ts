import AppError from '../errors/AppError';
import ITransactionsRepository from '../repositories/interfaces/ITransactionsRepository';
// import TransactionRepository from '../repositories/TransactionRepository';

// @injectable()
export default class DeleteTransactionService {
    // private deleteTransactionRepository: ITransactionsRepository;

  constructor(
    // @inject('TransactionsRepository')
    private deleteTransactionRepository: ITransactionsRepository,
  ) {
    // this.deleteTransactionRepository = new TransactionRepository();
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
