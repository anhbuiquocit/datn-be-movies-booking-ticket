import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaCreateNestedManyWithoutClusterCinemaInput } from '../cinema/cinema-create-nested-many-without-cluster-cinema.input';

@InputType()
export class ClusterCinemaCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => CinemaCreateNestedManyWithoutClusterCinemaInput, {nullable:true})
    Cinema?: CinemaCreateNestedManyWithoutClusterCinemaInput;
}