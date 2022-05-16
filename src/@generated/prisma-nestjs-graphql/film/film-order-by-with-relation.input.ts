import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShowingOrderByRelationAggregateInput } from '../showing/showing-order-by-relation-aggregate.input';
import { ReviewFilmOrderByRelationAggregateInput } from '../review-film/review-film-order-by-relation-aggregate.input';
import { ActorOnFilmOrderByRelationAggregateInput } from '../actor-on-film/actor-on-film-order-by-relation-aggregate.input';
import { CategoryOrderByWithRelationInput } from '../category/category-order-by-with-relation.input';

@InputType()
export class FilmOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trailler?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    director?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageDescription1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageDescription2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    imageDescription3?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isHot?: keyof typeof SortOrder;

    @Field(() => ShowingOrderByRelationAggregateInput, {nullable:true})
    Showing?: ShowingOrderByRelationAggregateInput;

    @Field(() => ReviewFilmOrderByRelationAggregateInput, {nullable:true})
    ReviewFilm?: ReviewFilmOrderByRelationAggregateInput;

    @Field(() => ActorOnFilmOrderByRelationAggregateInput, {nullable:true})
    ActorOnFilm?: ActorOnFilmOrderByRelationAggregateInput;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    Category?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    categoryId?: keyof typeof SortOrder;
}
