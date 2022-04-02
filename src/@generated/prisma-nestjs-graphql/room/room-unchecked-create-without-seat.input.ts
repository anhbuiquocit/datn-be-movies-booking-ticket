import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingUncheckedCreateNestedManyWithoutRoomInput } from '../showing/showing-unchecked-create-nested-many-without-room.input';

@InputType()
export class RoomUncheckedCreateWithoutSeatInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    CinemaId!: string;

    @Field(() => ShowingUncheckedCreateNestedManyWithoutRoomInput, {nullable:true})
    Showing?: ShowingUncheckedCreateNestedManyWithoutRoomInput;
}
