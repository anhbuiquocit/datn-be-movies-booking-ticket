import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomCreateWithoutShowingInput } from './room-create-without-showing.input';

@InputType()
export class RoomCreateOrConnectWithoutShowingInput {

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    where!: RoomWhereUniqueInput;

    @Field(() => RoomCreateWithoutShowingInput, {nullable:false})
    create!: RoomCreateWithoutShowingInput;
}
