import FakeTransactionRepository from '../repositories/fake/FakeTransactionRepository';
import CreateTransactionService from './CreateTransactionService';
import { TransactionType } from '../entities/Transaction';

let createTransaction: CreateTransactionService;
let transactionsRepository: FakeTransactionRepository;

describe('CreateTransaction', () => {
  beforeEach(() => {
    transactionsRepository = new FakeTransactionRepository();

    createTransaction = new CreateTransactionService(transactionsRepository);
  });

  it('should be able to create transaction', async () => {
    const transaction = await createTransaction.execute({
      title: 'Teste Automatizado',
      description: 'Teste automatizado focado na criação de uma transaction',
      amount: 250,
      type: TransactionType.SAIDA,
      user_id: 1,
    });

    expect(transaction).toHaveProperty('id');
  });
});
