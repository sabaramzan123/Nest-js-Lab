import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';
import { CreateUserDto } from './dto/createUserDto';
import { plainToInstance } from 'class-transformer';
import { UserResponseDto } from './dto/UserResponseDto';
import { CustomException } from 'src/exception/customException';
@Controller('user')
export class UserController {
    appService: any;
    constructor(private userService: UserService){}

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }
    
    @Get(':id')
    getUser(@Param('id') id: string) {
        if(id <= '0'){
            throw new NotFoundException("This ID is invalid please enter ID greater then 0");
        }
        return this.userService.getUser(Number(id));
    }

    @Get()
    getHello(): string {
      var str = this.appService.getHello();
      if (str != "") {
         throw new CustomException();
 }
      return str;
 }

    //POST - Create a New User
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        const user =  this.userService.createUser(createUserDto);
        return plainToInstance(UserResponseDto, user, {
            excludeExtraneousValues: false,
        } )
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

