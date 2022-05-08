import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorCreateManyInput } from './actor-create-many.input';

@ArgsType()
export class CreateManyActorArgs {

    @Field(() => [ActorCreateManyInput], {nullable:false})
    data!: Array<ActorCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
