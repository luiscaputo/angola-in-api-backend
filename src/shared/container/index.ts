import { container } from 'tsyringe';
import { IUsersRepository } from '~/modules/users/repositories/IUserRepository';
import IUsersRepositoryImpl from '~/modules/users/repositories/implementations/IUsersRepositoryImpl';

container.registerSingleton<IUsersRepository>(
    'IUsersRepositoryImpl',
    IUsersRepositoryImpl
  );