import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmUncheckedCreateNestedManyWithoutActorInput } from '../actor-on-film/actor-on-film-unchecked-create-nested-many-without-actor.input';

@InputType()
export class ActorUncheckedCreateInput {

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

    @Field(() => ActorOnFilmUncheckedCreateNestedManyWithoutActorInput, {nullable:true})
    ActorOnFilm?: ActorOnFilmUncheckedCreateNestedManyWithoutActorInput;
}
