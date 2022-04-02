import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoomUpdateInput } from './room-update.input';
import { RoomWhereUniqueInput } from './room-where-unique.input';

@ArgsType()
export class UpdateOneRoomArgs {

    @Field(() => RoomUpdateInput, {nullable:false})
    data!: RoomUpdateInput;

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    where!: RoomWhereUniqueInput;
}
