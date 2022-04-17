import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingItemUncheckedCreateNestedManyWithoutShowingInput } from '../booking-item/booking-item-unchecked-create-nested-many-without-showing.input';

@InputType()
export class ShowingUncheckedCreateInput {

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

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Date, {nullable:true})
    startTime?: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;

    @Field(() => BookingItemUncheckedCreateNestedManyWithoutShowingInput, {nullable:true})
    BookingItem?: BookingItemUncheckedCreateNestedManyWithoutShowingInput;
}
