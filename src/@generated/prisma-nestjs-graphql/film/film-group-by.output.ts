import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FilmCountAggregate } from './film-count-aggregate.output';
import { FilmAvgAggregate } from './film-avg-aggregate.output';
import { FilmSumAggregate } from './film-sum-aggregate.output';
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

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    director?: string;

    @Field(() => String, {nullable:true})
    actor?: string;

    @Field(() => Int, {nullable:true})
    time?: number;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => String, {nullable:true})
    imageDescription1?: string;

    @Field(() => String, {nullable:true})
    imageDescription2?: string;

    @Field(() => String, {nullable:true})
    imageDescription3?: string;

    @Field(() => String, {nullable:true})
    categoryId?: string;

    @Field(() => FilmCountAggregate, {nullable:true})
    _count?: FilmCountAggregate;

    @Field(() => FilmAvgAggregate, {nullable:true})
    _avg?: FilmAvgAggregate;

    @Field(() => FilmSumAggregate, {nullable:true})
    _sum?: FilmSumAggregate;

    @Field(() => FilmMinAggregate, {nullable:true})
    _min?: FilmMinAggregate;

    @Field(() => FilmMaxAggregate, {nullable:true})
    _max?: FilmMaxAggregate;
}
