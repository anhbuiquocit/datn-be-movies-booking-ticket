import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShowingCreateInput } from './showing-create.input';

@ArgsType()
export class CreateOneShowingArgs {

    @Field(() => ShowingCreateInput, {nullable:false})
    data!: ShowingCreateInput;
}
