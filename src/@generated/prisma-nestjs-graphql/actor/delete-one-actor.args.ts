import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorWhereUniqueInput } from './actor-where-unique.input';

@ArgsType()
export class DeleteOneActorArgs {

    @Field(() => ActorWhereUniqueInput, {nullable:false})
    where!: ActorWhereUniqueInput;
}
