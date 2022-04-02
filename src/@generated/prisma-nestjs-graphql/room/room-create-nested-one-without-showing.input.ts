import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutShowingInput } from './room-create-without-showing.input';
import { RoomCreateOrConnectWithoutShowingInput } from './room-create-or-connect-without-showing.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';

@InputType()
export class RoomCreateNestedOneWithoutShowingInput {

    @Field(() => RoomCreateWithoutShowingInput, {nullable:true})
    create?: RoomCreateWithoutShowingInput;

    @Field(() => RoomCreateOrConnectWithoutShowingInput, {nullable:true})
    connectOrCreate?: RoomCreateOrConnectWithoutShowingInput;

    @Field(() => RoomWhereUniqueInput, {nullable:true})
    connect?: RoomWhereUniqueInput;
}
