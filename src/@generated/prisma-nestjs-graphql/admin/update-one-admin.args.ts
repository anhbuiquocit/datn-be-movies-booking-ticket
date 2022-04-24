import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUpdateInput } from './admin-update.input';
import { AdminWhereUniqueInput } from './admin-where-unique.input';

@ArgsType()
export class UpdateOneAdminArgs {

    @Field(() => AdminUpdateInput, {nullable:false})
    data!: AdminUpdateInput;

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    where!: AdminWhereUniqueInput;
}
