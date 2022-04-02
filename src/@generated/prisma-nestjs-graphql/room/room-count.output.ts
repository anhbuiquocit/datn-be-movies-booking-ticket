import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RoomCount {

    @Field(() => Int, {nullable:false})
    Seat?: number;

    @Field(() => Int, {nullable:false})
    Showing?: number;
}
