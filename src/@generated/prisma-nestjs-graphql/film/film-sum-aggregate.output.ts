import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FilmSumAggregate {

    @Field(() => Int, {nullable:true})
    time?: number;
}
