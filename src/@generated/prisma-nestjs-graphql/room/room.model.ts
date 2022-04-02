import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Cinema } from '../cinema/cinema.model';
import { Seat } from '../seat/seat.model';
import { Showing } from '../showing/showing.model';
import { RoomCount } from './room-count.output';

@ObjectType()
export class Room {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Cinema, {nullable:false})
    cinema?: Cinema;

    @Field(() => String, {nullable:false})
    CinemaId!: string;

    @Field(() => [Seat], {nullable:true})
    Seat?: Array<Seat>;

    @Field(() => [Showing], {nullable:true})
    Showing?: Array<Showing>;

    @Field(() => RoomCount, {nullable:false})
    _count?: RoomCount;
}
