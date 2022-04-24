import { AdminService } from './admin.service';
import { Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../users/user.decorator.grapql';
import { Admin } from 'src/@generated/prisma-nestjs-graphql/admin/admin.model';

@Resolver()
export class AdminResolver {
  constructor(private adminService: AdminService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => Admin)
  async adminQueryMe(@CurrentUser() user: Admin) {
    return this.adminService.findOne(user?.username);
  }
}
