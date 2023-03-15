import { Request, Response } from 'express';

import IdentificationUseCase from './IdentificationUseCase';

export default class IdentificationController {
  async handle(req: Request<{ bi: string }>, res: Response) {
    const { bi } = req.params;
    const useCase = new IdentificationUseCase();

    const result = await useCase.execute({
      identificationNumver: bi,
    });

    return res.status(200).json({
      success: true,
      message: 'Personal Identification',
      data: result,
    });
  }
}
