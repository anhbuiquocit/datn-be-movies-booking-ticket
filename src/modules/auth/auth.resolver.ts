import { UsersService } from './../users/users.service';
import { User } from './../../@generated/prisma-nestjs-graphql/user/user.model';
import { JwtAuthGuard } from './jwt-auth.guard';
import { GqlAuthGuard } from './gql-auth-guard';
import { AuthService } from './auth.service';
import { Mutation, Resolver, Args, Context } from '@nestjs/graphql';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user';
import { UseGuards, Request, UseFilters } from '@nestjs/common';
import { AdminLoginResponse } from './dto/admin-login-response';
@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}
  // @UseGuards(GqlAuthGuard)
  @Mutation(() => LoginResponse)
  async login(@Args('userInput') userInput: LoginUserInput) {
    return this.authService.login(userInput);
    // return this.authService.login(req.user);
  }
  @Mutation(() => AdminLoginResponse)
  async adminLogin(@Args('data') data: LoginUserInput) {
    return this.authService.adminLogin(data);
    // return this.authService.login(req.user);
  }

  // @UseGuards(JwtAuthGuard)
  // @Query(() => User)
  // async getProfile(@Args('username') username: string): Promise<User> {
  //   return this.userService.findOne(username);
  // }
}
