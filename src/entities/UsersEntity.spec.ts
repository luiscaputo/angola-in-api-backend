import UsersEntity from "./UsersEntity";
import { faker } from '@faker-js/faker';


describe('Users', () => {
    it('should be able to create a new user', () => {
        const user = new UsersEntity({
            name: faker.name.findName(),
            createdAt: new Date(),
        });
        expect(user).toBeTruthy();
    }
)
})