import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FilmAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    time?: true;
}
