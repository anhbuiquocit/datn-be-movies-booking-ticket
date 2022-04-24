import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Film } from '../film/film.model';

@ObjectType()
export class ReviewFilm {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Film, {nullable:false})
    film?: Film;

    @Field(() => String, {nullable:false})
    filmId!: string;

    @Field(() => String, {nullable:true})
    comment!: string | null;
}
