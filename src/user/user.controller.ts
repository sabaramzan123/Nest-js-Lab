import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }
    
    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.getUser(Number(id));
    }

    //POST - Create a New User
    @Post()
    createUser(@Body() newUser: { name: string; email: string }) {
        return this.userService.createUser(newUser);
    }

    //PUT - Replace a user
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: { name: string; email: string }) {
        return this.userService.updateUser(Number(id), updateUserDto);
    }

    //PATCH - Partially Update a User
    @Patch(':id')
    partiallyUpdateUser(@Param('id') id: string, @Body() updateUserDto: Partial<User>) {
        return this.userService.partiallyUpdateUser(Number(id), updateUserDto);
    }

    //DELETE - Delete a User
    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.deleteUser(Number(id));
    }
}

