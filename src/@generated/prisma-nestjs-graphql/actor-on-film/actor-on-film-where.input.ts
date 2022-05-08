import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ActorRelationFilter } from '../actor/actor-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FilmRelationFilter } from '../film/film-relation-filter.input';

@InputType()
export class ActorOnFilmWhereInput {

    @Field(() => [ActorOnFilmWhereInput], {nullable:true})
    AND?: Array<ActorOnFilmWhereInput>;

    @Field(() => [ActorOnFilmWhereInput], {nullable:true})
    OR?: Array<ActorOnFilmWhereInput>;

    @Field(() => [ActorOnFilmWhereInput], {nullable:true})
    NOT?: Array<ActorOnFilmWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => ActorRelationFilter, {nullable:true})
    actor?: ActorRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    actorId?: StringFilter;

    @Field(() => FilmRelationFilter, {nullable:true})
    film?: FilmRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    filmId?: StringFilter;
}
