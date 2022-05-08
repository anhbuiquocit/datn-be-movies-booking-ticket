import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { ActorCreateInput } from './actor-create.input';
import { ActorUpdateInput } from './actor-update.input';

@ArgsType()
export class UpsertOneActorArgs {

    @Field(() => ActorWhereUniqueInput, {nullable:false})
    where!: ActorWhereUniqueInput;

    @Field(() => ActorCreateInput, {nullable:false})
    create!: ActorCreateInput;

    @Field(() => ActorUpdateInput, {nullable:false})
    update!: ActorUpdateInput;
}
