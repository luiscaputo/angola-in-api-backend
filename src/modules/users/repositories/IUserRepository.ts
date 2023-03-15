import { IUsers } from '~/types';

export abstract class IUsersRepository {
  abstract create(user: IUsers): Promise<IUsers>;
  abstract index(): Promise<IUsers[]>;
  abstract show({ id }: { id: string }): Promise<IUsers | null>;
  abstract update(user: IUsers): Promise<IUsers>;
  abstract delete(id: string): Promise<void>;
}
