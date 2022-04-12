import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Showing } from '../showing/showing.model';
import { FilmCount } from './film-count.output';

@ObjectType()
export class Film {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => String, {nullable:false})
    trailler!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    director!: string | null;

    @Field(() => String, {nullable:true})
    actor!: string | null;

    @Field(() => String, {nullable:true})
    time!: string | null;

    @Field(() => [Showing], {nullable:true})
    Showing?: Array<Showing>;

    @Field(() => FilmCount, {nullable:false})
    _count?: FilmCount;
}
