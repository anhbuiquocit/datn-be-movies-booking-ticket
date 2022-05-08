import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActorOrderByWithRelationInput } from '../actor/actor-order-by-with-relation.input';
import { FilmOrderByWithRelationInput } from '../film/film-order-by-with-relation.input';

@InputType()
export class ActorOnFilmOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;

    @Field(() => ActorOrderByWithRelationInput, {nullable:true})
    actor?: ActorOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    actorId?: keyof typeof SortOrder;

    @Field(() => FilmOrderByWithRelationInput, {nullable:true})
    film?: FilmOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    filmId?: keyof typeof SortOrder;
}
