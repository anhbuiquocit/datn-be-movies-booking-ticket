import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ClusterCinema } from '../cluster-cinema/cluster-cinema.model';
import { Room } from '../room/room.model';
import { CinemaCount } from './cinema-count.output';

@ObjectType()
export class Cinema {

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
    address!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => ClusterCinema, {nullable:false})
    clusterCinema?: ClusterCinema;

    @Field(() => String, {nullable:false})
    ClusterCinemaId!: string;

    @Field(() => [Room], {nullable:true})
    Room?: Array<Room>;

    @Field(() => CinemaCount, {nullable:false})
    _count?: CinemaCount;
}
