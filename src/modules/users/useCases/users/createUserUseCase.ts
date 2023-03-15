import UsersEntity from '~/entities/UsersEntity';
import { injectable, inject } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUserRepository';

@injectable()
export default class CreateUserUseCase {
  constructor(
    @inject('IUsersRepositoryImpl')
    private repository: IUsersRepository
  ) {}
  async execute({ name }: { name: string }) {
    const raw = new UsersEntity({ name });
    await this.repository.create(raw);
    return raw;
  }
}
