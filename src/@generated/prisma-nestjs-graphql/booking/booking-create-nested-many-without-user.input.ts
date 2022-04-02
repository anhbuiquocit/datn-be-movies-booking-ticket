import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutUserInput } from './booking-create-without-user.input';
import { BookingCreateOrConnectWithoutUserInput } from './booking-create-or-connect-without-user.input';
import { BookingCreateManyUserInputEnvelope } from './booking-create-many-user-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingCreateNestedManyWithoutUserInput {

    @Field(() => [BookingCreateWithoutUserInput], {nullable:true})
    create?: Array<BookingCreateWithoutUserInput>;

    @Field(() => [BookingCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<BookingCreateOrConnectWithoutUserInput>;

    @Field(() => BookingCreateManyUserInputEnvelope, {nullable:true})
    createMany?: BookingCreateManyUserInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    connect?: Array<BookingWhereUniqueInput>;
}
