import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReviewFilmCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    filmId!: string;

    @Field(() => String, {nullable:true})
    comment?: string;
}
