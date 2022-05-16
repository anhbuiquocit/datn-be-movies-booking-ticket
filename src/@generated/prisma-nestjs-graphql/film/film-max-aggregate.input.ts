import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FilmMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    trailler?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    director?: true;

    @Field(() => Boolean, {nullable:true})
    actor?: true;

    @Field(() => Boolean, {nullable:true})
    time?: true;

    @Field(() => Boolean, {nullable:true})
    image?: true;

    @Field(() => Boolean, {nullable:true})
    imageDescription1?: true;

    @Field(() => Boolean, {nullable:true})
    imageDescription2?: true;

    @Field(() => Boolean, {nullable:true})
    imageDescription3?: true;

    @Field(() => Boolean, {nullable:true})
    categoryId?: true;
}
