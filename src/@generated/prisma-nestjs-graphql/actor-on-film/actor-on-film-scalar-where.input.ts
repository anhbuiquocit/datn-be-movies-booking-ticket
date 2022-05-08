import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ActorOnFilmScalarWhereInput {

    @Field(() => [ActorOnFilmScalarWhereInput], {nullable:true})
    AND?: Array<ActorOnFilmScalarWhereInput>;

    @Field(() => [ActorOnFilmScalarWhereInput], {nullable:true})
    OR?: Array<ActorOnFilmScalarWhereInput>;

    @Field(() => [ActorOnFilmScalarWhereInput], {nullable:true})
    NOT?: Array<ActorOnFilmScalarWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    actorId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    filmId?: StringFilter;
}
