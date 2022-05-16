import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Film } from '../film/film.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    createAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updateAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deleteAt!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [Film], {nullable:true})
    Film?: Array<Film>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
