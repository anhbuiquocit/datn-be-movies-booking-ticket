import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminWhereUniqueInput } from './admin-where-unique.input';
import { AdminCreateInput } from './admin-create.input';
import { AdminUpdateInput } from './admin-update.input';

@ArgsType()
export class UpsertOneAdminArgs {

    @Field(() => AdminWhereUniqueInput, {nullable:false})
    where!: AdminWhereUniqueInput;

    @Field(() => AdminCreateInput, {nullable:false})
    create!: AdminCreateInput;

    @Field(() => AdminUpdateInput, {nullable:false})
    update!: AdminUpdateInput;
}
