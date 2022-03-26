import { UsersService } from './../users/users.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/auth')
export class AuthController {
  constructor(private usersService: UsersService) {}
  @Get('/confirm/:userId')
  verificationAccount(@Param('userId') userId: string) {
    console.log('iddd: ', userId);
    // return true;
  }
}
