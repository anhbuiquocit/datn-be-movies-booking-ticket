import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateManyShowingInput } from './booking-item-create-many-showing.input';

@InputType()
export class BookingItemCreateManyShowingInputEnvelope {

    @Field(() => [BookingItemCreateManyShowingInput], {nullable:false})
    data!: Array<BookingItemCreateManyShowingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
