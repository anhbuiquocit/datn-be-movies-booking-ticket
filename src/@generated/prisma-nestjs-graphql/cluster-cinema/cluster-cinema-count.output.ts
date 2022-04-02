import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ClusterCinemaCount {

    @Field(() => Int, {nullable:false})
    Cinema?: number;
}
