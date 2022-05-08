import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActorWhereInput } from './actor-where.input';

@InputType()
export class ActorRelationFilter {

    @Field(() => ActorWhereInput, {nullable:true})
    is?: ActorWhereInput;

    @Field(() => ActorWhereInput, {nullable:true})
    isNot?: ActorWhereInput;
}
