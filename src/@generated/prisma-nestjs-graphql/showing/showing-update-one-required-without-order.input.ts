import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateWithoutOrderInput } from './showing-create-without-order.input';
import { ShowingCreateOrConnectWithoutOrderInput } from './showing-create-or-connect-without-order.input';
import { ShowingUpsertWithoutOrderInput } from './showing-upsert-without-order.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingUpdateWithoutOrderInput } from './showing-update-without-order.input';

@InputType()
export class ShowingUpdateOneRequiredWithoutOrderInput {

    @Field(() => ShowingCreateWithoutOrderInput, {nullable:true})
    create?: ShowingCreateWithoutOrderInput;

    @Field(() => ShowingCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: ShowingCreateOrConnectWithoutOrderInput;

    @Field(() => ShowingUpsertWithoutOrderInput, {nullable:true})
    upsert?: ShowingUpsertWithoutOrderInput;

    @Field(() => ShowingWhereUniqueInput, {nullable:true})
    connect?: ShowingWhereUniqueInput;

    @Field(() => ShowingUpdateWithoutOrderInput, {nullable:true})
    update?: ShowingUpdateWithoutOrderInput;
}
