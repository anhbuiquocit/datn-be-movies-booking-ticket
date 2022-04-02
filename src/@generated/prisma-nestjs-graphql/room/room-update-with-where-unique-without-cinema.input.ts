import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomUpdateWithoutCinemaInput } from './room-update-without-cinema.input';

@InputType()
export class RoomUpdateWithWhereUniqueWithoutCinemaInput {

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    where!: RoomWhereUniqueInput;

    @Field(() => RoomUpdateWithoutCinemaInput, {nullable:false})
    data!: RoomUpdateWithoutCinemaInput;
}
