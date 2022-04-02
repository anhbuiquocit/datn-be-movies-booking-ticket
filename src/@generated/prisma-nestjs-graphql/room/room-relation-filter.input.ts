import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomWhereInput } from './room-where.input';

@InputType()
export class RoomRelationFilter {

    @Field(() => RoomWhereInput, {nullable:true})
    is?: RoomWhereInput;

    @Field(() => RoomWhereInput, {nullable:true})
    isNot?: RoomWhereInput;
}
