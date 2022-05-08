import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorOnFilmCreateManyFilmInput } from './actor-on-film-create-many-film.input';

@InputType()
export class ActorOnFilmCreateManyFilmInputEnvelope {

    @Field(() => [ActorOnFilmCreateManyFilmInput], {nullable:false})
    data!: Array<ActorOnFilmCreateManyFilmInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
