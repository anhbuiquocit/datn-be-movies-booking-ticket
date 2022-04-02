import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoomCreateManyInput } from './room-create-many.input';

@ArgsType()
export class CreateManyRoomArgs {

    @Field(() => [RoomCreateManyInput], {nullable:false})
    data!: Array<RoomCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
