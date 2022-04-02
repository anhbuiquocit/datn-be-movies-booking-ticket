import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Room } from '../room/room.model';
import { BookingItem } from '../booking-item/booking-item.model';
import { SeatCount } from './seat-count.output';

@ObjectType()
export class Seat {

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

    @Field(() => String, {nullable:false})
    position!: string;

    @Field(() => Room, {nullable:false})
    room?: Room;

    @Field(() => String, {nullable:false})
    RoomId!: string;

    @Field(() => [BookingItem], {nullable:true})
    BookingItem?: Array<BookingItem>;

    @Field(() => SeatCount, {nullable:false})
    _count?: SeatCount;
}
