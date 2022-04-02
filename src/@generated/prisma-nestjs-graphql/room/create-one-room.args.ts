import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoomCreateInput } from './room-create.input';

@ArgsType()
export class CreateOneRoomArgs {

    @Field(() => RoomCreateInput, {nullable:false})
    data!: RoomCreateInput;
}
