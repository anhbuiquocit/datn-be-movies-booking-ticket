import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorWhereInput } from './actor-where.input';
import { ActorOrderByWithRelationInput } from './actor-order-by-with-relation.input';
import { ActorWhereUniqueInput } from './actor-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActorScalarFieldEnum } from './actor-scalar-field.enum';

@ArgsType()
export class FindManyActorArgs {

    @Field(() => ActorWhereInput, {nullable:true})
    where?: ActorWhereInput;

    @Field(() => [ActorOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActorOrderByWithRelationInput>;

    @Field(() => ActorWhereUniqueInput, {nullable:true})
    cursor?: ActorWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActorScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ActorScalarFieldEnum>;
}
