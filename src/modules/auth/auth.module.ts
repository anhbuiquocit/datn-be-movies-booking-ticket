import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import constant from '../../config/index';
import { RolesGuard } from 'src/util/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { AdminModule } from '../admin/admin.module';
import { AdminService } from '../admin/admin.service';

@Module({
  imports: [
    UsersModule,
    AdminModule,
    PassportModule,
    JwtModule.register({
      secret: constant.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthResolver,
    AdminService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
