import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminUpdateManyMutationInput } from './admin-update-many-mutation.input';
import { AdminWhereInput } from './admin-where.input';

@ArgsType()
export class UpdateManyAdminArgs {

    @Field(() => AdminUpdateManyMutationInput, {nullable:false})
    data!: AdminUpdateManyMutationInput;

    @Field(() => AdminWhereInput, {nullable:true})
    where?: AdminWhereInput;
}
