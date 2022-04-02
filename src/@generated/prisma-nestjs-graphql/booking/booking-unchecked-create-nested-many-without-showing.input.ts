import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutShowingInput } from './booking-create-without-showing.input';
import { BookingCreateOrConnectWithoutShowingInput } from './booking-create-or-connect-without-showing.input';
import { BookingCreateManyShowingInputEnvelope } from './booking-create-many-showing-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingUncheckedCreateNestedManyWithoutShowingInput {

    @Field(() => [BookingCreateWithoutShowingInput], {nullable:true})
    create?: Array<BookingCreateWithoutShowingInput>;

    @Field(() => [BookingCreateOrConnectWithoutShowingInput], {nullable:true})
    connectOrCreate?: Array<BookingCreateOrConnectWithoutShowingInput>;

    @Field(() => BookingCreateManyShowingInputEnvelope, {nullable:true})
    createMany?: BookingCreateManyShowingInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    connect?: Array<BookingWhereUniqueInput>;
}
