import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmCreateNestedManyWithoutActorInput } from '../actor-on-film/actor-on-film-create-nested-many-without-actor.input';

@InputType()
export class ActorCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:true})
    birthday?: Date | string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => ActorOnFilmCreateNestedManyWithoutActorInput, {nullable:true})
    ActorOnFilm?: ActorOnFilmCreateNestedManyWithoutActorInput;
}
