import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorOnFilmWhereInput } from './actor-on-film-where.input';
import { ActorOnFilmOrderByWithRelationInput } from './actor-on-film-order-by-with-relation.input';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActorOnFilmScalarFieldEnum } from './actor-on-film-scalar-field.enum';

@ArgsType()
export class FindFirstActorOnFilmArgs {

    @Field(() => ActorOnFilmWhereInput, {nullable:true})
    where?: ActorOnFilmWhereInput;

    @Field(() => [ActorOnFilmOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActorOnFilmOrderByWithRelationInput>;

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:true})
    cursor?: ActorOnFilmWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActorOnFilmScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ActorOnFilmScalarFieldEnum>;
}
