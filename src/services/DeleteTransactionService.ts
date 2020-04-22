import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import TransactionsRespository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRespository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not found.');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
