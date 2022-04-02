import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateManyUserInput } from './booking-create-many-user.input';

@InputType()
export class BookingCreateManyUserInputEnvelope {

    @Field(() => [BookingCreateManyUserInput], {nullable:false})
    data!: Array<BookingCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
