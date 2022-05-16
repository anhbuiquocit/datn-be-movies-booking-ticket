import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Showing } from '../showing/showing.model';
import { ReviewFilm } from '../review-film/review-film.model';
import { ActorOnFilm } from '../actor-on-film/actor-on-film.model';
import { Category } from '../category/category.model';
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

    @Field(() => Int, {nullable:true})
    time!: number | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => String, {nullable:true})
    imageDescription1!: string | null;

    @Field(() => String, {nullable:true})
    imageDescription2!: string | null;

    @Field(() => String, {nullable:true})
    imageDescription3!: string | null;

    @Field(() => [Showing], {nullable:true})
    Showing?: Array<Showing>;

    @Field(() => [ReviewFilm], {nullable:true})
    ReviewFilm?: Array<ReviewFilm>;

    @Field(() => [ActorOnFilm], {nullable:true})
    ActorOnFilm?: Array<ActorOnFilm>;

    @Field(() => Category, {nullable:true})
    Category?: Category | null;

    @Field(() => String, {nullable:true})
    categoryId!: string | null;

    @Field(() => FilmCount, {nullable:false})
    _count?: FilmCount;
}
