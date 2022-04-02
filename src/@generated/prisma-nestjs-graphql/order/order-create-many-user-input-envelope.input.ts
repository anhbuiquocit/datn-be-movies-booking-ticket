import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyUserInput } from './order-create-many-user.input';

@InputType()
export class OrderCreateManyUserInputEnvelope {

    @Field(() => [OrderCreateManyUserInput], {nullable:false})
    data!: Array<OrderCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
