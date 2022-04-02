import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomUpdateWithoutCinemaInput } from './room-update-without-cinema.input';
import { RoomCreateWithoutCinemaInput } from './room-create-without-cinema.input';

@InputType()
export class RoomUpsertWithWhereUniqueWithoutCinemaInput {

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    where!: RoomWhereUniqueInput;

    @Field(() => RoomUpdateWithoutCinemaInput, {nullable:false})
    update!: RoomUpdateWithoutCinemaInput;

    @Field(() => RoomCreateWithoutCinemaInput, {nullable:false})
    create!: RoomCreateWithoutCinemaInput;
}
