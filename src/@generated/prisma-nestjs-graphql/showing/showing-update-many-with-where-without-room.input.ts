import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingScalarWhereInput } from './showing-scalar-where.input';
import { ShowingUpdateManyMutationInput } from './showing-update-many-mutation.input';

@InputType()
export class ShowingUpdateManyWithWhereWithoutRoomInput {

    @Field(() => ShowingScalarWhereInput, {nullable:false})
    where!: ShowingScalarWhereInput;

    @Field(() => ShowingUpdateManyMutationInput, {nullable:false})
    data!: ShowingUpdateManyMutationInput;
}
