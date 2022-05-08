import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmWhereInput } from './actor-on-film-where.input';

@InputType()
export class ActorOnFilmListRelationFilter {

    @Field(() => ActorOnFilmWhereInput, {nullable:true})
    every?: ActorOnFilmWhereInput;

    @Field(() => ActorOnFilmWhereInput, {nullable:true})
    some?: ActorOnFilmWhereInput;

    @Field(() => ActorOnFilmWhereInput, {nullable:true})
    none?: ActorOnFilmWhereInput;
}
