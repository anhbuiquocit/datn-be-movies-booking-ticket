import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingCreateWithoutOrderInput } from './showing-create-without-order.input';

@InputType()
export class ShowingCreateOrConnectWithoutOrderInput {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;

    @Field(() => ShowingCreateWithoutOrderInput, {nullable:false})
    create!: ShowingCreateWithoutOrderInput;
}
