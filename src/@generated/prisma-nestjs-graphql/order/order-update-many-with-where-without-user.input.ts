import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderScalarWhereInput } from './order-scalar-where.input';
import { OrderUpdateManyMutationInput } from './order-update-many-mutation.input';

@InputType()
export class OrderUpdateManyWithWhereWithoutUserInput {

    @Field(() => OrderScalarWhereInput, {nullable:false})
    where!: OrderScalarWhereInput;

    @Field(() => OrderUpdateManyMutationInput, {nullable:false})
    data!: OrderUpdateManyMutationInput;
}
