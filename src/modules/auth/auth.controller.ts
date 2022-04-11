import { AuthService } from './auth.service';
import { UsersService } from './../users/users.service';
import { Controller, Get, Param } from '@nestjs/common';
import { redis } from 'src/redis';
@Controller('auth')
export class AuthController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}
  @Get('/user/confirm/:token')
  verificationAccount(@Param('token') token: string) {
    console.log('token gettt: ', token);
    if (!this.authService.verificationAccount(token)) {
      return {
        mesage: 'Can not verify your account because id of accout is not exist',
        status: 404,
      };
    }
    return {
      message: 'successfully',
      status: 200,
    };
  }
  @Get()
  defaultFunction() {
    console.log('ffff');
    return {
      message: 'are you ok?',
    };
  }
}
