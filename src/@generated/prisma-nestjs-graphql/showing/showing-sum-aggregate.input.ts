import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ShowingSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    price?: true;
}
