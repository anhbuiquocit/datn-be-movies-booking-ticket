import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateWithoutShowingInput } from './booking-item-create-without-showing.input';
import { BookingItemCreateOrConnectWithoutShowingInput } from './booking-item-create-or-connect-without-showing.input';
import { BookingItemCreateManyShowingInputEnvelope } from './booking-item-create-many-showing-input-envelope.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';

@InputType()
export class BookingItemUncheckedCreateNestedManyWithoutShowingInput {

    @Field(() => [BookingItemCreateWithoutShowingInput], {nullable:true})
    create?: Array<BookingItemCreateWithoutShowingInput>;

    @Field(() => [BookingItemCreateOrConnectWithoutShowingInput], {nullable:true})
    connectOrCreate?: Array<BookingItemCreateOrConnectWithoutShowingInput>;

    @Field(() => BookingItemCreateManyShowingInputEnvelope, {nullable:true})
    createMany?: BookingItemCreateManyShowingInputEnvelope;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    connect?: Array<BookingItemWhereUniqueInput>;
}
