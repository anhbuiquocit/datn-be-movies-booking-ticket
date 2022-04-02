import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    age?: true;

    @Field(() => Boolean, {nullable:true})
    point?: true;
}
