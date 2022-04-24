import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminCreateInput } from './admin-create.input';

@ArgsType()
export class CreateOneAdminArgs {

    @Field(() => AdminCreateInput, {nullable:false})
    data!: AdminCreateInput;
}
