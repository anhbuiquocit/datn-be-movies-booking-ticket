import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmWhereUniqueInput } from './actor-on-film-where-unique.input';
import { ActorOnFilmCreateWithoutFilmInput } from './actor-on-film-create-without-film.input';

@InputType()
export class ActorOnFilmCreateOrConnectWithoutFilmInput {

    @Field(() => ActorOnFilmWhereUniqueInput, {nullable:false})
    where!: ActorOnFilmWhereUniqueInput;

    @Field(() => ActorOnFilmCreateWithoutFilmInput, {nullable:false})
    create!: ActorOnFilmCreateWithoutFilmInput;
}
