import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateNestedOneWithoutShowingInput } from '../room/room-create-nested-one-without-showing.input';
import { FilmCreateNestedOneWithoutShowingInput } from '../film/film-create-nested-one-without-showing.input';
import { Int } from '@nestjs/graphql';
import { BookingItemCreateNestedManyWithoutShowingInput } from '../booking-item/booking-item-create-nested-many-without-showing.input';

@InputType()
export class ShowingCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => RoomCreateNestedOneWithoutShowingInput, {nullable:false})
    room!: RoomCreateNestedOneWithoutShowingInput;

    @Field(() => FilmCreateNestedOneWithoutShowingInput, {nullable:false})
    film!: FilmCreateNestedOneWithoutShowingInput;

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

    @Field(() => BookingItemCreateNestedManyWithoutShowingInput, {nullable:true})
    BookingItem?: BookingItemCreateNestedManyWithoutShowingInput;
}
