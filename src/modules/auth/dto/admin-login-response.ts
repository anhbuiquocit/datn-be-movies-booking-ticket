import { Field, ObjectType } from '@nestjs/graphql';
import { Admin } from 'src/@generated/prisma-nestjs-graphql/admin/admin.model';

@ObjectType()
export class AdminLoginResponse {
  @Field()
  access_token: string;
  @Field(() => Admin)
  admin: Admin;
}
