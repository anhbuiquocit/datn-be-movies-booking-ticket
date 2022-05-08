import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorOnFilmWhereInput } from './actor-on-film-where.input';
import { ActorOnFilmOrderByWithRelationInput } from './actor-on-film-order-by-with-relation.input';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActorOnFilmCountAggregateInput } from './actor-on-film-count-aggregate.input';
import { ActorOnFilmMinAggregateInput } from './actor-on-film-min-aggregate.input';
import { ActorOnFilmMaxAggregateInput } from './actor-on-film-max-aggregate.input';

@ArgsType()
export class ActorOnFilmAggregateArgs {

    @Field(() => ActorOnFilmWhereInput, {nullable:true})
    where?: ActorOnFilmWhereInput;

    @Field(() => [ActorOnFilmOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActorOnFilmOrderByWithRelationInput>;

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:true})
    cursor?: ActorOnFilmWhereUniqueInput;

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
