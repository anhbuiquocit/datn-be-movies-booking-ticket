import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShowingWhereInput } from './showing-where.input';

@ArgsType()
export class DeleteManyShowingArgs {

    @Field(() => ShowingWhereInput, {nullable:true})
    where?: ShowingWhereInput;
}
