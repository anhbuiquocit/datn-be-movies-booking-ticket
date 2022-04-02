import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SeatScalarWhereInput } from './seat-scalar-where.input';
import { SeatUpdateManyMutationInput } from './seat-update-many-mutation.input';

@InputType()
export class SeatUpdateManyWithWhereWithoutRoomInput {

    @Field(() => SeatScalarWhereInput, {nullable:false})
    where!: SeatScalarWhereInput;

    @Field(() => SeatUpdateManyMutationInput, {nullable:false})
    data!: SeatUpdateManyMutationInput;
}
