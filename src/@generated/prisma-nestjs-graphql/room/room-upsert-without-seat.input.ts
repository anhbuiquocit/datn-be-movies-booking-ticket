import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomUpdateWithoutSeatInput } from './room-update-without-seat.input';
import { RoomCreateWithoutSeatInput } from './room-create-without-seat.input';

@InputType()
export class RoomUpsertWithoutSeatInput {

    @Field(() => RoomUpdateWithoutSeatInput, {nullable:false})
    update!: RoomUpdateWithoutSeatInput;

    @Field(() => RoomCreateWithoutSeatInput, {nullable:false})
    create!: RoomCreateWithoutSeatInput;
}
