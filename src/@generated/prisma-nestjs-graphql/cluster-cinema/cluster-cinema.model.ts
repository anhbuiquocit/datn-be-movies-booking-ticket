import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Cinema } from '../cinema/cinema.model';
import { ClusterCinemaCount } from './cluster-cinema-count.output';

@ObjectType()
export class ClusterCinema {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => [Cinema], {nullable:true})
    Cinema?: Array<Cinema>;

    @Field(() => ClusterCinemaCount, {nullable:false})
    _count?: ClusterCinemaCount;
}
