import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShowingUpdateInput } from './showing-update.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';

@ArgsType()
export class UpdateOneShowingArgs {

    @Field(() => ShowingUpdateInput, {nullable:false})
    data!: ShowingUpdateInput;

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;
}
