import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor( private usersService: UsersService){}

    @ApiOkResponse({ type: User, isArray: true})
    @ApiQuery({ name: 'name', required: false})
    @Get()
    getUsers(@Query('name') name: String ): User[] {
        return  this.usersService.findAll()
    }

    
    @ApiOkResponse({ type: User})
    @Get(':id') // Parsing URL params
    getUserById(@Param('id') id: String): User {  // TODD :: auto parsing id

        return this.usersService.findById(Number(id))
    }

    @ApiCreatedResponse({ type: User})
    @Post()
    createUser(@Body() body: CreateUserDto) : User {
            return this.usersService.createUser(body)
    }

   
}
