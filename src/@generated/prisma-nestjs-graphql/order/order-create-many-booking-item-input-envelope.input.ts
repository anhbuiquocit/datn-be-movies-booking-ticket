import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyBookingItemInput } from './order-create-many-booking-item.input';

@InputType()
export class OrderCreateManyBookingItemInputEnvelope {

    @Field(() => [OrderCreateManyBookingItemInput], {nullable:false})
    data!: Array<OrderCreateManyBookingItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
