import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingCreateWithoutRoomInput } from './showing-create-without-room.input';

@InputType()
export class ShowingCreateOrConnectWithoutRoomInput {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;

    @Field(() => ShowingCreateWithoutRoomInput, {nullable:false})
    create!: ShowingCreateWithoutRoomInput;
}
