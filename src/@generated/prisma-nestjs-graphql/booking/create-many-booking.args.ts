import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingCreateManyInput } from './booking-create-many.input';

@ArgsType()
export class CreateManyBookingArgs {

    @Field(() => [BookingCreateManyInput], {nullable:false})
    data!: Array<BookingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
