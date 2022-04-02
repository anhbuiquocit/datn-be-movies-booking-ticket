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
  @Get('confirm/:userId')
  verificationAccount(@Param('userId') userId: string) {
    console.log('iddd: ', userId);
    redis.get(userId).then((result) => {
      console.log('result: ', result);
    });
    if (!this.authService.verificationAccount(userId)) {
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
