import { Request, Response } from 'express';

import MarketsUseCase from './MarketsUseCase';

export default class MarketsController {
  async handle(_: Request, res: Response) {
    const useCase = new MarketsUseCase();
    const result = await useCase.execute();

    return res
      .status(200)
      .json({ success: true, message: 'Angolan  SuperMarkets', data: result });
  }
}
