import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Order } from '../order/order.model';
import { Booking } from '../booking/booking.model';
import { PromotionCount } from './promotion-count.output';

@ObjectType()
export class Promotion {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Float, {nullable:false})
    discount!: number;

    @Field(() => Float, {nullable:false})
    maxDiscount!: number;

    @Field(() => Date, {nullable:false})
    startDate!: Date;

    @Field(() => Date, {nullable:false})
    endDate!: Date;

    @Field(() => [Order], {nullable:true})
    Order?: Array<Order>;

    @Field(() => [Booking], {nullable:true})
    Booking?: Array<Booking>;

    @Field(() => PromotionCount, {nullable:false})
    _count?: PromotionCount;
}
