import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoomWhereUniqueInput } from './room-where-unique.input';
import { RoomCreateInput } from './room-create.input';
import { RoomUpdateInput } from './room-update.input';

@ArgsType()
export class UpsertOneRoomArgs {

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    where!: RoomWhereUniqueInput;

    @Field(() => RoomCreateInput, {nullable:false})
    create!: RoomCreateInput;

    @Field(() => RoomUpdateInput, {nullable:false})
    update!: RoomUpdateInput;
}
