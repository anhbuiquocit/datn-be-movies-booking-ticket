import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorWhereInput } from './actor-where.input';

@ArgsType()
export class DeleteManyActorArgs {

    @Field(() => ActorWhereInput, {nullable:true})
    where?: ActorWhereInput;
}
