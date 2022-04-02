import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateWithoutBookingInput } from './showing-create-without-booking.input';
import { ShowingCreateOrConnectWithoutBookingInput } from './showing-create-or-connect-without-booking.input';
import { ShowingUpsertWithoutBookingInput } from './showing-upsert-without-booking.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingUpdateWithoutBookingInput } from './showing-update-without-booking.input';

@InputType()
export class ShowingUpdateOneRequiredWithoutBookingInput {

    @Field(() => ShowingCreateWithoutBookingInput, {nullable:true})
    create?: ShowingCreateWithoutBookingInput;

    @Field(() => ShowingCreateOrConnectWithoutBookingInput, {nullable:true})
    connectOrCreate?: ShowingCreateOrConnectWithoutBookingInput;

    @Field(() => ShowingUpsertWithoutBookingInput, {nullable:true})
    upsert?: ShowingUpsertWithoutBookingInput;

    @Field(() => ShowingWhereUniqueInput, {nullable:true})
    connect?: ShowingWhereUniqueInput;

    @Field(() => ShowingUpdateWithoutBookingInput, {nullable:true})
    update?: ShowingUpdateWithoutBookingInput;
}
