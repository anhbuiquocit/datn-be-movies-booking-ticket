import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { CinemaListRelationFilter } from '../cinema/cinema-list-relation-filter.input';

@InputType()
export class ClusterCinemaWhereInput {

    @Field(() => [ClusterCinemaWhereInput], {nullable:true})
    AND?: Array<ClusterCinemaWhereInput>;

    @Field(() => [ClusterCinemaWhereInput], {nullable:true})
    OR?: Array<ClusterCinemaWhereInput>;

    @Field(() => [ClusterCinemaWhereInput], {nullable:true})
    NOT?: Array<ClusterCinemaWhereInput>;

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

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => CinemaListRelationFilter, {nullable:true})
    Cinema?: CinemaListRelationFilter;
}
