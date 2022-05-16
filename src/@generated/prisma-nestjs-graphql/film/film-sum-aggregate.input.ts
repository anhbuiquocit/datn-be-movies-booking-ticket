import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FilmSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    time?: true;
}
