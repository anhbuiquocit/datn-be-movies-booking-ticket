import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorUpdateManyMutationInput } from './actor-update-many-mutation.input';
import { ActorWhereInput } from './actor-where.input';

@ArgsType()
export class UpdateManyActorArgs {

    @Field(() => ActorUpdateManyMutationInput, {nullable:false})
    data!: ActorUpdateManyMutationInput;

    @Field(() => ActorWhereInput, {nullable:true})
    where?: ActorWhereInput;
}
