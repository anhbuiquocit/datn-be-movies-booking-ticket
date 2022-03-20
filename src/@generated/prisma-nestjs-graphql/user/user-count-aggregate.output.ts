import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createAt!: number;

    @Field(() => Int, {nullable:false})
    updateAt!: number;

    @Field(() => Int, {nullable:false})
    deleteAt!: number;

    @Field(() => Int, {nullable:false})
    firstname!: number;

    @Field(() => Int, {nullable:false})
    lastname!: number;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
