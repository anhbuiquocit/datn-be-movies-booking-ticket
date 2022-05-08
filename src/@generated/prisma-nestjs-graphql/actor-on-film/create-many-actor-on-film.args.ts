import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorOnFilmCreateManyInput } from './actor-on-film-create-many.input';

@ArgsType()
export class CreateManyActorOnFilmArgs {

    @Field(() => [ActorOnFilmCreateManyInput], {nullable:false})
    data!: Array<ActorOnFilmCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
