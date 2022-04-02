import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CinemaCount {

    @Field(() => Int, {nullable:false})
    Room?: number;
}
