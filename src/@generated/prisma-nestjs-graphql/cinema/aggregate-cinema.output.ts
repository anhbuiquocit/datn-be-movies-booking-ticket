import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CinemaCountAggregate } from './cinema-count-aggregate.output';
import { CinemaMinAggregate } from './cinema-min-aggregate.output';
import { CinemaMaxAggregate } from './cinema-max-aggregate.output';

@ObjectType()
export class AggregateCinema {

    @Field(() => CinemaCountAggregate, {nullable:true})
    _count?: CinemaCountAggregate;

    @Field(() => CinemaMinAggregate, {nullable:true})
    _min?: CinemaMinAggregate;

    @Field(() => CinemaMaxAggregate, {nullable:true})
    _max?: CinemaMaxAggregate;
}
