import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActorOnFilmCountOrderByAggregateInput } from './actor-on-film-count-order-by-aggregate.input';
import { ActorOnFilmMaxOrderByAggregateInput } from './actor-on-film-max-order-by-aggregate.input';
import { ActorOnFilmMinOrderByAggregateInput } from './actor-on-film-min-order-by-aggregate.input';

@InputType()
export class ActorOnFilmOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filmId?: keyof typeof SortOrder;

    @Field(() => ActorOnFilmCountOrderByAggregateInput, {nullable:true})
    _count?: ActorOnFilmCountOrderByAggregateInput;

    @Field(() => ActorOnFilmMaxOrderByAggregateInput, {nullable:true})
    _max?: ActorOnFilmMaxOrderByAggregateInput;

    @Field(() => ActorOnFilmMinOrderByAggregateInput, {nullable:true})
    _min?: ActorOnFilmMinOrderByAggregateInput;
}
