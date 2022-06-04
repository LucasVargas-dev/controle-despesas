import { TransactionType } from '../entities/Transaction';
import FakeTransactionsRepository from '../repositories/fake/FakeTransactionRepository';
import ListMyTransactionsService from './ListMyTransactionsService';

let fakeTransactionsRepository: FakeTransactionsRepository;
let listMyTransactionsService: ListMyTransactionsService;

describe('List my transactions', () => {
  beforeEach(() => {
    fakeTransactionsRepository = new FakeTransactionsRepository();
    listMyTransactionsService = new ListMyTransactionsService(
      fakeTransactionsRepository,
    );
  });

  it('should list only user transactions', async () => {
    const userTransaction1 = await fakeTransactionsRepository.create({
      title: 'Teste Automatizado',
      description: 'Teste automatizado focado na criação de uma transaction',
      amount: 250,
      type: TransactionType.SAIDA,
      user_id: 1,
    });

    const userTransaction2 = await fakeTransactionsRepository.create({
      ...userTransaction1,
      title: 'TESTANDO N°1',
    });

    await fakeTransactionsRepository.create({
      ...userTransaction1,
      title: 'TESTANDO N°2',
      user_id: 2,
    });

    const userTransactions = await listMyTransactionsService.execute({
      user_id: 1,
    });

    expect(userTransactions).toStrictEqual([
      userTransaction1,
      userTransaction2,
    ]);
  });
});