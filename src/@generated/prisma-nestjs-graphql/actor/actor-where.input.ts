import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ActorOnFilmListRelationFilter } from '../actor-on-film/actor-on-film-list-relation-filter.input';

@InputType()
export class ActorWhereInput {

    @Field(() => [ActorWhereInput], {nullable:true})
    AND?: Array<ActorWhereInput>;

    @Field(() => [ActorWhereInput], {nullable:true})
    OR?: Array<ActorWhereInput>;

    @Field(() => [ActorWhereInput], {nullable:true})
    NOT?: Array<ActorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    birthday?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => ActorOnFilmListRelationFilter, {nullable:true})
    ActorOnFilm?: ActorOnFilmListRelationFilter;
}
