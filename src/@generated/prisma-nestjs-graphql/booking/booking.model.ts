import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';
import { BookingItem } from '../booking-item/booking-item.model';
import { Promotion } from '../promotion/promotion.model';

@ObjectType()
export class Booking {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    UserId!: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => BookingItem, {nullable:false})
    bookingItem?: BookingItem;

    @Field(() => String, {nullable:false})
    BookingItemId!: string;

    @Field(() => Promotion, {nullable:false})
    promotion?: Promotion;

    @Field(() => String, {nullable:false})
    PromotionId!: string;
}
