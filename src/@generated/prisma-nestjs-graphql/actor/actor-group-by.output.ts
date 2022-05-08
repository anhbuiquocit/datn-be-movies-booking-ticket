import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ActorCountAggregate } from './actor-count-aggregate.output';
import { ActorMinAggregate } from './actor-min-aggregate.output';
import { ActorMaxAggregate } from './actor-max-aggregate.output';

@ObjectType()
export class ActorGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    birthday?: Date | string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => ActorCountAggregate, {nullable:true})
    _count?: ActorCountAggregate;

    @Field(() => ActorMinAggregate, {nullable:true})
    _min?: ActorMinAggregate;

    @Field(() => ActorMaxAggregate, {nullable:true})
    _max?: ActorMaxAggregate;
}
