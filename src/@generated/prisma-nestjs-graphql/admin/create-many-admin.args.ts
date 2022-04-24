import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdminCreateManyInput } from './admin-create-many.input';

@ArgsType()
export class CreateManyAdminArgs {

    @Field(() => [AdminCreateManyInput], {nullable:false})
    data!: Array<AdminCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
