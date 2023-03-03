import { IUsers } from "~/types";
import { IUsersRepository } from "../IUserRepository";

type User = {
    id: string;
    name: string;
    createdAt: Date;
}

export default class IUsersRepositoryImpl implements IUsersRepository {
    public users: User[] = [];

    async create(user: IUsers): Promise<IUsers> {
        this.users.push(user);
        return user;
    }
    async index(): Promise<IUsers[]> {
        return this.users.map((user) => ({
            ...user,
        }));
    }
    async show({ id }: { id: string; }): Promise<IUsers | null> {
        const user = this.users.find((item) => item.id === id);
        if (!user) {
            return null;
        }
        return user;
    }
    update(user: IUsers): Promise<IUsers> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<any | null> {
        const user = this.users.find((item) => item.id === id);
        if (!user) {
            return null;
        }
        return this.users.shift();
    }
}