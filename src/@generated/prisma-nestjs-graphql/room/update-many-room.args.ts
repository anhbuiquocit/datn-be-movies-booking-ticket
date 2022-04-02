import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoomUpdateManyMutationInput } from './room-update-many-mutation.input';
import { RoomWhereInput } from './room-where.input';

@ArgsType()
export class UpdateManyRoomArgs {

    @Field(() => RoomUpdateManyMutationInput, {nullable:false})
    data!: RoomUpdateManyMutationInput;

    @Field(() => RoomWhereInput, {nullable:true})
    where?: RoomWhereInput;
}
