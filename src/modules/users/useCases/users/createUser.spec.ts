import UsersEntity from '~/entities/UsersEntity';
import { container } from 'tsyringe';

import CreateUserUseCase from './createUserUseCase';

describe('Create a New User', () => {
  it('should be able to create a new user', async () => {
    const useCase = container.resolve(CreateUserUseCase);
    const newUser = new UsersEntity({ name: 'Test User' });
    const result = await useCase.execute(newUser);
    expect(newUser.name).toBe(result.name);
    expect(result.id).toBeTruthy();
  });
});
