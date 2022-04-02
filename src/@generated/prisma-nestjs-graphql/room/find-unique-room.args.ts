import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoomWhereUniqueInput } from './room-where-unique.input';

@ArgsType()
export class FindUniqueRoomArgs {

    @Field(() => RoomWhereUniqueInput, {nullable:false})
    where!: RoomWhereUniqueInput;
}
