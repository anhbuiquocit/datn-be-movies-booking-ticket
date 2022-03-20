import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deleteAt?: Date | string;

    @Field(() => String, {nullable:false})
    firstname!: string;

    @Field(() => String, {nullable:false})
    lastname!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => String, {nullable:false})
    address!: string;
}
