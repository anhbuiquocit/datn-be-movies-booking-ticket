import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminWhereUniqueInput } from './admin-where-unique.input';

@ArgsType()
export class FindUniqueAdminArgs {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    where!: AdminWhereUniqueInput;
}
