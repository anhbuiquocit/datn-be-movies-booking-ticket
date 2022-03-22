import { AuthService } from './auth.service';
import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user';
@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}
  @Mutation(() => LoginResponse)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.login(loginUserInput);
  }
}
