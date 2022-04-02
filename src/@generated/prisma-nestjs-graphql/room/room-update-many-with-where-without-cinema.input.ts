import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomScalarWhereInput } from './room-scalar-where.input';
import { RoomUpdateManyMutationInput } from './room-update-many-mutation.input';

@InputType()
export class RoomUpdateManyWithWhereWithoutCinemaInput {

    @Field(() => RoomScalarWhereInput, {nullable:false})
    where!: RoomScalarWhereInput;

    @Field(() => RoomUpdateManyMutationInput, {nullable:false})
    data!: RoomUpdateManyMutationInput;
}
