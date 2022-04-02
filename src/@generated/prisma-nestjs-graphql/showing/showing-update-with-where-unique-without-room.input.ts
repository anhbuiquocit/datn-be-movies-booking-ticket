import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingUpdateWithoutRoomInput } from './showing-update-without-room.input';

@InputType()
export class ShowingUpdateWithWhereUniqueWithoutRoomInput {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;

    @Field(() => ShowingUpdateWithoutRoomInput, {nullable:false})
    data!: ShowingUpdateWithoutRoomInput;
}
