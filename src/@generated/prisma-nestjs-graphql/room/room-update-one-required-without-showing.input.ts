import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateWithoutShowingInput } from './room-create-without-showing.input';
import { RoomCreateOrConnectWithoutShowingInput } from './room-create-or-connect-without-showing.input';
import { RoomUpsertWithoutShowingInput } from './room-upsert-without-showing.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomUpdateWithoutShowingInput } from './room-update-without-showing.input';

@InputType()
export class RoomUpdateOneRequiredWithoutShowingInput {

    @Field(() => RoomCreateWithoutShowingInput, {nullable:true})
    create?: RoomCreateWithoutShowingInput;

    @Field(() => RoomCreateOrConnectWithoutShowingInput, {nullable:true})
    connectOrCreate?: RoomCreateOrConnectWithoutShowingInput;

    @Field(() => RoomUpsertWithoutShowingInput, {nullable:true})
    upsert?: RoomUpsertWithoutShowingInput;

    @Field(() => RoomWhereUniqueInput, {nullable:true})
    connect?: RoomWhereUniqueInput;

    @Field(() => RoomUpdateWithoutShowingInput, {nullable:true})
    update?: RoomUpdateWithoutShowingInput;
}
