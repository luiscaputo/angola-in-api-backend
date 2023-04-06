import { Request, Response } from "express";
import { PhoneNumberUseCase } from "./PhoneNumberUseCase";


export class PhoneNumberController {
    async handle(req: Request<{phoneNumber: string}>, res: Response) {
        const { phoneNumber } = req.params;
        const useCase = new PhoneNumberUseCase();
        const result = await useCase.execute({ phoneNumber });

        return res.status(200).json({ success: true, message: 'Phone Validated', data: result });
    }
}