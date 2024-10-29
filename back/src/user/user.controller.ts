import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private readonly userservice: UserService){}

   @Get()
   userHola(): string{
   return this.userservice.saludo()

  }
}
