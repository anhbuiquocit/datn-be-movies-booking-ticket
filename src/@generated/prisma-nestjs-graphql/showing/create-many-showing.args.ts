import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShowingCreateManyInput } from './showing-create-many.input';

@ArgsType()
export class CreateManyShowingArgs {

    @Field(() => [ShowingCreateManyInput], {nullable:false})
    data!: Array<ShowingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
