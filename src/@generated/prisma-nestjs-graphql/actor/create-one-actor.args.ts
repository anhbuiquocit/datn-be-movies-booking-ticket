import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorCreateInput } from './actor-create.input';

@ArgsType()
export class CreateOneActorArgs {

    @Field(() => ActorCreateInput, {nullable:false})
    data!: ActorCreateInput;
}
