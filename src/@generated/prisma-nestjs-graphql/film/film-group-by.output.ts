import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FilmCountAggregate } from './film-count-aggregate.output';
import { FilmMinAggregate } from './film-min-aggregate.output';
import { FilmMaxAggregate } from './film-max-aggregate.output';

@ObjectType()
export class FilmGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    trailler!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    director!: string;

    @Field(() => String, {nullable:false})
    actor!: string;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => FilmCountAggregate, {nullable:true})
    _count?: FilmCountAggregate;

    @Field(() => FilmMinAggregate, {nullable:true})
    _min?: FilmMinAggregate;

    @Field(() => FilmMaxAggregate, {nullable:true})
    _max?: FilmMaxAggregate;
}
