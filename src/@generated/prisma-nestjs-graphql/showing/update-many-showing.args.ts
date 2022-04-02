import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShowingUpdateManyMutationInput } from './showing-update-many-mutation.input';
import { ShowingWhereInput } from './showing-where.input';

@ArgsType()
export class UpdateManyShowingArgs {

    @Field(() => ShowingUpdateManyMutationInput, {nullable:false})
    data!: ShowingUpdateManyMutationInput;

    @Field(() => ShowingWhereInput, {nullable:true})
    where?: ShowingWhereInput;
}
