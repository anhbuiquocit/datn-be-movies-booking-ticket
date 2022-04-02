import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateNestedOneWithoutShowingInput } from '../room/room-create-nested-one-without-showing.input';
import { FilmCreateNestedOneWithoutShowingInput } from '../film/film-create-nested-one-without-showing.input';
import { OrderCreateNestedManyWithoutShowingInput } from '../order/order-create-nested-many-without-showing.input';

@InputType()
export class ShowingCreateWithoutBookingInput {

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

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => OrderCreateNestedManyWithoutShowingInput, {nullable:true})
    Order?: OrderCreateNestedManyWithoutShowingInput;
}
