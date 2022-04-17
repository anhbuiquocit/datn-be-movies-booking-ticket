import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
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

    @Field(() => Date, {nullable:true})
    startDate!: Date | null;

    @Field(() => Date, {nullable:true})
    endDate!: Date | null;

    @Field(() => Date, {nullable:true})
    startTime!: Date | null;

    @Field(() => Date, {nullable:true})
    endTime!: Date | null;

    @Field(() => [Booking], {nullable:true})
    Booking?: Array<Booking>;

    @Field(() => PromotionCount, {nullable:false})
    _count?: PromotionCount;
}
