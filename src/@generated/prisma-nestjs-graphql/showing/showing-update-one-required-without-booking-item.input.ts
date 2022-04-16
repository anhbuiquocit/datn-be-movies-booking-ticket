import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateWithoutBookingItemInput } from './showing-create-without-booking-item.input';
import { ShowingCreateOrConnectWithoutBookingItemInput } from './showing-create-or-connect-without-booking-item.input';
import { ShowingUpsertWithoutBookingItemInput } from './showing-upsert-without-booking-item.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingUpdateWithoutBookingItemInput } from './showing-update-without-booking-item.input';

@InputType()
export class ShowingUpdateOneRequiredWithoutBookingItemInput {

    @Field(() => ShowingCreateWithoutBookingItemInput, {nullable:true})
    create?: ShowingCreateWithoutBookingItemInput;

    @Field(() => ShowingCreateOrConnectWithoutBookingItemInput, {nullable:true})
    connectOrCreate?: ShowingCreateOrConnectWithoutBookingItemInput;

    @Field(() => ShowingUpsertWithoutBookingItemInput, {nullable:true})
    upsert?: ShowingUpsertWithoutBookingItemInput;

    @Field(() => ShowingWhereUniqueInput, {nullable:true})
    connect?: ShowingWhereUniqueInput;

    @Field(() => ShowingUpdateWithoutBookingItemInput, {nullable:true})
    update?: ShowingUpdateWithoutBookingItemInput;
}
