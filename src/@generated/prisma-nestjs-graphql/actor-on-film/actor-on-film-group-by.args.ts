import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorOnFilmWhereInput } from './actor-on-film-where.input';
import { ActorOnFilmOrderByWithAggregationInput } from './actor-on-film-order-by-with-aggregation.input';
import { ActorOnFilmScalarFieldEnum } from './actor-on-film-scalar-field.enum';
import { ActorOnFilmScalarWhereWithAggregatesInput } from './actor-on-film-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ActorOnFilmCountAggregateInput } from './actor-on-film-count-aggregate.input';
import { ActorOnFilmMinAggregateInput } from './actor-on-film-min-aggregate.input';
import { ActorOnFilmMaxAggregateInput } from './actor-on-film-max-aggregate.input';

@ArgsType()
export class ActorOnFilmGroupByArgs {

    @Field(() => ActorOnFilmWhereInput, {nullable:true})
    where?: ActorOnFilmWhereInput;

    @Field(() => [ActorOnFilmOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ActorOnFilmOrderByWithAggregationInput>;

    @Field(() => [ActorOnFilmScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ActorOnFilmScalarFieldEnum>;

    @Field(() => ActorOnFilmScalarWhereWithAggregatesInput, {nullable:true})
    having?: ActorOnFilmScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActorOnFilmCountAggregateInput, {nullable:true})
    _count?: ActorOnFilmCountAggregateInput;

    @Field(() => ActorOnFilmMinAggregateInput, {nullable:true})
    _min?: ActorOnFilmMinAggregateInput;

    @Field(() => ActorOnFilmMaxAggregateInput, {nullable:true})
    _max?: ActorOnFilmMaxAggregateInput;
}
