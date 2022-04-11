import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OrderUncheckedCreateNestedManyWithoutUserInput } from '../order/order-unchecked-create-nested-many-without-user.input';
import { BookingUncheckedCreateNestedManyWithoutUserInput } from '../booking/booking-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deleteAt?: Date | string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => Date, {nullable:true})
    birthday?: Date | string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    active?: boolean;

    @Field(() => Int, {nullable:true})
    point?: number;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => OrderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => BookingUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput;
}
