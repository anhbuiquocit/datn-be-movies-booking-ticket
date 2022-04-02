import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyShowingInput } from './order-create-many-showing.input';

@InputType()
export class OrderCreateManyShowingInputEnvelope {

    @Field(() => [OrderCreateManyShowingInput], {nullable:false})
    data!: Array<OrderCreateManyShowingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
