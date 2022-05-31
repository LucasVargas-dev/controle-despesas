import AppError from '../errors/AppError';
import { TransactionType } from '../entities/Transaction';
import FakeTransactionRepository from '../repositories/fake/FakeTransactionRepository';
import DeleteTransactionService from './DeleteTransactionService';

let fakeTransactionsRepository: FakeTransactionRepository;
let deleteTransaction: DeleteTransactionService;

describe('Delete transaction', () => {
  beforeEach(() => {
    fakeTransactionsRepository = new FakeTransactionRepository();

    deleteTransaction = new DeleteTransactionService(
      fakeTransactionsRepository,
    );
  });

  it('should be able to delete transaction with success', async () => {
    const transaction = await fakeTransactionsRepository.create({
      title: 'Teste Automatizado',
      description: 'Teste automatizado focado na criação de uma transaction',
      amount: 250,
      type: TransactionType.SAIDA,
      user_id: 1,
    });

    deleteTransaction.execute(String(transaction.id));
  });

  it('should not be able to delete if ID is not an integer', () => {
    expect(deleteTransaction.execute('not-integer')).rejects.toBeInstanceOf(
      AppError,
    );
  });

  it('should not be able to delete if not found any transaction with passed ID', () => {
    expect(deleteTransaction.execute('1')).rejects.toBeInstanceOf(AppError);
  });
});
