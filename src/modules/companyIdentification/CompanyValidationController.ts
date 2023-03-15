import { Request, Response } from 'express';

import { CompanyValidationUseCase } from './CompanyValidationUseCase';

export default class CompanyValidationController {
  async handle(req: Request<{ nif: number }>, res: Response) {
    const { nif } = req.params;
    const useCase = new CompanyValidationUseCase();

    const result = await useCase.execute({ nif });

    return res
      .status(200)
      .json({ success: true, message: 'Company Informations', data: result });
  }
}
