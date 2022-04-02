import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClusterCinemaWhereInput } from './cluster-cinema-where.input';

@InputType()
export class ClusterCinemaRelationFilter {

    @Field(() => ClusterCinemaWhereInput, {nullable:true})
    is?: ClusterCinemaWhereInput;

    @Field(() => ClusterCinemaWhereInput, {nullable:true})
    isNot?: ClusterCinemaWhereInput;
}
