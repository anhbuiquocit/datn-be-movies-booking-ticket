import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmScalarWhereInput } from './actor-on-film-scalar-where.input';
import { ActorOnFilmUpdateManyMutationInput } from './actor-on-film-update-many-mutation.input';

@InputType()
export class ActorOnFilmUpdateManyWithWhereWithoutFilmInput {

    @Field(() => ActorOnFilmScalarWhereInput, {nullable:false})
    where!: ActorOnFilmScalarWhereInput;

    @Field(() => ActorOnFilmUpdateManyMutationInput, {nullable:false})
    data!: ActorOnFilmUpdateManyMutationInput;
}
