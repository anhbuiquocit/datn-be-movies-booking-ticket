import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CinemaCreateManyClusterCinemaInput } from './cinema-create-many-cluster-cinema.input';

@InputType()
export class CinemaCreateManyClusterCinemaInputEnvelope {

    @Field(() => [CinemaCreateManyClusterCinemaInput], {nullable:false})
    data!: Array<CinemaCreateManyClusterCinemaInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
