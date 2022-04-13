import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FilmCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    trailler!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    director!: number;

    @Field(() => Int, {nullable:false})
    actor!: number;

    @Field(() => Int, {nullable:false})
    time!: number;

    @Field(() => Int, {nullable:false})
    image!: number;

    @Field(() => Int, {nullable:false})
    imageDescription1!: number;

    @Field(() => Int, {nullable:false})
    imageDescription2!: number;

    @Field(() => Int, {nullable:false})
    imageDescription3!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
