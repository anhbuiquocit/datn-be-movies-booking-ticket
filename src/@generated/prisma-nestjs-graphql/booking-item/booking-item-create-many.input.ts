import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookingItemCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    SeatId!: string;

    @Field(() => String, {nullable:false})
    ShowingId!: string;

    @Field(() => String, {nullable:false})
    bookingId!: string;
}
