import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminWhereInput } from './admin-where.input';

@ArgsType()
export class DeleteManyAdminArgs {

    @Field(() => AdminWhereInput, {nullable:true})
    where?: AdminWhereInput;
}
