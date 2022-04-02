import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingUpdateWithoutOrderInput } from './showing-update-without-order.input';
import { ShowingCreateWithoutOrderInput } from './showing-create-without-order.input';

@InputType()
export class ShowingUpsertWithoutOrderInput {

    @Field(() => ShowingUpdateWithoutOrderInput, {nullable:false})
    update!: ShowingUpdateWithoutOrderInput;

    @Field(() => ShowingCreateWithoutOrderInput, {nullable:false})
    create!: ShowingCreateWithoutOrderInput;
}
