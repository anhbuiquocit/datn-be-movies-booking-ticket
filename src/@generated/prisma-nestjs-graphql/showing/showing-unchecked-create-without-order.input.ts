import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingUncheckedCreateNestedManyWithoutShowingInput } from '../booking/booking-unchecked-create-nested-many-without-showing.input';

@InputType()
export class ShowingUncheckedCreateWithoutOrderInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    RoomId!: string;

    @Field(() => String, {nullable:false})
    FilmId!: string;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => BookingUncheckedCreateNestedManyWithoutShowingInput, {nullable:true})
    Booking?: BookingUncheckedCreateNestedManyWithoutShowingInput;
}
