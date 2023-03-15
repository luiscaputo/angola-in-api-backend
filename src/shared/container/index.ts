import IUsersRepositoryImpl from '~/modules/users/repositories/implementations/IUsersRepositoryImpl';
import { IUsersRepository } from '~/modules/users/repositories/IUserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUsersRepository>(
  'IUsersRepositoryImpl',
  IUsersRepositoryImpl
);
