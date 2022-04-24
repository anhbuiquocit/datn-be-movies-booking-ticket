import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AdminCountAggregate } from './admin-count-aggregate.output';
import { AdminMinAggregate } from './admin-min-aggregate.output';
import { AdminMaxAggregate } from './admin-max-aggregate.output';

@ObjectType()
export class AdminGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    createAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updateAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deleteAt?: Date | string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => Date, {nullable:true})
    birthday?: Date | string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    role?: string;

    @Field(() => AdminCountAggregate, {nullable:true})
    _count?: AdminCountAggregate;

    @Field(() => AdminMinAggregate, {nullable:true})
    _min?: AdminMinAggregate;

    @Field(() => AdminMaxAggregate, {nullable:true})
    _max?: AdminMaxAggregate;
}
