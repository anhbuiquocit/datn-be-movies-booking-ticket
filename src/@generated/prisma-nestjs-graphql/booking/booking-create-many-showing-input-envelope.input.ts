import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateManyShowingInput } from './booking-create-many-showing.input';

@InputType()
export class BookingCreateManyShowingInputEnvelope {

    @Field(() => [BookingCreateManyShowingInput], {nullable:false})
    data!: Array<BookingCreateManyShowingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
