import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaUpdateWithoutRoomInput } from './cinema-update-without-room.input';
import { CinemaCreateWithoutRoomInput } from './cinema-create-without-room.input';

@InputType()
export class CinemaUpsertWithoutRoomInput {

    @Field(() => CinemaUpdateWithoutRoomInput, {nullable:false})
    update!: CinemaUpdateWithoutRoomInput;

    @Field(() => CinemaCreateWithoutRoomInput, {nullable:false})
    create!: CinemaCreateWithoutRoomInput;
}
