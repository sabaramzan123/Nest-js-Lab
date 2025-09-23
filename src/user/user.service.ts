import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
    private users: User[] = [{id: 1, name: "Saba", email:"saba@gmail.com"}];

    //GET -get all users
    getUsers() : User[]{
        return this.users;
    }

    // GET - Retrieve user by ID
    getUser(id: number): User | { message: string } {
        return this.users.find((user) => user.id === id) || { message: 'User not found' };
    }

    //POST create a new user
    createUser(user: {name: string; email: string}): User{
        const newUser: User = {id: this.users.length + 1, ...user};
        this.users.push(newUser);
        return newUser;
    }

    // PUT - Replace a user
    updateUser(id: number, userDto: { name: string; email: string }): User | { message: string } {
        const index = this.users.findIndex((user) => user.id === id);
        if (index !== -1) {
            this.users[index] = { id, ...userDto };
            return this.users[index];
        }
        return { message: 'User not found' };
    }
    

    // PATCH - Partially update a user
    partiallyUpdateUser(id: number, userDto: Partial<User>): User | { message: string } {
        const user = this.users.find((user) => user.id === id);
        if (!user) return { message: 'User not found' };

        Object.assign(user, userDto);
        return user;
    }

    // Delete - Delete a user
    deleteUser(id: number): string {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1) {
            return `User with ID ${id} not found.`;
        }
        this.users.splice(index, 1);
        return `User with ID ${id} has been deleted.`;
    }
}
