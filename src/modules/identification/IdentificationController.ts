import { Request, Response } from "express";
import IdentificationUseCase from "./IdentificationUseCase";


export default class IdentificationController {
    async handle(req: Request<{ identificationNumber: string}>, res: Response){
        const { identificationNumber } = req.params;
        const useCase = new IdentificationUseCase();
        const result = await useCase.execute({identificationNumver: identificationNumber});
        return res.status(200).json(result);
    }
}