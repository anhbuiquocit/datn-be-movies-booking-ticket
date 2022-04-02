import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoomWhereInput } from './room-where.input';

@ArgsType()
export class DeleteManyRoomArgs {

    @Field(() => RoomWhereInput, {nullable:true})
    where?: RoomWhereInput;
}
