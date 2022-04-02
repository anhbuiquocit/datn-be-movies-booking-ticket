import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingCreateInput } from './showing-create.input';
import { ShowingUpdateInput } from './showing-update.input';

@ArgsType()
export class UpsertOneShowingArgs {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;

    @Field(() => ShowingCreateInput, {nullable:false})
    create!: ShowingCreateInput;

    @Field(() => ShowingUpdateInput, {nullable:false})
    update!: ShowingUpdateInput;
}
