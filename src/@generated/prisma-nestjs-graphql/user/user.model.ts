import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createAt!: Date;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deleteAt!: Date | null;

    @Field(() => String, {nullable:false})
    firstname!: string;

    @Field(() => String, {nullable:false})
    lastname!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => String, {nullable:false})
    address!: string;
}
