import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ListMyTransactionsService from '../services/ListMyTransactionsService';

export default class TransactionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description, amount, type, user_id } = request.body;

    const transaction = await new CreateTransactionService().execute({
      amount,
      description,
      title,
      type,
      user_id: Number(user_id),
    });

    return response.json(transaction);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await new DeleteTransactionService().execute(id);

    return response.status(204).json();
  }

  public async listMyTransactions(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;

    const userIdAsNumber = Number(user_id);

    const transactions = await new ListMyTransactionsService().execute({
      user_id: userIdAsNumber,
    });

    return response.json(transactions);
  }
}
