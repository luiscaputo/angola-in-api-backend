import { Request, Response } from "express";
import CreateUserUseCase from "./createUserUseCase";
import { container } from "tsyringe";


export default class CreateUserController {
    async handle(req: Request, res: Response){
        const { name } = req.body;
        const useCase = container.resolve(CreateUserUseCase);
        const user = await useCase.execute(name);
        return res.status(200).json(user);
    }
}