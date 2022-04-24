import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Booking } from '../booking/booking.model';
import { ReviewFilm } from '../review-film/review-film.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    createAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deleteAt!: Date | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => String, {nullable:true})
    firstname!: string | null;

    @Field(() => String, {nullable:true})
    lastname!: string | null;

    @Field(() => Date, {nullable:true})
    birthday!: Date | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => Boolean, {nullable:true})
    active!: boolean | null;

    @Field(() => Int, {nullable:true})
    point!: number | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    role!: string | null;

    @Field(() => [Booking], {nullable:true})
    Booking?: Array<Booking>;

    @Field(() => [ReviewFilm], {nullable:true})
    ReviewFilm?: Array<ReviewFilm>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
