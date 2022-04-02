import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaCreateNestedOneWithoutRoomInput } from '../cinema/cinema-create-nested-one-without-room.input';
import { ShowingCreateNestedManyWithoutRoomInput } from '../showing/showing-create-nested-many-without-room.input';

@InputType()
export class RoomCreateWithoutSeatInput {

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

    @Field(() => CinemaCreateNestedOneWithoutRoomInput, {nullable:false})
    cinema!: CinemaCreateNestedOneWithoutRoomInput;

    @Field(() => ShowingCreateNestedManyWithoutRoomInput, {nullable:true})
    Showing?: ShowingCreateNestedManyWithoutRoomInput;
}
