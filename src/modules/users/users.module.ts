import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { JwtModule } from '@nestjs/jwt';
import constant from '../../config/index';

@Module({
  imports: [
    JwtModule.register({
      secret: constant.secret,
      signOptions: { expiresIn: '300s' },
    }),
  ],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}
