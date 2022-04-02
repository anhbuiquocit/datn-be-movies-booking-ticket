import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingUpdateWithoutRoomInput } from './showing-update-without-room.input';
import { ShowingCreateWithoutRoomInput } from './showing-create-without-room.input';

@InputType()
export class ShowingUpsertWithWhereUniqueWithoutRoomInput {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;

    @Field(() => ShowingUpdateWithoutRoomInput, {nullable:false})
    update!: ShowingUpdateWithoutRoomInput;

    @Field(() => ShowingCreateWithoutRoomInput, {nullable:false})
    create!: ShowingCreateWithoutRoomInput;
}
