import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private usersService: UsersService){}


    @Get()
    getUsers(): User[] {
        return  this.usersService.findAll()
    }

    // Parsing URL params

    @Get(':id')
    getUserById(@Param('id') id: String): User {  // TODD :: auto parsing id

        return this.usersService.findById(Number(id))
    }

    @Post()
    createUser(@Body() body: CreateUserDto) : User {
            return this.usersService.createUser(body)
    }

   
}
