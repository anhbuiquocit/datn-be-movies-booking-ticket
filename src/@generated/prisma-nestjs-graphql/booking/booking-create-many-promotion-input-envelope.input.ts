import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateManyPromotionInput } from './booking-create-many-promotion.input';

@InputType()
export class BookingCreateManyPromotionInputEnvelope {

    @Field(() => [BookingCreateManyPromotionInput], {nullable:false})
    data!: Array<BookingCreateManyPromotionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
