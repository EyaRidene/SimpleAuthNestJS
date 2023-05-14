import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.addUser(createUserDto);
  }

  @Get(':id')
  show(@Param('id') id: string) {
    return this.usersService.getUserById(+id);
  }
}
