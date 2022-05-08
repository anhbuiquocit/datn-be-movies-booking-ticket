import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorUpdateInput } from './actor-update.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';

@ArgsType()
export class UpdateOneActorArgs {

    @Field(() => ActorUpdateInput, {nullable:false})
    data!: ActorUpdateInput;

    @Field(() => ActorWhereUniqueInput, {nullable:false})
    where!: ActorWhereUniqueInput;
}
