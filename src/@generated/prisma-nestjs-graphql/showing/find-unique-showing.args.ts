import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';

@ArgsType()
export class FindUniqueShowingArgs {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;
}
