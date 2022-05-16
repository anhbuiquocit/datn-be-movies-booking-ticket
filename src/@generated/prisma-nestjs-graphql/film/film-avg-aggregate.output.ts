import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class FilmAvgAggregate {

    @Field(() => Float, {nullable:true})
    time?: number;
}
