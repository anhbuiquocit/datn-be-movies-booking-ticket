import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Admin {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    createAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deleteAt!: Date | null;

    @Field(() => String, {nullable:true})
    firstname!: string | null;

    @Field(() => String, {nullable:true})
    lastname!: string | null;

    @Field(() => Date, {nullable:true})
    birthday!: Date | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    role!: string | null;
}
